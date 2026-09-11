import React, { useRef } from 'react'

const Cardav = () => {

  const sliderRef = useRef(null)

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -900,
      behavior: 'smooth'
    })
  }

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 900,
      behavior: 'smooth'
    })
  }

  return (
    <>
    <div className='bg-green-900 h-760'>
      <img className='w-20 ml-175' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b1219ce5a0e9592f79e580_Untitled%20design%20(28).avif" alt="" />
      <img className='w-150 ml-110' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b0e4bbee36803f4b4086f7_rdethfsb.avif" alt="" />
      <p className='ml-140 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
         Suspendisse varius enim in eros elementum. Lorem ipsum <br />
         dolor sit amet, consectetur adipisc.</p>

         <div className=' grid grid-cols-2 gap-5 mt-10 ml-62 font-bold'>
      <button className='w-100 h-15 bg-green-400 rounded-2xl'>delawere</button>
           <button className='w-100 h-15 bg-blue-400  rounded-2xl'>Galway</button>
             <button className='w-100 h-15 bg-amber-400  rounded-2xl'>Colarado</button>
               <button className='w-100 h-15 bg-green-400  rounded-2xl'>Lisbon</button>
                 <button className='w-100 h-15 bg-blue-400  rounded-2xl'>then</button>
                   <button className='w-100 h-15 bg-red-400  rounded-2xl'>Savannah</button>
                     <button className='w-100 h-15 bg-purple-400  rounded-2xl'>Bristol</button>
                       <button  className='w-100 h-15 bg-purple-500  rounded-2xl'>alaska</button>
         </div>

         <button className='text-white w-40 rounded-2xl ml-170 mt-10 h-10 border hover:bg-white hover:text-black '>Find a Location</button>

         <div className=' font-bold flex justify-around mt-10'>
           
        <div>
          <h1 className='text-white text-6xl font-bold'>Real reviews, real <br /> experiences</h1> <br />
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius eni</p>
         </div>

            <img className='text-white w-50 mr-25' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b1214531416707b88c3617_Untitled%20design%20(27).avif" alt="" />

        </div>


        {/* FAQAT SHU BO'SH DIV ICHIGA QO'SHILDI */}
        <div>

          {/* STRELKALAR */}
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
            className='flex gap-10 overflow-x-auto ml-25 mr-25'
          >

            <div className='min-w-[50%] h-140 bg-green-500 rounded-2xl p-7 shrink-0'>
              <img className='w-20 bg-green-400 rounded-4xl' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b117e1a5d77710ba29fb2e_Copy%20of%20Untitled%20Design%20(3).avif" alt="" />
              
              <h1 className='text-white text-4xl font-bold mt-30'>
                LOREM IPSUM DOLOR SIT AMET,
                <br />
                CONSECTETUR ADIPISCING ELIT,
                <br />
                SED DO EIUSMOD TEMPOR
                <br />
                INCIDIDUNT
              </h1>

              <div className='text-white mt-20'>
                <p className='text-xl'>Andrew Power</p>
                <p>Co-founder @ marvolo.co</p>
              </div>
            </div>


            <div className='min-w-[50%] h-140 bg-sky-500 rounded-2xl p-7 shrink-0'>
              <img className='w-20 bg-blue-300 rounded-4xl' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b117b5e5a0e9592f7270c2_Copy%20of%20Untitled%20Design%20(1).avif" alt="" />
              <h1 className='text-white text-4xl font-bold mt-30'>
                LOREM IPSUM DOLOR SIT AMET,
                <br />
                CONSECTETUR ADIPISCING ELIT,
                <br />
                SED DO EIUSMOD TEMPOR
                <br />
                INCIDIDUNT
              </h1>

              <div className='text-white mt-20'>
                <p className='text-xl'>Andrew Power</p>
                <p>Co-founder @ marvolo.co</p>
              </div>
            </div>


            <div className='min-w-[50%] h-140 bg-red-500 rounded-2xl p-7 shrink-0'>
              <img className='w-20 bg-red-400 rounded-4xl' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b116587c84d1a7150f4177_66aa8e33918434749add451b_2.avif" alt="" />
              <h1 className='text-white text-4xl font-bold mt-30'>
                LOREM IPSUM DOLOR SIT AMET,
                <br />
                CONSECTETUR ADIPISCING ELIT,
                <br />
                SED DO EIUSMOD TEMPOR
                <br />
                INCIDIDUNT
              </h1>

              <div className='text-white mt-20'>
                <p className='text-xl'>Andrew Power</p>
                <p>Co-founder @ marvolo.co</p>
              </div>
            </div>


            <div className='min-w-[50%] h-140 bg-purple-500 rounded-2xl p-7 shrink-0'>
              <img className='w-20 bg-purple-400 rounded-4xl' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b117b1b1606d2b6a57fdb4_Copy%20of%20Untitled%20Design.avif" alt="" />
              <h1 className='text-white text-4xl font-bold mt-30'>
                LOREM IPSUM DOLOR SIT AMET,
                <br />
                CONSECTETUR ADIPISCING ELIT,
                <br />
                SED DO EIUSMOD TEMPOR
                <br />
                INCIDIDUNT
              </h1>

              <div className='text-white mt-20'>
                <p className='text-xl'>Andrew Power</p>
                <p>Co-founder @ marvolo.co</p>
              </div>
            </div>

          </div>

        </div>


          <div className='text-white font-bold mt-40'>
              <h1 className='ml-150 text-7xl'>Mix it up!</h1>
          <p className='ml-140 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p className='ml-168'> Suspendisse varius eni</p>
          
                   <div className='text-white flex justify-around mt-15'>
         
         <div>
            <img className='w-100 rounded-2xl' src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb4966add64aaf46fb4f2c_66b12b36a7fbf285dd315e66_5612.jpeg" alt="" />
            <h4 >Watermelon Smoothie</h4>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Suspendisse varius enim in eros elementum tristique. Duis <br />
               cursus, mi quis viverra ornare, eros dolor interdum nulla, ut <br />
                commodo diam.</p>
         </div>

          <div>
            <img className='w-100 h-125 rounded-2xl' src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb4966af4350bf5a5154ee_66b12b3e4fd7a82bf747bc5d_47202.jpeg" alt="" />
            <h4>Kiwi Citrus Mixer</h4>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
             Suspendisse varius enim in eros elementum tristique. Duis <br />
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut <br />
               commodo diam.</p>
         </div>

          <div>
            <img className='w-110 h-125 rounded-2xl' src="https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66bb496631d3f5c3b4536e4b_66b12b468e530f4f78e6f79c_238244.jpeg" alt="" />
            <h4>Blueberry Blaster</h4>
           <p className='mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
             Suspendisse varius enim in eros elementum tristique. Duis <br />
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut <br />
               commodo diam.
           </p>
         </div>
          
        </div>
          </div>
           

    </div>
    </>
  )
}

export default Cardav