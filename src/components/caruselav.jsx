import React, { useRef } from 'react'

const Caruselav = () => {
  const sliderRef = useRef(null)

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: 'smooth'
    })
  }

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className='bg-green-950 flex text-white font-bold justify-around '>

        <div>
          <h1 className='text-6xl'>
            We are Serious about <br />
            our ingredients
          </h1>

          <p className='mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse varius enim in eros elementum.
          </p>
        </div>

        <img
          className='w-50 ml-50'
          src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66ae7219562a1177608371e9_63bd7f4851d293215e040166_ezgif.com-gif-maker%20(14).gif"
          alt=""
        />

      </div>


      <div className='bg-green-950 h-250'>

      

        <div className='flex justify-end gap-4 mr-25 mb-8'>

          <button
            onClick={slideLeft}
            className='w-24 h-14 bg-white text-black rounded-xl text-4xl hover:bg-gray-200'
          >
            ←
          </button>

          <button
            onClick={slideRight}
            className='w-24 h-14 bg-white text-black rounded-xl text-4xl hover:bg-gray-200'
          >
            →
          </button>

        </div>


        {/* CARDLAR */}

        <div
          ref={sliderRef}
          className='flex gap-10 overflow-x-auto ml-25 mr-25 text-white font-bold'
        >

          {/* 1-CARD */}

          <div className='shrink-0'>

            <img
              className='w-100 bg-red-500 rounded-2xl'
              src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b625bc6232da719537a319_Untitled%20design%20(16).png"
              alt=""
            />

            <h1 className='text-5xl'>
              Vegetable oil
            </h1>

            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Suspendisse varius enim in eros elementum <br />
              tristique.
            </p>

          </div>


          {/* 2-CARD */}

          <div className='shrink-0 mt-50'>

            <img
              className='w-100 bg-yellow-500 rounded-2xl'
              src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66aff70ae8e94f925a5db903_1.avif"
              alt=""
            />

            <h1 className='text-5xl'>
              Vitamin C
            </h1>

            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Suspendisse varius enim in eros elementum <br />
              tristique.
            </p>

          </div>


          {/* 3-CARD */}

          <div className='shrink-0'>

            <img
              className='w-100 bg-green-500 rounded-2xl'
              src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66aff7077185055bc2dcdcc9_4.avif"
              alt=""
            />

            <h1 className='text-5xl'>
           Ashwagandha
            </h1>

            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Suspendisse varius enim in eros elementum <br />
              tristique.
            </p>

          </div>


          {/* 4-CARD */}

          <div className='shrink-0 mt-50'>

            <img
              className='w-100 bg-blue-500 rounded-2xl'
              src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66aff70307fac6c64777bd91_3.avif"
              alt=""
            />

            <h1 className='text-5xl'>
              Citric acid
            </h1>

            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Suspendisse varius enim in eros elementum <br />
              tristique.
            </p>

          </div>


          {/* 5-CARD */}

          <div className='shrink-0'>

            <img
              className='w-100 bg-orange-500 rounded-2xl'
              src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b6264724eb0f40b7b10d09_Untitled%20design%20(17).png"
              alt=""
            />

            <h1 className='text-5xl'>
             Tumeric
            </h1>

            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Suspendisse varius enim in eros elementum <br />
              tristique.
            </p>

          </div>

        </div>

      </div>
    </>
  )
}

export default Caruselav