'use client'
import Image from 'next/image'

export default function OurManagement() {
   return (
      <>
<section className="bg-[#f4f8ff] font-poppins">
  <div className="flex flex-col md:flex-row shadow-lg h-auto md:h-140 max-w-7xl mx-auto">
    {/* Left Section */}
    <div className="w-full xl:w-2/9 bg-[#132c4b] flex items-center justify-center pl-1">
      <Image
        src="/home/president.png"
        alt="President"
        width={530}
        height={521}
        className="h-80 md:h-[400px] w-72 md:w-[800px] z-10 ml-0 sm:ml-50 md:ml-70"
      />
    </div>
    {/* Right Section */}
    <div className="w-full md:w-4/6 bg-[#f4f8ff] mx-auto">
      <h2 className="text-3xl md:text-5xl text-center font-extrabold text-[#1F2A44] mb-2">
        Our Management
      </h2>
      <h3 className="text-xl md:text-3xl mt-5 md:mt-20 ml-0 md:ml-40 text-center font-extrabold font-Poppins whitespace-nowrap text-black mb-2">
        President<br />
        Mr. Saifullah Hasanmiya Firfire
      </h3>
      <p className="text-black font-normal mx-5 md:mx-10 ml-0 md:ml-36 text-center text-lg md:text-[26px] leading-relaxed">
        In modern day world globalization is unavoidable & education is crucial for economic success in this globalized world. With keeping this in mind I established this institute 19 years ago to empower rural youth to shape a better future.
      </p>
    </div>
  </div>
</section>

       <section className="bg-[#f4f8ff] font-poppins">
        <div className="flex flex-col md:flex-row shadow-lg h-auto md:h-140">
  
          {/* Right Section - 5/6 */}
          <div className="w-full md:w-4/6 bg-[#f4f8ff] p-2 mx-0 md:mx-50 order-2 md:order-1">
          
            <h3 className="text-2xl md:text-3xl mt-10 md:mt-15  mr-0 md:mr-49 text-center font-extrabold text-black mb-2">
             Chairman <br />
             Mr. Awab Habib Fakih
            </h3>
            <p className="text-black mx-1 mr-5 md:mr-16 text-center text-lg md:text-[29px] leading-relaxed">
              I believe that technical education is crucial for industry & our institute aims to provide skilled craftsmen to meet industry's demands & offer self- employment opportunities. It's a sure success destination for those aiming to excel in today's Industrial landscape   </p>
          </div>
          
          {/* Left Section - 2/6 */}
          <div className="w-full xl:w-2/9 bg-[#132c4b] flex items-center justify-center p-2 order-1 md:order-2">
            <Image
              src="/home/chairman.png"
              alt="Chairman"
              width={500}
              height={550}
              className="left-1/2 h-60 md:h-85 z-10 mr-0 md:mr-60"
            />
          </div>
        </div>
      </section>
    </>
  );
}