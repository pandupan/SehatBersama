import AboutForum from "@/components/LandingPage/AboutForum";
import CarouselArtikel from "@/components/LandingPage/CarouselArtikel";
import FindKesehatan from "@/components/LandingPage/FindKesehatan";
import HeroSection from "@/components/LandingPage/HeroSection";
import JoinNow from "@/components/LandingPage/JoinNow";
import ListFitur from "@/components/LandingPage/ListFitur";
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
