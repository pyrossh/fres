import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import Footer from "../src/components_old/Footer.tsx";
import Header from "../src/components_old/Header.tsx";

export default function App({ Component, url }: PageProps) {
  const isStatsPage = url.pathname.includes("/stats");
  const bodyStyle = isStatsPage ? { background: "#F8F5ED" } : {};
  return (
    <html lang="en" class="h-full w-full">
      <head>
        <link rel="canonical" href={url.toString()} />
        <meta property="og:url" content={url.toString()} />
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
