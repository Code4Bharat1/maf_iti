'use client'
import Image from 'next/image'

export default function OurManagement() {
  return (
    <>
    <section className="bg-[#f4f8ff] font-poppins">
      <div className="flex flex-col md:flex-row shadow-lg h-auto md:h-120">

        {/* Left Section - 2/6 */}
        <div className="w-full md:w-2/6 bg-[#132c4b] flex items-center justify-center p-2">
          <Image
            src="/home/president.png"
            alt="President"
            width={400}
            height={400}
            className="left-1/2 h-60 md:h-80 z-10 ml-0 md:ml-90"
          />
        </div>

        {/* Right Section - 5/6 */}
        <div className="w-full md:w-5/6 bg-[#f4f8ff] p-2 mx-0 md:mx-50">
          <h2 className="text-3xl md:text-5xl text-center md:text-left font-semibold text-[#1F2A44] mb-2">Our Management</h2>
          <h3 className="text-2xl md:text-3xl mt-5 md:mt-10 mb-2 ml-0 md:ml-40 text-center font-bold text-black mb-2">
            President<br />
            Mr. Saifullah Hasanmiya Firfire
          </h3>
          <p className="text-gray-700 mx-5 md:mx-10 ml-0 md:ml-40 text-center text-lg md:text-2xl leading-relaxed">
            In modern day world globalization is unavoidable & education is crucial for economic success in this globalized world. With keeping this in mind I established this institute 19 years ago to empower rural youth to shape a better future.
          </p>
        </div>

      </div>
    </section>
     <section className="bg-[#f4f8ff] font-poppins">
      <div className="flex flex-col md:flex-row shadow-lg h-auto md:h-120">

        {/* Right Section - 5/6 */}
        <div className="w-full md:w-5/6 bg-[#f4f8ff] p-2 mx-0 md:mx-50 order-2 md:order-1">
        
          <h3 className="text-2xl md:text-3xl mt-10 md:mt-20 mb-2 mr-0 md:mr-29 text-center font-bold text-black mb-2">
           Chairman <br />
           Mr. Awab Habib Fakih
          </h3>
          <p className="text-gray-700 mx-5 mr-5 md:mr-20 text-center text-lg md:text-2xl leading-relaxed">
            I believe that technical education is crucial for industry & our institute aims to provide skilled craftsmen to meet industry's demands & offer self- employment opportunities. It's a sure success destination for those aiming to excel in today's Industrial landscape   </p>
        </div>
        
        {/* Left Section - 2/6 */}
        <div className="w-full md:w-2/6 bg-[#132c4b] flex items-center justify-center p-2 order-1 md:order-2">
          <Image
            src="/home/chairman.png"
            alt="Chairman"
            width={400}
            height={400}
            className="left-1/2 h-60 md:h-80 z-10 mr-0 md:mr-90"
          />
        </div>
      </div>
    </section>

     <section className="bg-[#f4f8ff] font-poppins">
      <div className="flex flex-col md:flex-row shadow-lg h-auto md:h-120">

        {/* Left Section - 2/6 */}
        <div className="w-full md:w-2/6 bg-[#132c4b] flex items-center justify-center p-2">
          <Image
            src="/home/principle.png"
            alt="Principal"
            width={400}
            height={400}
            className="left-1/2 h-60 md:h-80 z-10 ml-0 md:ml-90"
          />
        </div>

        {/* Right Section - 5/6 */}
        <div className="w-full md:w-5/6 bg-[#f4f8ff] p-2 mx-0 md:mx-50">
          
          <h3 className="text-2xl md:text-3xl mt-5 md:mt-10 mb-2 ml-0 md:ml-40 text-center font-bold text-black mb-2">
           Principal <br />
           Mr.Ulde Azharuddin. Z
          </h3>
          <p className="text-gray-700 mx-5 md:mx-auto ml-0 md:ml-40 text-center text-lg md:text-2xl leading-relaxed">
            I promise this institute continuously strives for constant upgradation for which organization and seminars, faculty interaction with the industry and continuous training of the faculties are constantly organized. Institute provides vibrant environment for developing other life skills also i.e. sports, social services and help the trainees to be a better citizens.</p>       
        </div>

      </div>
    </section>
    </>
  );
}