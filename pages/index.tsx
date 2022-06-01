import { ReactNode } from "react";
import Head from "next/head";
import Section from "../components/Section";
import Subheader from "../components/subheader";

const dateTime = new Date("06/12/2022 15:00");

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
            src="/image/background.jpg"
            alt=""
            className="absolute object-cover h-full w-full top-0 bottom-0 m-auto"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
          />
        </div>

        <div className="relative bg-theme-white bg-[url('/image/cardbg.jpg')] mx-auto md:my-20 md:rounded-[3rem] md:shadow-2xl md:w-10/12 lg:w-[48rem] px-12 md:px-20 ">
          {/* Header */}
          <header className="relative z-10 text-center pt-16 md:pt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-theme-gray">
              You are invited to the wedding of
            </h2>

            <h1 className="font-cursive text-6xl md:text-8xl text-theme-primary text-shadow-l">
              <span className="block md:inline-block">
                <span className="text-9xl">C</span>arson &{" "}
                <span className="text-9xl tracking-[-0.2em]">T</span>atianna
              </span>
            </h1>

            <h2 className="mt-4 md:mt-8 font-serif text-2xl md:text-3xl text-theme-gray">
              <span className="block md:inline-block">
                On{" "}
                {dateTime.toLocaleDateString("en-US", {
                  timeZone: "America/New_York",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                at{" "}
                {dateTime.toLocaleTimeString("en-US", {
                  timeZone: "America/New_York",
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
              <span className="block text-1xl">in Shippensburg, PA</span>
            </h2>
          </header>

          {/* Main */}
          <main className="relative z-10 pt-8 text-theme-gray text-lg leading-8 py-8">
            <Section name="Information" id="info" className="mb-8">
              <Subheader name="Schedule" />
              <div className="pb-4">
                The wedding ceremony will start at 3PM on Sunday, June 12th. The
                ceremony will be followed by a short break before the reception
                offically starts starts under the tent.
                <br />
                During the reception, there will be a large group picture taken
                of us and all our guests in the meadow. Also during the
                reception, yard games and other activities will be available in
                the woods by the creek.
              </div>

              <Subheader
                name="Venue"
                tagline="Please refer to your invitation for the venue's address"
              />
              <div className="pb-4">
                The wedding and reception will be outdoors near a wooded area
                and stream. A fire pit and yard games will be available for your
                enjoyment.
              </div>

              <Subheader name="Attire" />
              <div className="pb-4">
                Dressy casual and consider wearing footwear suitable for an
                outdoor venue on grass and uneven ground.
              </div>

              <Subheader name="Menu" />
              <div className="pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Main Course</h3>
                  <ul className="list-disc pl-5">
                    <li>Pulled Pork</li>
                    <li>Macaroni & Cheese</li>
                    <li>Green Beans with Bacon</li>
                    <li>Scalloped Potatoes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Dessert: Cupcakes</h3>
                  <ul className="list-disc pl-5">
                    <li>Vanilla</li>
                    <li>Chocolate</li>
                    <li>Raspberry</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section name="Registry" id="registry" className="mb-8 md:pb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 text-center pb-4">
                  We are using Amazon and Target for our wedding registry. Click
                  the images below to be taken to their respective websites.
                  There will also be a jar for a honeymoon fund at the wedding.
                </div>
                <a
                  href="
                  https://smile.amazon.com/wedding/share/carsonandtatianna"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/image/misc/amazon.webp"
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
                    src="/image/misc/target.webp"
                    alt="Target"
                    className="transition duration-300 ease-in-out h-14 mx-auto md:-mt-2 opacity-75 hover:opacity-100 grayscale hover:grayscale-0"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                </a>
              </div>
            </Section>
          </main>

          {/* Footer */}
          <footer className="relative z-10 text-theme-gray pb-16 text-center font-medium">
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

          {/* Background Graphics */}
          <div className="opacity-40">
            <div className="absolute top-0 left-0 w-full h-96">
              <img
                src="/image/flowers/top.webp"
                className="md:rounded-t-[3rem]"
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
                className="md:rounded-[3rem]"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                alt=""
                width="1428"
                height="579"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
