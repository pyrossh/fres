// import { launch } from "https://deno.land/x/astral/mod.ts";

// const browser = await launch({ headless: true });
// const page = await browser.newPage("http://localhost:8000/cv");
// const screenshot = await page.pdf();
// Deno.writeFileSync("cv.pdf", screenshot);
// await browser.close();

// const kv = await Deno.openKv(
//   "https://api.deno.com/databases/07a4395a-f4e2-47cf-8d2a-9a62382193fc/connect",
// );

// const entries = kv.list({
//   prefix: ["analytics"],
// });

// for await (const entry of entries) {
//   await kv.delete(entry.key);
// }
