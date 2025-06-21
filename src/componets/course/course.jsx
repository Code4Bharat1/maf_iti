import Image from "next/image";

export default function Courses() {
  return (
    <div className="bg-[#F4F8FC] pt-10 px-4">
      {/* Our Trades Section */}
      <h2 className="text-3xl font-bold text-center text-[#1F2C56] mb-8">Our Trades</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
          <Image
            src="/aboutus/classroom2.png"
            alt="RACT"
            width={450}
            height={300}
            className="w-full h-[250px] object-cover"
          />
          <p className="font-semibold text-lg py-4">
            Refrigeration & Air Conditioning Technician (RACT)
          </p>
        </div>
        <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
          <Image
            src="/aboutus/classroom1.png"
            alt="Draughtsman"
            width={450}
            height={300}
            className="w-full h-[250px] object-cover"
          />
          <p className="font-semibold text-lg py-4">Draughtsman Mechanical</p>
        </div>
        <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
          <Image
            src="/aboutus/classroom3.png"
            alt="COPA"
            width={450}
            height={300}
            className="w-full h-[250px] object-cover"
          />
          <p className="font-semibold text-lg py-4">
            Computer Operator & Programming Assistant (COPA)
          </p>
        </div>
      </div>

      {/* Dubai Dry Docks Courses */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#1F2C56] mb-6">
          Dubai Dry Docks Courses
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black border text-center rounded-lg overflow-hidden">
            <Image
              src="/aboutus/mechanical.png"
              alt="Mechanical Fitter"
              width={450}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="font-bold text-lg py-4">Mechanical Fitter</p>
          </div>
          <div className="bg-white text-black border text-center rounded-lg overflow-hidden">
            <Image
              src="/aboutus/marine.png"
              alt="Marine Welder"
              width={450}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="font-bold text-lg py-4">Marine Welder</p>
          </div>
          <div className="bg-white text-black border text-center rounded-lg overflow-hidden">
            <Image
              src="/aboutus/Electrician.png"
              alt="Marine Electrician"
              width={450}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="font-bold text-lg py-4">Marine Electrician</p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-[#1F2C56] py-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Blog</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white text-black rounded-md overflow-hidden shadow">
            <Image
              src="/aboutus/civil.png"
              alt="Blog 1"
              width={450}
              height={300}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">Wednesday, April 10, 2024</p>
              <h3 className="font-semibold text-md">
                Unveiling the Craft of Draughtsman Civil: Architects of Structural Ingenuity
              </h3>
            </div>
          </div>
          <div className="bg-white text-black rounded-md overflow-hidden shadow">
            <Image
              src="/aboutus/craft.png"
              alt="Blog 2"
              width={450}
              height={300}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">Wednesday, April 10, 2024</p>
              <h3 className="font-semibold text-md">
                Exploring the Craft of Refrigeration & Air Conditioning Technicians (RACT): Masters of Climate Control
              </h3>
            </div>
          </div>
          <div className="bg-white text-black rounded-md overflow-hidden shadow">
            <Image
              src="/aboutus/mechanical1.png"
              alt="Blog 3"
              width={450}
              height={300}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">Wednesday, April 10, 2024</p>
              <h3 className="font-semibold text-md">
                Exploring the Role and Importance of Draughtsman Mechanical
              </h3>
            </div>
          </div>
        </div>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded">
          View All
        </button>
      </div>

      {/* Video Gallery Section */}
      <div className="text-center py-12 bg-[#F4F8FC]">
        <h2 className="text-3xl font-bold text-[#1F2C56] mb-8">Video Gallery</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          <Image
            src="/aboutus/1st.png"
            alt="Video 1"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
          <Image
            src="/aboutus/2nd.png"
            alt="Video 2"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
          <Image
            src="/aboutus/3rd.png"
            alt="Video 3"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
          <Image
            src="/aboutus/4th.png"
            alt="Video 4"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
        </div>
      </div>
    </div>
  );
}
