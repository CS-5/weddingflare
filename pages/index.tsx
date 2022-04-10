import { ReactNode } from "react";
import Head from "next/head";
import RSVP from "../components/RSVP";
import Section from "../components/Section";
import Subheader from "../components/subheader";

export default function Index(): ReactNode {
  return (
    <>
      <Head>
        <title>Carson & Tatianna</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="overflow-auto">
        {/* Background Image */}
        <div className="fixed h-full w-full -z-1">
          <img
            src="/image/background.webp"
            alt=""
            className="absolute object-cover h-full w-full top-0 bottom-0 m-auto"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
          />
        </div>

        {/* Header */}
        <header className="z-0 fixed left-2/4 -translate-x-1/2 text-center pt-6 md:pt-28 w-full md:w-10/12">
          <h1 className="font-cursive text-6xl md:text-8xl text-theme-primary text-shadow-l">
            <span className="block md:inline-block">
              <span className="text-9xl">C</span>arson &{" "}
              <span className="text-9xl tracking-[-0.2em]">T</span>atianna
            </span>
          </h1>
          <h2 className="mt-[-1rem] md:mt-8 font-serif text-2xl md:text-3xl text-white">
            <span className="block md:hidden">&mdash;</span>
            <span className="block md:inline-block">
              {new Date(`06/12/2022 15:00`).toLocaleDateString("en-US", {
                timeZone: "America/New_York",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="hidden md:inline-block">&nbsp;&mdash;&nbsp;</span>
            <span className="block text-1xl md:inline-block">
              Shippensburg, PA
            </span>
          </h2>
        </header>

        {/* Main */}
        <main className="relative bg-theme-white bg-[url('/image/cardbg.jpg')] text-theme-gray rounded-t-[3rem] mx-auto mt-[42rem] md:mt-[48rem] lg:mt-[40rem] md:rounded-[3rem] md:shadow-2xl text-lg leading-8 py-8 px-12 md:px-20 md:w-10/12 lg:w-[48rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-theme-primary mx-auto animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>

          <div className="relative z-10 pt-8 md:px-14">
            <Section name="RSVP" className="mb-20">
              <RSVP />
            </Section>
            <Section name="Information" className="pt-8">
              <h2 className=" text-theme-accent text-xl font-bold">
                Dress Code
              </h2>
              <p className="pb-4">Here is some info about the dress code</p>
              <h2 className=" text-theme-accent text-xl font-bold">
                Other thing
              </h2>
              <p className="pb-4">Words</p>
              <h2 className="text-theme-accent text-xl font-bold">
                Yet another thing
              </h2>
              <p className="pb-4">Words</p>
            </Section>
            <Section name="Registry" className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 text-center pb-4 font-semibold">
                  We are using Amazon and Target to handle our wedding registry.
                  Click the images below to be taken to their respective
                  websites. There will also be a jar for a honeymoon fund at the
                  wedding.
                </div>
                <a
                  href="
                  https://smile.amazon.com/wedding/share/carsonandtatianna"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/image/amazon.webp"
                    alt="Amazon"
                    className="transition duration-300 ease-in-out h-16 m-auto opacity-75 hover:opacity-100 grayscale hover:grayscale-0"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                </a>
                <a
                  href="https://www.target.com/gift-registry/gift/carsonandtatianna"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/image/target.webp"
                    alt="Target"
                    className="transition duration-300 ease-in-out h-14 mx-auto md:-mt-2 opacity-75 hover:opacity-100 grayscale hover:grayscale-0"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                </a>
              </div>
            </Section>
          </div>

          {/* Background Graphics */}
          <div className="opacity-40">
            <div className="absolute top-0 left-0 w-full h-96">
              <img
                src="/image/flowers/top.webp"
                className="rounded-t-[3rem]"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                alt=""
                width="1428"
                height="635"
              />
            </div>
            <div className="absolute top-1/3 left-0 w-full md:h-[30rem]">
              <img
                src="/image/flowers/middle.webp"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                alt=""
                width="1428"
                height="777"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <img
                src="/image/flowers/bottom.webp"
                className="hidden md:block md:rounded-[3rem]"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                alt=""
                width="1428"
                height="579"
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 bg-theme-white bg-[url('/image/cardbg.jpg')] text-theme-gray md:bg-none md:bg-opacity-0 md:text-white pt-0 pb-5 md:pt-5 text-center">
          <span className="block md:inline-block">
            Made with ❤️ by{" "}
            <a
              className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
              href="https://github.com/CS-5/weddingflare/"
              target="_blank"
              rel="noreferrer"
            >
              Carson
            </a>
            .&nbsp;
          </span>
          <span className="block md:inline-block">
            Powered by Cloudflare{" "}
            <a
              className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
              href="https://workers.cloudflare.com/"
              target="_blank"
              rel="noreferrer"
            >
              Workers
            </a>{" "}
            and{" "}
            <a
              className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
              href="https://pages.cloudflare.com/"
              target="_blank"
              rel="noreferrer"
            >
              Pages
            </a>
            .
          </span>
        </footer>
      </div>
    </>
  );
}
