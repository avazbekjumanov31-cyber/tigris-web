import { useRef } from "react";

function App() {
  const carouselRef = useRef(null);

  // O'NG STRELKA
  const nextSlide = () => {
    const carousel = carouselRef.current;

    if (
      carousel.scrollLeft >=
      carousel.scrollWidth - carousel.clientWidth - 10
    ) {
      // Oxiriga kelganda boshiga qaytadi
      carousel.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      // Keyingi ichimlikka o'tadi
      carousel.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  // CHAP STRELKA
  const prevSlide = () => {
    const carousel = carouselRef.current;

    if (carousel.scrollLeft <= 10) {
      // Boshida bo'lsa oxirgi ichimlikka o'tadi
      carousel.scrollTo({
        left: carousel.scrollWidth - carousel.clientWidth,
        behavior: "smooth",
      });
    } else {
      // Oldingi ichimlikka o'tadi
      carousel.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-green-950">

      {/* ORQA FON — JOYIDA TURADI */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66af891d96a32cf0deeffb6f_Untitled%20design%20(11)-p-1600.webp"
        alt=""
      />

      {/* ICHIMLIKLAR CAROUSELI */}
      <div
        ref={carouselRef}
        className="
          absolute inset-0
          z-10
          flex
          overflow-x-hidden
          scroll-smooth
        "
      >

        {/* 1-ICHIMLIK */}
        <div className="min-w-full h-full shrink-0 relative flex justify-center items-center">

          <img
            className="w-[200px] h-auto object-contain mb-50"
            src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb49a150b3ed64af11a9be_66af95a9503a85bd0d10928f_6.png"
            alt=""
          />

        </div>


        {/* 2-ICHIMLIK */}
        <div className="min-w-full h-full shrink-0 relative flex justify-center items-center">

          <img
            className="w-[200px] h-auto object-contain mb-50"
            src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb498e30ce38614af61a0a_66af9598c41636dff47b28af_3.png"
            alt=""
          />

          <img
            className="absolute w-[200px] h-auto object-contain mb-50"
            src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb49ac23afcc5f381e3b05_66af95db6901307954646862_4.png"
            alt=""
          />

        </div>


        {/* 3-ICHIMLIK */}
        <div className="min-w-full h-full shrink-0 relative flex justify-center items-center">

          <img
            className="w-[200px] h-auto object-contain mb-50"
            src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb49ac23afcc5f381e3b05_66af95db6901307954646862_4.png"
            alt=""
          />

        </div>

      </div>


      {/* CHAP TUGMA */}
      <button
        onClick={prevSlide}
        className="
          absolute z-20
          left-[5%] top-1/2
          -translate-y-1/2
          w-[80px] h-[80px]
          rounded-full
          bg-white
          text-4xl
          flex items-center justify-center
          hover:scale-110
          transition
          cursor-pointer
        "
      >
        ←
      </button>


      {/* O'NG TUGMA */}
      <button
        onClick={nextSlide}
        className="
          absolute z-20
          right-[5%] top-1/2
          -translate-y-1/2
          w-[80px] h-[80px]
          rounded-full
          bg-white
          text-4xl
          flex items-center justify-center
          hover:scale-110
          transition
          cursor-pointer
        "
      >
        →
      </button>

    </main>
  );
}

export default App;