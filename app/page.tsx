import Image from "next/image";
import Hero from "../components/Hero";
import { FaHome } from 'react-icons/fa'
import Texture from "../components/ui/texture";
import { NavbarDemo } from "@/components/NavbarDemo";
import Skills from "@/components/Skills";
import Carousel from "@/components/Carousel";
import { CustomTabs } from "@/components/Tabs";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className="min-w-7xl w-full relative z-10">
        <NavbarDemo />
        <Hero />
        <Carousel />
        <CustomTabs />
        <Footer />
        <Texture />
        <BackgroundGradientAnimation className="absolute w-full h-full left-0 top-0 -z-10" />
      </div>
    </main>
  );
}
