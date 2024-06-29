import PlanetComponent from "@/components/PlanetComponent";

export default function Venus() {
  return (
    <PlanetComponent
      planetName="Venus"
      decorColor="decoration-yellowish"
      bgColor="bg-yellowish"
      mobileSize={152}
      tabletSize={252}
      desktopSize={400}
    />
  );
}
