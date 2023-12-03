import { FreshContext } from "$fresh/server.ts";
import { createReporter } from "https://deno.land/x/g_a/mod.ts";

const report = createReporter({
  id: "UA-31541587-1",
});

export async function handler(req: Request, ctx: FreshContext) {
  const start = performance.now();
  const resp = await ctx.next();
  report(req, { remoteAddr: ctx.remoteAddr }, resp, start, null);
  return resp;
}
