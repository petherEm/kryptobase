import React from "react";
import Image from "next/image";

import Logo from "../public/img/logo.svg";
import VisaImg from "../public/img/visa.png";
import MastercardImg from "../public/img/mastercard.png";
import BitcoinImg from "../public/img/bitcoin.png";

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="lg:pt-24 pt-0">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="#">
              {/* <Image src={Logo} width="200" height="200" objectFit="contain" /> */}
              <h1 className="font-bold text-3xl text-[#52b5d5] italic"><span className="text-[#7cf518]">#</span>Krypto<span>Base</span></h1>
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-16 lg:flex-row">
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Quick Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Resource Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Download Whitepaper
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Smart Token
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Blockchain Explore
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Crypto API
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Interests
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="h3 font-medium text-center mb-10 lg:text-left">
                We accept the following payment systems
              </h3>
              <div className="flex justify-center items-center gap-6">
                <Image
                  src={VisaImg}
                  width="50"
                  height="50"
                  objectFit="contain"
                />
                <Image
                  src={MastercardImg}
                  width="50"
                  height="50"
                  objectFit="contain"
                />
                <Image
                  src={BitcoinImg}
                  width="50"
                  height="50"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy & social */}
      <div className="py-12">
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <div>&copy; 2022 KryptoBase. All rights reserved.</div>
          {/* social icons */}

          <div className="flex text-2xl gap-x-8">
            <a className="hover:text-blue transition" href="#">
                <IoLogoYoutube />
            </a>
            <a className="hover:text-blue transition" href="#">
                <IoLogoInstagram />
            </a>
            <a className="hover:text-blue transition" href="#">
                <IoLogoTwitter />
            </a>
            <a className="hover:text-blue transition" href="#">
                <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;