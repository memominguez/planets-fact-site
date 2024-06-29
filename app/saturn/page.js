import PlanetComponent from "@/components/PlanetComponent";

export default function Saturn() {
  return (
    <PlanetComponent
      planetName="Saturn"
      decorColor="decoration-orange3"
      bgColor="bg-orange3"
      mobileSize={158}
      tabletSize={262}
      desktopSize={416}
    />
  );
}
