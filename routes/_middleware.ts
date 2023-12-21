import { FreshContext } from "$fresh/server.ts";
import UAParser from "ua-parser-js";
import isbot from "isbot";
import IPinfoWrapper from "ipinfo";
import { recordVisit } from "../services/analytics.ts";

const ipInfoClient = new IPinfoWrapper("3f197e26fa9210");

export async function handler(req: Request, ctx: FreshContext) {
  const resp = await ctx.next();
  const userAgent = req.headers.get("user-agent") || "";
  const ipRes = await ipInfoClient.lookupIp(ctx.remoteAddr.hostname);
  if (
    req.headers.get("accept")?.includes("text/html") &&
    !isbot(userAgent) &&
    !ipRes.bogon
  ) {
    const pathname = new URL(req.url).pathname;
    const referer = req.headers.get("referer") || "";
    const parser = new UAParser(userAgent);
    recordVisit(
      pathname,
      referer,
      ipRes.country,
      parser.getOS().name,
      parser.getBrowser().name,
    );
  }
  return resp;
}
