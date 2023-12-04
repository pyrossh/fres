import { JSX } from "preact/jsx-runtime";
import GithubIcon from "./icons/GithubIcon.tsx";

export interface Props {
  title: string;
  link: string;
  children: JSX.Element | JSX.Element[];
}

export default function Slide({ title, link, children }: Props) {
  return (
    <article class="overflow-hidden rounded bg-slider-bg">
      <div class="flex flex-col w-full p-4">
        <div class="w-full flex-1 mr-8">
          <a
            href={link}
            class="flex items-center text-lg font-semibold mb-2 text-black underline child-svg:mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <p>{title}</p>
          </a>
          {children}
        </div>
      </div>
    </article>
  );
}
