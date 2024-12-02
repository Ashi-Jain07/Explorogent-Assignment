import Image from "next/image";

function Intro() {
  return (
    <>

      {/* Home Section */}
      <div className="sm:flex mt-10">
        <div className="sm:w-1/2 text-center mt-10 m-2">
          <h1 className="font-bold text-2xl">Empower your E-commerce Delivery Buisness with Stackkaroa&apos;s Complete Technology Solutions</h1>
          <p className="mt-4 text-xl"><i>Achieve Optional Excellence, Drive, Sales, & Enhance Customer Reach With Stackkaroo&apos;s Integrated Solution for your E-commerce Delivery Buisness.</i></p>
          <button className="mt-5 border border-black rounded-md text-xl p-2 bg-blue-100">Book Demo Now</button>
        </div>
        <div className="sm:w-1/2 w-full mt-5 sm:m-2">
          <Image src="/main.png" className="h-full w-full" alt="" />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-blue-100 mt-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-3 xl:grid-cols-4 place-items-center text-center gap-5 pt-8" >

          <div className="m-2">
            <Image src="/management.png" alt="" className="border border-black rounded-full p-2 relative top-4 left-[125px] bg-white w-10 h-10" />
            <div className="border border-black shadow-black shadow-md w-72 h-52 p-2">
              <h2 className="mt-2 font-bold text-xl">Management Tech</h2>
              <p className="mt-2 text-xl">Management of catalog, discounts, payments, ratings, reviews, and more from one place.</p>
            </div>
          </div>

          <div className="m-2">
            <Image src="/deliveryIcon.png" alt="" className="border border-black rounded-full p-2 relative top-4 left-[125px] bg-white w-10 h-10" />
            <div className="border border-black shadow-black shadow-md w-72 h-52 p-2">
              <h2 className="mt-2 font-bold text-xl">Delivery Tech</h2>
              <p className="mt-2 text-xl">Enable quick and smooth contact less product delivery with route suggestionws and management.</p>
            </div>
          </div>

          <div className="m-2">
            <Image src="/mobile.png" alt="" className="border border-black rounded-full p-2 relative top-4 left-[125px] bg-white w-10 h-10" />
            <div className="border border-black shadow-black shadow-md w-72 h-52 p-2">
              <h2 className="mt-2 font-bold text-xl">Mobile App Tech</h2>
              <p className="mt-2 text-xl">Invest in a robust E-commerce app and dazzle your clients with an eye-catching and user friendly store.</p>
            </div>
          </div>

          <div className="m-2">
            <Image src="/website.png" alt="" className="border border-black rounded-full p-2 relative top-4 left-[125px] bg-white w-10 h-10" />
            <div className="border border-black shadow-black shadow-md w-72 h-52 p-2">
              <h2 className="mt-2 font-bold text-xl">Website Tech</h2>
              <p className="mt-2 text-xl">User-friendly feature-rich website is an excellent medium to showcase your online presence.</p>
            </div>
          </div>

        </div>

        {/* Advantage Section */}
        <div className="mt-16 flex justify-center mb-5 w-full">
          <div>
            <Image src="/shoppingrecImage8.png" alt="" className="w-full" />
            <h2 className="mt-16 text-3xl font-semibold">Advantages of Having E-commerce Delivery App</h2>

            <div className="sm:flex place-items-center mt-16 m-5">
              <img src="/shoppingrecImage7.png" />
              <ul className="list-disc ml-10 text-xl mt-5">
                <li>Seamless inventory management</li>
                <li>Feature loaded mobile app and website</li>
                <li>Hassle free catalog management</li>
                <li>Highly secured and reliable</li>
                <li>Social media integration</li>
                <li>Integrated delivery mechanism</li>
                <li>Fully customize and readymade solutions</li>
                <li>Easy to use interface and responsive design</li>
                <li>Smart order management</li>
                <li>Efficient integrated shipment solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book Demo Section */}
        <div className="flex justify-center p-8">
          <div className="mlg:w-4/6 bg-blue-700 sm:flex justify-center place-items-center">
            <Image src="/shoppingrecImage6.png" alt="" className="mt-5 p-5" />
            <div className="sm:mt-8 sm:w-2/5 ml-8 text-xl text-white p-5">
              <p>Find out how stackkaroo can help you expand your E-commerce delivery buisness.</p>
              <p>Book your personalized demo today!</p>
              <button className="border border-white bg-white text-blue-800 rounded-md p-2 mt-2">Request a demo</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};

export default Intro;