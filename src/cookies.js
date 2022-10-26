import fs from "fs";
const authfile = './auth.token'

export async function saveCookies(page)
{
    const cookies = await page.cookies()
    const SESSION = cookies.find(cookie => cookie.name === 'PHPSESSID')
    if(SESSION)
    {
        fs.writeFileSync(authfile, JSON.stringify(SESSION));
    }
}

export async function restoreCookie(page)
{
    if(fs.existsSync(authfile))
    {
        const data = JSON.parse(fs.readFileSync(authfile));
        await page.setCookie({
            ...data,
            expires: -1
        });
    }
}