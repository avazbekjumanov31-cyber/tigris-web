export default function App() {
  return (
    <div className="bg-green-950 min-h-screen p-5 h-570">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-500 rounded-xl p-10 text-center">
          <h2 className="text-5xl font-bold text-white uppercase">
            Try Out Our
            <br />
            Watermelon Bundle
          </h2>
          <p className="text-white mt-5">$44 per pack</p>
          <img
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b0cf0db35506ac97f1cc9c_aergerdgh.avif"
            className="w-96 h-80 object-contain mx-auto my-10"
          />
          <button className="bg-white px-10 py-4 rounded-full font-bold cursor-pointer">
            SHOP NOW
          </button>
        </div>
        <div className="bg-[#414141] rounded-xl p-10 text-center">
          <h2 className="text-5xl font-bold text-white/70 uppercase">
            Get It Delivered Every
            <br />
            Week Or Month
          </h2>
          <p className="text-white mt-5">
            Starting at $33.99 per month
          </p>
          <img
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66afac2d0ebf6b503f58dcf9_box-cans.avif"
            className="w-100 h-80 object-contain mx-auto my-10"
          />
          <button className="bg-white px-10 py-4 rounded-full font-bold cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </div>


        <div className="bg-orange-600 rounded-xl p-10 text-center h-190 mt-5">
          <h2 className="text-5xl font-bold text-white uppercase pr-221 ">
            <br />
            New flavor alert
            <br />
             Introducing Orange Blast
          </h2>
          <ul className="mr-320 text-white font-bold">
            <li className="mt-2">$44 per pack</li>
            <li className="mt-2">$44 per pack</li>
            <li className="mt-2">$44 per pack</li>
          </ul>
          
          <img
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66afb351ac83698cd162c107_derthfb.avif"
            className="w-406 h-80 object-contain mx-auto"
          />
          <button className="bg-white px-10 py-4 rounded-full font-bold mt-5 cursor-pointer">
            SHOP NOW
          </button>
        </div>


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-20">
        <div>
          <img
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b625bc6232da719537a319_Untitled%20design%20(16).png"
            className="w-full aspect-square object-cover rounded-lg bg-red-500"
          />
          <h2 className="text-white text-4xl font-bold mt-5 ">
            VEGETABLE OIL
          </h2>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="lg:mt-36">
          <img
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66aff70ae8e94f925a5db903_1.avif"
            className="w-full aspect-square object-cover rounded-lg bg-amber-300"
          />
          <h2 className="text-white text-4xl font-bold mt-5">
            VITAMIN C
          </h2>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66aff7077185055bc2dcdcc9_4.avif"
            className="w-full aspect-square object-cover rounded-lg bg-green-400"
          />
          <h2 className="text-white text-4xl font-bold mt-5">
            ASHWAGANDHA
          </h2>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="lg:mt-36">
          <img
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66aff70307fac6c64777bd91_3.avif"
            className="w-full aspect-square object-cover rounded-lg bg-blue-400"
          />
          <h2 className="text-white text-4xl font-bold mt-5">
            CITRIC ACID
          </h2>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </div>
  );
}
