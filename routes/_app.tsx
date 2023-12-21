import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function App({ Component, url }: PageProps) {
  const isStatsPage = url.pathname.includes("/stats");
  const bodyStyle = isStatsPage ? { background: "#F8F5ED" } : {};
  return (
    <html lang="en" class="h-full w-full">
      <head>
        <title>pyros.sh</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="author" content="pyrossh" />
        <meta name="keywords" content="pyros.sh,pyrossh,astro,website" />
        <meta property="og:site_name" content="pyros.sh" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={url.toString()} />
        <meta property="og:url" content={url.toString()} />
        <meta property="og:site_name" content="pyros.sh" />
        <link rel="icon" type="image/png" href={asset("/favicon.png")} />
        <link rel="stylesheet" href={asset("/styles.css")} />
      </head>
      <body class="leading-8 flex flex-1 flex-col font-normal text-lg sm:leading-7 m-0">
        <Header />
        <main class="w-full h-full block bg-white" style={bodyStyle}>
          <div class="flex w-full flex-1 flex-row justify-center">
            <div class="flex w-full flex-1 flex-row items-center max-w-5xl mt-4 mb-20 p-4">
              <Component />
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
