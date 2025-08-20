import Hero from "../components/Hero";
import Texture from "../components/ui/texture";
import { NavbarDemo } from "@/components/NavbarDemo";
import Carousel from "@/components/Carousel";
import { CustomTabs } from "@/components/CustomTabs";
import Footer from "@/components/Footer";
import Starfield from "@/components/ui/Starfield";
import GradientBg from "@/components/ui/GradientBg";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden bg-violet-950">
      <div className="min-w-7xl w-full relative z-10">
        <NavbarDemo />
        <Hero />
        <Carousel />
        <CustomTabs />
        <Footer />
        <Texture />
      </div>
      <Starfield />
      <GradientBg />
    </main>
  );
}
