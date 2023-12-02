import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

// const SEO = () => (
//   <title>fres</title>
//   <link rel="canonical" href={Astro.url} />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="icon" type="image/png" href="/favicon.png" />
//     <meta name="author" content="pyrossh" />
//     <meta name="keywords" content="pyros.sh,pyrossh,astro,website" />
//     <meta property="og:site_name" content="pyros.sh" />
//     <meta property="og:type" content="website" />
//     <meta property="og:url" content={Astro.url} />
//     <meta property="og:site_name" content="pyros.sh" />
// )

export default function App({ Component }: AppProps) {
  return (
    <html lang="en" class="h-full w-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="leading-8 flex flex-1 flex-col font-normal text-lg sm:leading-7 m-0 bg-black-lighter">
        <Header />
        <main class="w-full h-full block bg-white">
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
