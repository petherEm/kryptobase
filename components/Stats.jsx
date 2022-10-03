import React from "react";

import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

const Stats = () => {
  return (
    <section className="pt-24" data-aos="fade-up" data-aos-delay="500">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:flex-row gap-y-6 lg:justify-between">
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 flex text-blue text-2xl lg:text-4xl items-center justify-center rounded-full">
              <HiChartBar />
            </div>

            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                $30B
              </div>
              <div>Digital Currency Exchanged</div>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 flex text-blue text-2xl lg:text-4xl items-center justify-center rounded-full">
              <HiUser />
            </div>

            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                195
              </div>
              <div>Countries supported</div>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 flex text-blue text-2xl lg:text-4xl items-center justify-center rounded-full">
              <HiGlobe />
            </div>

            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                $30B
              </div>
              <div>Digital Currency Exchanged</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
