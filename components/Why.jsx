import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div classname="flex flex-col items-center gap-x-8 md:flex-row lg:flex-row">
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <Image src="/img/why-img.png" width="400" height="400" />
          </div>
          <div
            className="order-1 lg:order-2 max-w-[480px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="section-title">Why you should choose KryptoBase</h2>
            <p className="section-subtitle">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="btn px-6">Learn More...</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
