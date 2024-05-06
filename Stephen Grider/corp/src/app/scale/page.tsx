import scaleImg from "/public/scale.jpg";
import Hero from "@/components/hero";
export default function ReliabilityPage() {
  return (
    <Hero
      imgData={scaleImg}
      title="Scale your app to infinity."
      imgAlt="steel factory"
    />
  );
}
