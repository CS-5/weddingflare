import { ReactNode } from "react";
import Head from "next/head";
import RSVPSection from "./components/sections/RSVP";
import ScheduleSection from "./components/sections/Schedule";
import Section from "./components/Section";
import AboutSection from "./components/sections/About";
import {
  EVENT_LOCAL_DATE,
  MAPS_API_KEY,
  EVENT_LOCATION,
  SITE_TITLE,
} from "../constants";

export default function Index(): ReactNode {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="h-auto 2xl:h-screen bg-theme-background bg-cover bg-no-repeat bg-center bg-fixed overflow-auto font-theme-primary">
        {/* Content Container */}
        <div className="m-auto md:w-3/5 lg:w-48rem pt-20">
          {/* Header */}
          <header className="z-0 fixed left-2/4 -translate-x-1/2 text-center md:mt-0">
            <h1 className="font-theme-secondary font-semibold text-6xl text-theme-primary text-shadow-xl">
              <span className="block md:inline-block">Carson & Tatianna</span>
            </h1>
            <h2 className="mt-2 font-theme-primary font-extralight text-2xl md:text-3xl text-white">
              <span className="block md:inline-block">{EVENT_LOCAL_DATE}</span>
              <span className="hidden md:inline-block">&nbsp;-&nbsp;</span>
              <span className="block text-1xl md:inline-block">
                {EVENT_LOCATION.address}
              </span>
            </h2>
          </header>

          {/* Main */}
          <main className="relative bg-theme-white dark:bg-theme-gray text-theme-black dark:text-white rounded-t-6xl mt-96 md:mt-64 lg:mt-48 md:rounded-6xl md:shadow-2xl text-lg leading-8 p-8">
            <Section name="RSVP" className="pb-6">
              <RSVPSection />
            </Section>
            <Section name="About" className="pb-6">
              <AboutSection />
            </Section>
            <Section name="Schedule" className="pb-6">
              <ScheduleSection />
            </Section>
            {MAPS_API_KEY && (
              <Section
                name="Location"
                url={EVENT_LOCATION.url}
                className="pb-6 drop-shadow-2xl"
              >
                <iframe
                  src={EVENT_LOCATION.myMapUrl}
                  width="100%"
                  height="400px"
                ></iframe>
              </Section>
            )}
          </main>

          {/* Footer */}
          <footer className="bg-white dark:bg-theme-gray text-theme-gray dark:text-white md:bg-opacity-0 md:text-white md:shadow-2xl pt-0 pb-5 md:pt-5 text-center">
            <span className="block md:inline-block">
              Made with ❤️ by{" "}
              <a
                className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
                href="https://github.com/CS-5/eventflare"
              >
                Carson
              </a>
              ,&nbsp;
            </span>
            <span className="block md:inline-block">
              powered by Cloudflare Workers and Pages.
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
