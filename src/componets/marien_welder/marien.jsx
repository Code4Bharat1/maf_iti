import Image from "next/image";

export default function MarineWelderSection() {
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Marine Welder Title & Image + Text */}
        <div className="md:flex gap-6 items-center">
          {/* Title & Image */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">Marine Welder</h2>
            <div className="w-[350px] h-[250px] relative">
              <Image
                src="/aboutus/welder-image.png"
                alt="Marine Welder"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-[17px] mt-7 md:mt-12 md:ml-6 leading-relaxed">
            <p>
              The Marine Welder trade is a specialized training program that equips students with the skills to
              perform welding operations on ships, boats, and other marine structures. The course focuses on
              different types of welding techniques used in the marine industry, including underwater welding,
              structural fabrication, and pipe welding. Students learn to work in shipyards, offshore rigs, and
              maintenance docks, making this course ideal for those interested in technical, hands-on careers
              in the maritime and offshore sectors.
            </p>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mt-8">
          <h3 className="text-[18px] font-bold mb-3 underline">Key Learning :</h3>
          <ul
            className="list-disc list-inside text-[16px] space-y-2"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <li>Understand types of welding (Arc, MIG, TIG, Gas) and their applications in marine structures.</li>
            <li>Learn to weld ship hulls, tanks, and structural components using proper marine welding standards.</li>
            <li>Perform welding on steel pipes and marine components exposed to water pressure and harsh environments.</li>
            <li>Introduction to underwater welding techniques and safety (advanced training may require specialization).</li>
            <li>Follow safety guidelines for marine environments, including welding in confined spaces and on watercraft.</li>
            <li>Operate and maintain welding machines and equipment, and learn basic testing of weld quality (visual and non-destructive).</li>
          </ul>
        </div>

        {/* Our Trades Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Our Trades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {/* Trade 1 */}
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <Image
                src="/aboutus/classroom1.png"
                alt="RACT"
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <p className="text-[16px] font-semibold p-4 leading-snug text-black">
                Refrigeration & Air <br />
                Conditioning <br />
                Technician (RACT)
              </p>
            </div>

            {/* Trade 2 */}
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <Image
                src="/aboutus/classroom2.png"
                alt="Draughtsman"
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <p className="text-[16px] font-semibold p-4 leading-snug text-black">
                Draughtsman <br />
                Mechanical
              </p>
            </div>

            {/* Trade 3 */}
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <Image
                src="/aboutus/classroom3.png"
                alt="COPA"
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <p className="text-[16px] font-semibold p-4 leading-snug text-black">
                Computer Operator <br />
                & Programming <br />
                Assistant (COPA)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
