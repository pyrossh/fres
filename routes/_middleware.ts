import { FreshContext } from "$fresh/server.ts";
import UAParser from "ua-parser-js";
import isbot from "isbot";
import IPinfoWrapper from "ipinfo";
import { recordVisit } from "../services/analytics.ts";

const ipInfoClient = new IPinfoWrapper("3f197e26fa9210");

export async function handler(req: Request, ctx: FreshContext) {
  const resp = await ctx.next();
  const userAgent = req.headers.get("user-agent") || "";
  if (
    req.headers.get("accept")?.includes("text/html") && !isbot(userAgent)
  ) {
    ipInfoClient.lookupIp(ctx.remoteAddr.hostname)
      .then((ipRes: { bogon: boolean; country: string }) => {
        if (!ipRes.bogon) {
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
      })
      .catch((err: Error) => {
        console.log("failed to get ip", err);
      });
  }
  return resp;
}
