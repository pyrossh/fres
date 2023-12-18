import Slide from "../components/Slide.tsx";
import ProjectsIcon from "../components/icons/ProjectsIcon.tsx";
import TreeIcon from "../components/icons/TreeIcon.tsx";
import ContactIcon from "../components/icons/ContactIcon.tsx";
import HardwareIcon from "../components/icons/HardwareIcon.tsx";
import SoftwareIcon from "../components/icons/SoftwareIcon.tsx";
import GooglePlayIcon from "../components/icons/GooglePlayIcon.tsx";
import AppStoreIcon from "../components/icons/AppStoreIcon.tsx";
import { asset, Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div class="mx-auto">
      <Head>
        <title>pyros.sh</title>
        <meta
          name="description"
          content="A fullstack developer from Bangalore who likes to create frameworks and programming languages."
        />
      </Head>
      <div class="heir-h2:text-xl heir-h2:font-bold heir-h2:middle">
        <h1 class="text-3xl font-bold mb-4">Hello!</h1>
        <p>
          I{"'"}m{" "}
          <a class="underline" href="https://www.linkedin.com/in/peter-john-in">
            <strong>Peter John</strong>
          </a>
          , a fullstack developer from Bengaluru, India. I love writing code and
          I am lucky enough to do this as my job.
        </p>
        <p>
          I currently work for Equal Experts. I have a strong passion for golang
          but I also work with react and nodejs. I{"'"}ve mostly worked with
          startups and product based companies. I have gained a lot of domain
          specific knowledge in healthcare and finance during these startup
          years.
        </p>
        <p>
          I like to work on open source and hobby projects. Over the course of
          {" "}
          {new Date().getFullYear() - 2014}{" "}
          years I{"'"}ve accumulated a lot of useful projects used by many
          people around the world.
        </p>
        <div>
          <div class="flex items-center mt-8 mb-4 child-svg:mr-2 child-svg:text-pink-800">
            <ProjectsIcon size="36" />
            <h2>Projects</h2>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 child-section:flex child-section:flex-col child-section:mt-4 child-section:mx-1">
            <Slide
              title="Rust-embed"
              link="https://github.com/pyrossh/rust-embed"
            >
              <p>
                A rust proc-macro which loads files into the rust binary at
                compile time during release and loads the file from the fs
                during dev
              </p>
            </Slide>
            <Slide title="Gromer" link="https://github.com/pyrossh/gromer">
              <p>
                Gromer is a framework and cli to build web apps in golang. It
                uses a declarative syntax using inline jsx like templates for
                components and pages.
              </p>
            </Slide>
            <Slide title="Palm" link="https://github.com/pyrossh/palm">
              <p>
                A programming language with a syntax largely inspired by gleam
                and pyret but with the simplicity of go.
              </p>
              <p>WIP to support compilation to WASM with C-FFI support.</p>
            </Slide>
            <Slide
              title="Only Bible App"
              link="https://github.com/pyrossh/only-bible-app"
            >
              <p>
                The only bible app you will ever need. No ads, No in-app
                purchases, No distractions.
              </p>
              <div class="flex mt-4">
                <a
                  class="mr-4"
                  href="https://play.google.com/store/apps/details?id=sh.pyros.only_bible_app"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <GooglePlayIcon />
                </a>
                <a
                  href="https://apps.apple.com/us/app/only-bible-app/id6467606465"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <AppStoreIcon />
                </a>
              </div>
            </Slide>
            <section>
              <div class="flex items-center child-svg:mr-2 child-svg:text-green-800">
                <HardwareIcon size="32" />
                <h2>Hardware</h2>
              </div>
              <ul class="grid gap-2 grid-cols-1 text-center mt-4 heir-a:text-blue-900 child:bg-gray-200 child:p-1">
                <li>M2 Macbook Air</li>
                <li>Raspberry Pi 4B</li>
                <li>Raspberry Pi Zero 2W</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center child-svg:mr-2 child-svg:text-red-800">
                <SoftwareIcon size="32" />
                <h2>Software</h2>
              </div>
              <ul class="grid gap-2 grid-cols-3 text-center mt-4 heir-img:w-12 heir-a:text-base heir-a:text-blue-900 heir-a:flex heir-a:flex-col heir-a:items-center child:bg-gray-200 child:p-2 child:pb-4">
                <li>
                  <a
                    href="https://github.com/exelban/stats"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stats
                    <img src={asset("/logos/stats.png")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/brave/brave-browser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brave
                    <img src={asset("/logos/brave.png")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/microsoft/vscode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VS Code
                    <img src={asset("/logos/code.png")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/helix-editor/helix"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Helix
                    <img src={asset("/logos/helix.png")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/fish-shell/fish-shell"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fish
                    <img src={asset("/logos/fish.png")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/gnachman/iTerm2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iTerm2
                    <img src={asset("/logos/iterm.png")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://colorslurp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Slurp
                    <img class="w-12" src={asset("/logos/slurp.png")} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vectornator.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Curve
                    <img class="w-12" src={asset("/logos/curve.png")} />
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <div class="flex items-center child-svg:mr-2 child-svg:text-amber-900">
                <TreeIcon size="36" />
                <h2>Interests</h2>
              </div>
              <ul class="grid gap-2 grid-cols-3 text-center mt-4 child:bg-slate-100 child:p-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Flutter</li>
                <li>Go</li>
                <li>Rust</li>
                <li>Kotlin</li>
                <li>Firestore</li>
                <li>Kubernetes</li>
                <li>Istio</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center child-svg:mr-2 child-svg:text-cyan-950">
                <ContactIcon size="36" />
                <h2>Contact</h2>
              </div>
              <ul class="grid gap-2 grid-cols-1 text-lg text-left mt-4 heir-strong:mr-2 child:bg-slate-100 child:p-2">
                <li>
                  <strong>Email:</strong>
                  <span>pyros2097@gmail.com</span>
                </li>
                <li>
                  <strong>Github:</strong>
                  <a class="text-blue-900" href="https://github.com/pyrossh">
                    https://github.com/pyrossh
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>
                  <a
                    class="text-blue-900"
                    href="https://www.linkedin.com/in/peter-john-in"
                  >
                    https://www.linkedin.com/in/pyrossh
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
