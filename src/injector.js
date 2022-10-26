import fetch from "node-fetch";
import fs from "fs";
import { saveCookies } from "./cookies";

async function tryInject(data, page) {
  const injectionData = fs.readFileSync("./src/payload.js", "utf8");
  const entries = [`(window['debug']`];

  if (data.includes(entries[0])) {
    await saveCookies(page);
    const parts = data.split(entries[0]);
    console.log("Found entry!!");
    const formattedData = `(()=>{
          ${injectionData}
          })()`;
    return `${parts[0]} (window.test=1),  ${formattedData}, ${entries[0]}${parts[1]}`;
  }

  return data;
}

export async function inject(page) {
  await page.setRequestInterception(true);

  page.on("request", async (interceptedRequest) => {
    const url = interceptedRequest.url();

    if (interceptedRequest.isInterceptResolutionHandled()) return;

    if (url.endsWith("scripts/serviceworker.js")) {
      interceptedRequest.abort();
    } else if (url.includes(".js") && url.includes("h5/game/")) {
      const data = await fetch(url).then((d) => d.text());
      console.log("Trying", url);
      interceptedRequest.respond({
        body: tryInject(data, page),
        contentType: "application/javascript",
      });
    } else {
      interceptedRequest.continue();
    }
  });
}
