import PlanetComponent from "@/components/PlanetComponent";

export default function Mercury() {
  return (
    <PlanetComponent
      planetName="Mercury"
      decorColor="decoration-greenblue"
      bgColor="bg-greenblue"
      mobileSize={111}
      tabletSize={184}
      desktopSize={290}
    />
  );
}
