import React from "react";

const Carusel = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-green-950 text-white">

      {/* CHAP TOMON — ICHIMLIK */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">

        <img
          src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb49a150b3ed64af11a9be_66af95a9503a85bd0d10928f_6.png"
          alt="Energy drink"
          className="w-[250px] h-auto object-contain"
        />

      </div>


      {/* O'NG TOMON */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col justify-center pr-16">

        {/* SARLAVHA */}
        <h1 className="
          text-5xl
          md:text-6xl
          lg:text-7xl
          font-black
          uppercase
          leading-[0.9]
        ">
          A BOOST OF HIGH
          <br />
          QUALITY ENERGY
        </h1>


        {/* MATN */}
        <p className="mt-8 text-lg max-w-[650px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum.
        </p>


        {/* TUGMACHALAR */}
        <div className="grid grid-cols-2 gap-5 mt-10 max-w-[550px]">

          {/* 1 */}
          <div className="
            border border-green-400
            rounded-full
            px-6 py-5
            flex items-center gap-4
          ">
            <span className="text-3xl">⚡️</span>
            <span className="text-lg">
              3-5 hours of energy
            </span>
          </div>


          {/* 2 */}
          <div className="
            border border-pink-500
            rounded-full
            px-6 py-5
            flex items-center gap-4
          ">
            <span className="text-3xl">💗</span>
            <span className="text-lg">
              No jitters
            </span>
          </div>


          {/* 3 */}
          <div className="
            border border-blue-400
            rounded-full
            px-6 py-5
            flex items-center gap-4
          ">
            <span className="text-3xl">💧</span>
            <span className="text-lg">
              Nutrient rich
            </span>
          </div>


          {/* 4 */}
          <div className="
            border border-purple-400
            rounded-full
            px-6 py-5
            flex items-center gap-4
          ">
            <span className="text-3xl">◈</span>
            <span className="text-lg">
              Zero Sugar
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Carusel;