import PlanetComponent from "@/components/PlanetComponent";

export default function Mars() {
  return (
    <PlanetComponent
      planetName="Mars"
      decorColor="decoration-orange2"
      bgColor="bg-orange2"
      mobileSize={128}
      tabletSize={212}
      desktopSize={336}
    />
  );
}
