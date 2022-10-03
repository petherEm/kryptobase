import React from "react";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";

import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <h1 className="font-bold text-3xl text-[#52b5d5] italic"><span className="text-[#7cf518]">#</span>Krypto<span>Base</span></h1>
          {/* <Image src="/img/logo.svg" height="100" width="200" /> */}
        </a>
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        <div
          onClick={() => setNavMobile(true)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
