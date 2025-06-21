import Image from "next/image";

export default function MarineElectricianSection() {
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Marine Electrician Title & Image + Text */}
        <div className="md:flex gap-6 items-start">
          {/* Title & Image */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-[20px] font-bold">Marine Electrician</h2>
            <Image
              src="/aboutus/Electrician.png"
              alt="Marine Electrician"
              width={500}
              height={400}
              className="rounded-md"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2 text-[17px] mt-6 md:mt-12 leading-relaxed">
            <p>
              The Marine Electrician trade focuses on training students to install, maintain, and repair electrical
              systems on ships and marine vessels. The course prepares candidates to handle specialized marine
              electrical equipment, power distribution, lighting, and safety systems used in the maritime industry.
              This trade is ideal for students who are interested in both electrical work and marine technology,
              offering strong career prospects in ports, shipyards, merchant navy, and marine engineering companies.
            </p>
          </div>
        </div>

        {/* Key Learnings */}
        <div>
          <h3 className="text-[18px] font-bold mb-3 underline">Key Learning :</h3>
          <ul
            className="list-disc list-inside text-[16px] space-y-2"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <li>Understand marine electrical circuits, safety standards, and the functioning of shipboard electrical systems.</li>
            <li>Learn to install and connect electrical components such as motors, generators, switchboards, and lighting systems on ships.</li>
            <li>Study the operation of AC/DC power systems, battery banks, control panels, and energy distribution on marine vessels.</li>
            <li>Learn to read and interpret marine electrical schematics and wiring diagrams used in shipbuilding and repair.</li>
            <li>Practice safety protocols for working on ships, including fire detection systems, emergency lighting, and safety alarms.</li>
          </ul>
        </div>

        {/* Our Trades Section */}
        <div>
          <h2 className="text-[24px] font-bold text-center mb-8">Our Trades</h2>
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
                alt="Draughtsman Mechanical"
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
