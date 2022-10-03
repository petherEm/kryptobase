import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";
import Stats from "../components/Stats";
import Why from "../components/Why";
import Calculate from "../components/Calculate";
import Trade from "../components/Trade";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function Home() {
  const [navMobile, setNavMobile] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 300,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>KryptoBase</title>
        <meta name="description" content="KryptoBase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setNavMobile={setNavMobile} />

      <Hero />

      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>

      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}
