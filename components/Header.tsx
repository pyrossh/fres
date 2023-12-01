import SocialLinks from "./SocialLinks.tsx";

export default function Header() {
  return (
    <header>
      <nav class="sm:py-2 md:py-0 flex w-full flex-1 flex-row justify-center bg-black text-xl font-mono">
        <div class="flex flex-row flex-1 items-center p-3.5 max-w-5xl">
          <a
            class="flex text-yellow pr-4 hover:no-underline text-xl ml-0 pl-0 pr-4"
            href="/"
          >
            <span class="mr-1 font-logo font-bold">木</span> pyros.sh
          </a>
          <div class="flex flex-row flex-1 items-center">
            <a
              class="text-white mx-1 px-2 hover:bg-[#444] hover:no-underline"
              href="/dev"
              rel="prefetch"
            >
              dev
            </a>
            <div class="text-white">|</div>
            <a
              class="text-white mx-1 px-2 hover:bg-[#444] hover:no-underline"
              href="/ref"
              rel="prefetch"
            >
              ref
            </a>
            <div class="text-white">|</div>
            <a
              class="text-white mx-1 px-2 hover:bg-[#444] hover:no-underline"
              href="/blog"
              rel="prefetch"
            >
              blog
            </a>
          </div>
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
