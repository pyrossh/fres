import { FreshContext } from "$fresh/server.ts";
import isbot from "isbot";
import { recordVisit } from "../services/analytics.ts";
import manifest from "../fresh.gen.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const resp = await ctx.next();
  const registeredRoutes = Object.keys(manifest.routes)
    .map((r) =>
      r
        .replaceAll("./routes", "")
        .replaceAll(".tsx", "")
        .replaceAll("index", "")
    )
    .filter((a) => !["/_404", "/_app", "/_middleware.ts"].includes(a));
  const userAgent = req.headers.get("user-agent") || "";
  const referer = req.headers.get("referer") || "";
  const pathname = new URL(req.url).pathname;
  if (
    registeredRoutes.includes(pathname) &&
    req.headers.get("accept")?.includes("text/html") &&
    !isbot(userAgent)
  ) {
    recordVisit(ctx.remoteAddr.hostname, userAgent, pathname, referer);
  }
  return resp;
}
