import { JsxAttribute } from "https://deno.land/x/ts_morph@20.0.0/ts_morph.js";
import { JSX } from "preact/jsx-runtime";

// const { title, image, link } = Astro.props;
// ---

// <style>
//  .container {
//   margin-top: 2rem;
//   overflow: hidden;
//   border-radius: 0.25rem;
//   background-color: var(--slider-bg);
//  }

// .box {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 1rem;
// }

// .text {
//   width: 100%;
//   flex: 1;
//   margin-right: 2rem;

//   & > a {
//     color: black;
//     text-decoration: underline;
//   }
// }

// .repo-link {
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
//   font-size: 1.5rem;
//   line-height: 2rem;
//   font-weight: 600;
//   /* text-decoration: none !important; */

//   [astro-icon] {
//     width: 32px;
//     margin-right: 0.6rem;
//   }
// }
// </style>

export interface Props {
  title: string;
  link: string;
  imgSrc: string;
  children: JSX.Element | JSX.Element[];
}

export default function Slide({ title, imgSrc, link, children }: Props) {
  return (
    <article class="overflow-hidden rounded bg-slider-bg">
      <div class="flex flex-col w-full p-4">
        <div class="w-full flex-1 mr-8">
          <a
            href={link}
            class="flex items-center text-2xl leading-8 font-semibold mb-4 text-black underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Icon name="mdi:github" /> */}
            <p>{title}</p>
          </a>
          {children}
        </div>
        <div class="hidden flex-col flex-1 w-4/12 bg-white border items-center justify-center rounded-sm border-solid border-black">
          <img src={imgSrc} alt={title} />
        </div>
      </div>
    </article>
  );
}
