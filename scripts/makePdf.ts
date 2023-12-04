import { launch } from "https://deno.land/x/astral/mod.ts";

const browser = await launch({ headless: true });
const page = await browser.newPage("http://localhost:8000/cv");
const screenshot = await page.pdf();
Deno.writeFileSync("cv.pdf", screenshot);
await browser.close();
