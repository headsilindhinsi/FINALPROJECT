import React from "react";
import { ABOUT2 } from "../../assets/assets";

const LoveStorySection = () => {
  return (
    <section className="py-20 bg-[#faf9fb]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE – Image with floral decoration */}
        <div className="relative flex-shrink-0">
          {/* Circular Image */}
          <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-[8px] border-white shadow-lg relative z-10">
            <img
              src={ABOUT2.img}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Flower */}
          {/* <img
            src="https://png.pngtree.com/png-clipart/20230904/original/pngtree-purple-flower-decoration-png-image_10925142.png"
            alt="flower"
            className="absolute bottom-[-40px] left-[-50px] w-[180px] opacity-90"
          /> */}
        </div>

        {/* RIGHT SIDE – Text Content */}
        <div className="relative text-center md:text-left">
          <div className="p-8 bg-white rounded-[40px] shadow-sm border border-[#eee] relative z-10">

            {/* Butterfly Decoration */}
            {/* <img
              src="https://png.pngtree.com/png-clipart/20230208/original/pngtree-purple-butterfly-png-image_8947319.png"
              alt="butterfly"
              className="absolute top-[-50px] right-[-30px] w-[120px] opacity-80"
            /> */}

            <h3 className="font-dancing text-4xl text-[#6b5b95] mb-3">
              First Time We Meet
            </h3>

            <p className="text-[#c8b7dd] text-sm mb-4 font-medium">12 Feb 2016</p>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ultricies nulla mi tempus morper for praesent. Ultricies interdum 
              hy volutpat morbi nam ornare neque elit leo diam. Malesuada enim 
              ac amurna tempor asr bytrrfvel duis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStorySection;
