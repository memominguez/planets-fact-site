import PlanetComponent from "@/components/PlanetComponent";

export default function Earth() {
  return (
    <PlanetComponent
      planetName="Earth"
      decorColor="decoration-violetlike"
      bgColor="bg-violetlike"
      mobileSize={171}
      tabletSize={284}
      desktopSize={450}
    />
  );
}
