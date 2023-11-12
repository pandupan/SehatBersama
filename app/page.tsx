import AboutForum from "@/components/pages/LandingPage/AboutForum";
import CarouselArtikel from "@/components/pages/LandingPage/CarouselArtikel";
import FindKesehatan from "@/components/pages/LandingPage/FindKesehatan";
import HeroSection from "@/components/pages/LandingPage/HeroSection";
import JoinNow from "@/components/pages/LandingPage/JoinNow";
import ListFitur from "@/components/pages/LandingPage/ListFitur";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <JoinNow/>
      <ListFitur/>
      <CarouselArtikel/>
      <AboutForum/>
      <FindKesehatan/>
    </>
  );
}
