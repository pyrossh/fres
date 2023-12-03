import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function Error404({ url }: PageProps) {
  return (
    <>
      <Head>
        <title slot="head">pyros.sh | Page Not Found</title>
        <meta name="description" content="Page Not Found" />
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">The page you were looking for doesn't exist.</p>
          <pre>Path: {url.pathname}</pre>
          <a href="/" class="underline mt-4">
            Go back home
          </a>
        </div>
      </div>
    </>
  );
}
