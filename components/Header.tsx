import SocialLinks from "./SocialLinks.tsx";

export default function Header() {
  return (
    <header>
      <nav class="spy-2 m:py-0 flex w-full flex-1 flex-row justify-center bg-black text-xl font-mono">
        <div class="flex flex-row flex-1 items-center p-3.5 max-w-5xl">
          <a
            class="flex text-yellow pr-4 hover:no-underline text-xl ml-0 pl-0"
            href="/"
          >
            <span class="mr-1 font-logo font-bold">木</span> pyros.sh
          </a>
          <div class="flex flex-row flex-1 items-center text-white [&>a]:mx-1 [&>a]:px-2 [&>a:hover]:bg-gray-600">
            <a class="data-current:bg-gray-600" href="/dev" rel="prefetch">
              dev
            </a>
            <div>|</div>
            <a class="data-current:bg-gray-600" href="/ref" rel="prefetch">
              ref
            </a>
            <div>|</div>
            <a class="data-current:bg-gray-600" href="/blog" rel="prefetch">
              blog
            </a>
          </div>
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
