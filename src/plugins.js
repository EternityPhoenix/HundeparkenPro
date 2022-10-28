import fs from "fs";

export function resetPluginIndex()
{
    fs.writeFileSync("./src/payload/plugins/index.ts", `export const dummy = '';`);
}

export function generatePluginIndex()
{
    const plugins = fs.readdirSync("./src/payload/plugins", { withFileTypes: true }).filter(dir => dir.isDirectory()).map(dir => `export * from "./${dir.name}";`);
    fs.writeFileSync("./src/payload/plugins/index.ts", plugins.join(""));
}