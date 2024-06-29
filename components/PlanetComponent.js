"use client";

import { useState, useEffect, useCallback } from "react";
import planetsData from "@/public/data.json";
import Image from "next/image";
import source from "@/assets/icon-source.svg";
import backgroundImage from "@/assets/background-stars.svg";

export default function PlanetComponent({
  planetName,
  decorColor,
  bgColor,
  mobileSize,
  tabletSize,
  desktopSize,
}) {
  const [planet, setPlanet] = useState(null);
  const [planetView, setPlanetView] = useState("overview");

  const getPlanet = useCallback(() => {
    const thisPlanet = planetsData.find((i) => i.name === `${planetName}`);
    return thisPlanet;
  }, [planetName]);

  useEffect(() => {
    setPlanet(getPlanet());
  }, [getPlanet]);

  const goWikipedia = () => {
    window.open(`${planet?.overview.source}`, "_blank");
  };

  // Get images path from public folder, instead of assets folder
  // That's how Nextjs works
  let planetImg = planet?.images.planet;
  planetImg = planetImg?.slice(8);
  //console.log(planetImg);
  let internalImg = planet?.images.internal;
  internalImg = internalImg?.slice(8);
  let geologyImg = planet?.images.geology;
  geologyImg = geologyImg?.slice(8); 

  return (
    <>
      {/* MOBILE SCREEN SECTION */}
      <section className="bg-blackish bg-[url('../assets/background-stars.svg')] w-[375px] mx-auto h-fit pb-6 md:hidden">
        {/* planetView selector buttons */}
        <figure className="w-full p-4 flex justify-between border-b-[1px] border-b-darkgray">
          <button
            className="text-xs font-league_spartan font-bold"
            onClick={() => setPlanetView("overview")}
          >
            <span
              className={
                planetView === "overview"
                  ? `text-white underline underline-offset-[18px] decoration-4 ${decorColor}`
                  : "text-lightgray"
              }
            >
              OVERVIEW
            </span>
          </button>

          <button
            className="text-xs font-league_spartan font-bold"
            onClick={() => setPlanetView("structure")}
          >
            <span
              className={
                planetView === "structure"
                  ? `text-white underline underline-offset-[18px] decoration-4 ${decorColor}`
                  : "text-lightgray"
              }
            >
              STRUCTURE
            </span>
          </button>

          <button
            className="text-xs font-league_spartan font-bold"
            onClick={() => setPlanetView("surface")}
          >
            <span
              className={
                planetView === "surface"
                  ? `text-white underline underline-offset-[18px] decoration-4 ${decorColor}`
                  : "text-lightgray"
              }
            >
              SURFACE
            </span>
          </button>
        </figure>

        {/* Planet images */}
        {planet && (
          <figure className="h-[280px] flex flex-col items-center justify-center relative">
            {planetView === "overview" && (
              <Image
                src={planetImg}
                alt={planetName}
                width={mobileSize}
                height={mobileSize}
                priority={false}
              />
            )}
            {planetView === "structure" && (
              <Image
                src={internalImg}
                alt={planetName}
                width={mobileSize}
                height={mobileSize}
                priority={false}
              />
            )}
            {planetView === "surface" && (
              <>
                <Image
                  src={planetImg}
                  alt={planetName}
                  width={mobileSize}
                  height={mobileSize}
                  priority={false}
                />
                <Image
                  src={geologyImg}
                  alt={planetName}
                  width={65}
                  height={80}
                  priority={false}
                  className="w-[65px] h-[80px] absolute top-[60%]"
                />
              </>
            )}
          </figure>
        )}

        {/* Planet information */}
        {planet && (
          <article>
            <div className="w-[327px] mx-auto flex flex-col items-center mb-7">
              <h1 className="text-white text-[40px] font-antonio mb-2">
                {planetName}
              </h1>
              <p className="text-slate-300 text-sm font-league_spartan leading-5 text-center">
                {planet.overview.content}
              </p>
            </div>

            <div className="flex justify-center items-center gap-2">
              <p className="text-sm text-lightgray font-league_spartan">
                Source: <span className="text-white">Wikipedia</span>
              </p>

              <button onClick={goWikipedia}>
                <Image src={source} alt="" width={12} height={12} />
              </button>
            </div>
          </article>
        )}

        {/* Planet properties */}
        {planet && (
          <article className="w-[327px] mx-auto mt-8">
            <div className="w-full h-12 mb-2 flex justify-between items-center px-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold">
                ROTATION TIME
              </p>
              <h2 className="text-white text-xl font-antonio">
                {planet.rotation}
              </h2>
            </div>
            <div className="w-full h-12 mb-2 flex justify-between items-center px-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold">
                REVOLUTION TIME
              </p>
              <h2 className="text-white text-xl font-antonio">
                {planet.revolution}
              </h2>
            </div>
            <div className="w-full h-12 mb-2 flex justify-between items-center px-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold">
                RADIUS
              </p>
              <h2 className="text-white text-xl font-antonio">
                {planet.radius}
              </h2>
            </div>
            <div className="w-full h-12 mb-2 flex justify-between items-center px-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold">
                AVERAGE TEMP
              </p>
              <h2 className="text-white text-xl font-antonio">
                {planet.temperature}
              </h2>
            </div>
          </article>
        )}
      </section>

      {/* *************** TABLET SCREEN SECTION **************** */}
      <section className="hidden md:block w-[768px] bg-blackish bg-[url('../assets/background-stars.svg')] mx-auto h-fit pb-6 2xl:hidden">
        {/* Planet images */}
        {planet && (
          <figure className="h-[440px] flex flex-col items-center justify-center relative z-0">
            {planetView === "overview" && (
              <Image
                src={planetImg}
                alt={planetName}
                width={tabletSize}
                height={tabletSize}
                priority={false}
              />
            )}
            {planetView === "structure" && (
              <Image
                src={internalImg}
                alt={planetName}
                width={tabletSize}
                height={tabletSize}
                priority={false}
              />
            )}
            {planetView === "surface" && (
              <>
                <Image
                  src={planetImg}
                  alt={planetName}
                  width={tabletSize}
                  height={tabletSize}
                  priority={false}
                />
                <Image
                  src={geologyImg}
                  alt={planetName}
                  width={104}
                  height={127}
                  priority={false}
                  className="w-[104px] h-[127px] absolute top-[60%] z-10"
                />
              </>
            )}
          </figure>
        )}

        {/* Middle section */}
        {planet && (
          <div className="w-[690px] h-[253px] mx-auto flex">
            <article className="basis-1/2">
              <h1 className="text-white text-5xl font-antonio uppercase mb-6">
                {planet.name}
              </h1>
              <p className="text-slate-300 text-sm font-league_spartan leading-5 text-left mb-8">
                {planet.overview.content}
              </p>

              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-lightgray font-league_spartan">
                  Source: <span className="text-white">Wikipedia</span>
                </p>

                <button onClick={goWikipedia}>
                  <Image src={source} alt="" width={12} height={12} />
                </button>
              </div>
            </article>

            <figure className="basis-1/2 pl-9 pt-9 flex flex-col items-end">
              <button
                className={
                  planetView === "overview"
                    ? `w-[281px] h-[40px] border border-lightgray text-left ps-6 mb-4 ${bgColor}`
                    : "w-[281px] h-[40px] border border-lightgray text-left ps-6 mb-4 hover:bg-darkgray"
                }
                onClick={() => setPlanetView("overview")}
              >
                <span className="text-lightgray text-[12px] font-league_spartan me-6">
                  01
                </span>
                <span className="text-white text-[12px] font-league_spartan tracking-widest">
                  OVERVIEW
                </span>
              </button>

              <button
                className={
                  planetView === "structure"
                    ? `w-[281px] h-[40px] border border-lightgray text-left ps-6 mb-4 ${bgColor}`
                    : "w-[281px] h-[40px] border border-lightgray text-left ps-6 mb-4 hover:bg-darkgray"
                }
                onClick={() => setPlanetView("structure")}
              >
                <span className="text-lightgray text-[12px] font-league_spartan me-6">
                  02
                </span>
                <span className="text-white text-[12px] font-league_spartan tracking-widest">
                  INTERNAL STRUCTURE
                </span>
              </button>

              <button
                className={
                  planetView === "surface"
                    ? `w-[281px] h-[40px] border border-lightgray text-left ps-6 mb-4 ${bgColor}`
                    : "w-[281px] h-[40px] border border-lightgray text-left ps-6 mb-4 hover:bg-darkgray"
                }
                onClick={() => setPlanetView("surface")}
              >
                <span className="text-lightgray text-[12px] font-league_spartan me-6">
                  03
                </span>
                <span className="text-white text-[12px] font-league_spartan tracking-widest">
                  SURFACE GEOLOGY
                </span>
              </button>
            </figure>
          </div>
        )}

        {/* Planet properties */}
        {planet && (
          <article className="w-[690px] h-[88px] mx-auto mt-4 flex justify-between">
            <div className="w-[164px] h-full flex flex-col items-start pl-3 pt-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold mb-1">
                ROTATION TIME
              </p>
              <h2 className="text-white text-2xl font-antonio">
                {planet.rotation}
              </h2>
            </div>
            <div className="w-[164px] h-full flex flex-col items-start pl-3 pt-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold mb-1">
                REVOLUTION TIME
              </p>
              <h2 className="text-white text-2xl font-antonio">
                {planet.revolution}
              </h2>
            </div>
            <div className="w-[164px] h-full flex flex-col items-start pl-3 pt-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold mb-1">
                RADIUS
              </p>
              <h2 className="text-white text-2xl font-antonio">
                {planet.radius}
              </h2>
            </div>
            <div className="w-[164px] h-full flex flex-col items-start pl-3 pt-4 border border-lightgray">
              <p className="text-lightgray text-xs font-league_spartan font-bold mb-1">
                AVERAGE TEMP
              </p>
              <h2 className="text-white text-2xl font-antonio">
                {planet.temperature}
              </h2>
            </div>
          </article>
        )}
      </section>

      {/* ************** DESKTOP SCREEN SECTION ************** */}
      <section className="hidden w-[1440px] bg-blackish bg-[url('../assets/background-stars.svg')] mx-auto h-fit pb-6 2xl:block">
        <div className="flex w-[1100px] h-[690px] mx-auto">
          <div className="basis-2/3">
            {/* Planet images */}
            {planet && (
              <figure className="h-[690px] flex flex-col items-center justify-center relative z-0 -ml-24">
                {planetView === "overview" && (
                  <Image
                    src={planetImg}
                    alt={planetName}
                    width={desktopSize}
                    height={desktopSize}
                    priority={false}
                  />
                )}
                {planetView === "structure" && (
                  <Image
                    src={internalImg}
                    alt={planetName}
                    width={desktopSize}
                    height={desktopSize}
                    priority={false}
                  />
                )}
                {planetView === "surface" && (
                  <>
                    <Image
                      src={planetImg}
                      alt={planetName}
                      width={desktopSize}
                      height={desktopSize}
                      priority={false}
                    />
                    <Image
                      src={geologyImg}
                      alt={planetName}
                      width={163}
                      height={199}
                      priority={false}
                      className="w-[163px] h-[199px] absolute top-[60%] z-10"
                    />
                  </>
                )}
              </figure>
            )}
          </div>

          {/* Right section */}
          <div className="basis-1/3 h-[690px] pt-24">
            {planet && (
              <>
                <article className="ps-4">
                  <h1 className="text-white text-7xl font-antonio uppercase mb-6">
                    {planet.name}
                  </h1>
                  <p className="text-slate-300 text-lg font-league_spartan leading-6 text-left mb-8">
                    {planet.overview.content}
                  </p>

                  <div className="flex justify-start items-center gap-2">
                    <p className="text-lg text-lightgray font-league_spartan">
                      Source: <span className="text-slate-300">Wikipedia</span>
                    </p>

                    <button onClick={goWikipedia}>
                      <Image src={source} alt="" width={12} height={12} />
                    </button>
                  </div>
                </article>

                {/* planet View selector */}
                <figure className="flex flex-col items-end mt-16">
                  <button
                    className={
                      planetView === "overview"
                        ? `w-[350px] h-[48px] border border-lightgray text-left ps-6 mb-4 ${bgColor}`
                        : "w-[350px] h-[48px] border border-lightgray text-left ps-6 mb-4 hover:bg-darkgray"
                    }
                    onClick={() => setPlanetView("overview")}
                  >
                    <span className="text-lightgray text-sm font-league_spartan me-6">
                      01
                    </span>
                    <span className="text-white text-sm font-league_spartan tracking-widest">
                      OVERVIEW
                    </span>
                  </button>

                  <button
                    className={
                      planetView === "structure"
                        ? `w-[350px] h-[48px] border border-lightgray text-left ps-6 mb-4 ${bgColor}`
                        : "w-[350px] h-[48px] border border-lightgray text-left ps-6 mb-4 hover:bg-darkgray"
                    }
                    onClick={() => setPlanetView("structure")}
                  >
                    <span className="text-lightgray text-sm font-league_spartan me-6">
                      02
                    </span>
                    <span className="text-white text-sm font-league_spartan tracking-widest">
                      INTERNAL STRUCTURE
                    </span>
                  </button>

                  <button
                    className={
                      planetView === "surface"
                        ? `w-[350px] h-[48px] border border-lightgray text-left ps-6 mb-4 ${bgColor}`
                        : "w-[350px] h-[48px] border border-lightgray text-left ps-6 mb-4 hover:bg-darkgray"
                    }
                    onClick={() => setPlanetView("surface")}
                  >
                    <span className="text-lightgray text-sm font-league_spartan me-6">
                      03
                    </span>
                    <span className="text-white text-sm font-league_spartan tracking-widest">
                      SURFACE GEOLOGY
                    </span>
                  </button>
                </figure>
              </>
            )}
          </div>
        </div>

            {/* Footer */}
        <article className="w-[1100px] h-[128px] mx-auto flex justify-between">
          {planet && (
            <>
              <div className="w-[256px] h-full flex flex-col items-start pl-5 pt-6 border border-lightgray">
                <p className="text-lightgray text-base font-league_spartan font-bold mb-1">
                  ROTATION TIME
                </p>
                <h2 className="text-white text-[40px] font-antonio">
                  {planet.rotation}
                </h2>
              </div>
              <div className="w-[256px] h-full flex flex-col items-start pl-5 pt-6 border border-lightgray">
                <p className="text-lightgray text-base font-league_spartan font-bold mb-1">
                  REVOLUTION TIME
                </p>
                <h2 className="text-white text-[40px] font-antonio">
                  {planet.revolution}
                </h2>
              </div>
              <div className="w-[256px] h-full flex flex-col items-start pl-5 pt-6 border border-lightgray">
                <p className="text-lightgray text-base font-league_spartan font-bold mb-1">
                  RADIUS
                </p>
                <h2 className="text-white text-[40px] font-antonio">
                  {planet.radius}
                </h2>
              </div>
              <div className="w-[256px] h-full flex flex-col items-start pl-5 pt-6 border border-lightgray">
                <p className="text-lightgray text-base font-league_spartan font-bold mb-1">
                  AVERAGE TEMP
                </p>
                <h2 className="text-white text-[40px] font-antonio">
                  {planet.temperature}
                </h2>
              </div>
            </>
          )}
        </article>
      </section>
    </>
  );
}
