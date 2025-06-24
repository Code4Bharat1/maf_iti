import Image from 'next/image';

export default function Mapsection() {
  return (
    <div className="bg-[#f6f9fe] flex flex-col items-center justify-center  py-10">
      {/* Main Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left - Google Map */}
        <div className="w-100 mx-25 flex flex-col items-center">
          <div className=" ml-40 rounded-md overflow-hidden w-full h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7334175901214!2d72.99167477520752!3d19.077312782129682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be859e61f8e5601%3A0xe703733fd6a4e4f9!2sAWT%20Mehrunnisa%20Abbas%20Fakih%20Industrial%20Training%20Institute!5e0!3m2!1sen!2sin!4v1719204151126!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <button className="mt-4 px-6 py-2 bg-[#1a264f] ml-40  text-white rounded-md hover:bg-[#13203f] transition">
            VIEW LOCATION
          </button>
        </div>

        {/* Right - Circle Image inside curved layout */}
     <div className="relative w-200 ml-20 h-[419px] overflow-hidden">
  {/* Wider blue background on right */}
  <div
    className="absolute inset-0 bg-[#1F2A44] rounded-l-full hidden md:block"
   
  ></div>

  {/* Slightly smaller image inside the same circle */}
 <div 
  className="hidden md:block absolute rounded-l-full ml-10 inset-0 w-190 h-full overflow-hidden"
>
  <Image
    src="/contactus/class2.png"
    alt="Students writing exam"
    fill
    className="object-cover "
  />
</div>

</div>



      </div>
    </div>
  );
}