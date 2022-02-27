import { ReactNode } from "react";
import Head from "next/head";
import RSVP from "../components/sections/RSVP";
import Schedule from "../components/sections/Schedule";
import Section from "../components/Section";

import site from "../site.json";

export default function Index(): ReactNode {
  return (
    <>
      <Head>
        <title>{site.name}</title>
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
              {new Date(
                `${site.event.date} ${site.event.time}`
              ).toLocaleDateString("en-US", {
                timeZone: site.event.timezone,
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="hidden md:inline-block">&nbsp;&mdash;&nbsp;</span>
            <span className="block text-1xl md:inline-block">
              {site.event.location.address}
            </span>
          </h2>
        </header>

        {/* Main */}
        <main className="relative bg-theme-white text-theme-gray rounded-t-[3rem] mx-auto mt-[42rem] md:mt-[48rem] lg:mt-[40rem] md:rounded-[3rem] md:shadow-2xl text-lg leading-8 p-8 md:w-10/12 lg:w-[48rem]">
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

          <div className="relative z-10">
            <Section name="RSVP" className="pt-8">
              <RSVP />
            </Section>
            <Section name="Information" className="pt-8">
              {/* <MDXRemote /> */}
            </Section>
            <Section name="Schedule" className="pt-8">
              <Schedule schedule={site.event.schedule} />
            </Section>
            <Section
              name="Location"
              url={site.event.location.url}
              className="pt-8"
            >
              <div className="overflow-hidden rounded-[3rem] drop-shadow-xl">
                <iframe
                  src={site.event.location.myMapUrl}
                  width="100%"
                  height="400px"
                ></iframe>
              </div>
            </Section>
          </div>

          {/* Background Graphics */}
          <div>
            <div className="absolute top-0 left-0 w-full h-96 opacity-60">
              <img
                src="/image/flowers/top.webp"
                className="rounded-t-[3rem]"
                alt=""
                width="1428"
                height="635"
              />
            </div>
            <div className="absolute top-1/3 left-0 w-full md:h-[30rem] opacity-60">
              <img
                src="/image/flowers/middle.webp"
                alt=""
                width="1428"
                height="777"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full opacity-60">
              <img
                src="/image/flowers/bottom.webp"
                className="hidden md:block md:rounded-[3rem]"
                alt=""
                width="1428"
                height="579"
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 bg-theme-white  text-theme-gray  md:bg-opacity-0 md:text-white pt-0 pb-5 md:pt-5 text-center">
          <span className="block md:inline-block">
            Made with ❤️ by{" "}
            <a
              className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
              href="https://github.com/CS-5/weddingflare/"
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
            >
              Workers
            </a>{" "}
            and{" "}
            <a
              className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
              href="https://pages.cloudflare.com/"
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
