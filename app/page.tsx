"use client";
import { Hero } from "@/components/layouts/hero";
import { Education } from "@/components/layouts/education";
import { Skills } from "@/components/layouts/skills";
import { Footer } from "@/components/layouts/footer";
import { Chatbot } from "@/components/layouts/chatbot";
import { Particles } from "@/components/magicui/particles";
import { ThemeChanger } from "./themes";
import { Navbar } from "@/components/layouts/navbar";
import Phone from "./android/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="fixed -z-10 overflow-hidden h-[100vh] w-full hidden md:block">
        <Particles />
      </div>
      <ThemeChanger />
      <main className="w-full flex h-screen justify-center">
        <div className="flex">
          <div className="hidden lg:block">
            <Phone />
          </div>
          <div className="h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide">
            <Hero />
            <Skills />
            <Education />
            <Chatbot />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}