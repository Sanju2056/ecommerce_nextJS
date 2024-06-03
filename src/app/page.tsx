import DiscoverNewArrival from "@/components/home/DiscoverNewArrival";
import Hero from "@/components/home/Hero";
import HeroThird from "@/components/home/HeroThird";
import TopSeller from "@/components/home/TopSeller";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <div className="container">
        <div className="mt-20">
          <DiscoverNewArrival />
        </div>
        <div className="mt-20">
          <HeroThird />
        </div>
        <div className="mt-20">
          <TopSeller />
        </div>
      </div>
    </div>
  );
}
