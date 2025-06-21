import Image from "next/image";

export default function DraughtsmanCivilSection() {
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title and Description Row */}
        <div className="md:flex gap-6 items-start">
          {/* Image */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">Draughtsman Civil</h2>
            <div className="w-[350px] h-[250px] relative">
              <Image
                src="/aboutus/classroom2.png"
                alt="Draughtsman Civil"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-[17px] mt-7 md:mt-12 md:ml-6 leading-relaxed">
            <p>
              This two-year course trains candidates in professional skills and
              knowledge related to mechanical drafting. It covers geometric
              construction, freehand drawing of machine components, and drawing
              sheet preparation. Students also gain practical training in allied
              trades like Fitter, Turner, Machinist, and Sheet Metal Worker.
              They learn to create detailed and assembly drawings of parts like
              pulleys, gears, and pipe fittings, and apply quality standards
              using AutoCAD. The course also includes 3D modeling, view
              generation, and plotting drawings in PDF format.
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
            <li>Construct free hand sketches of simple machine parts with correct proportions.</li>
            <li>Draw isometric projection from orthographic views (and vice versa) and Draw oblique projection from orthographic views.</li>
            <li>Draw and indicate the specification of different type of fasteners, welded and locking devices.</li>
            <li>Construct different types of gears, couplings and bearings with tolerance, dimension and indicating surface finish symbol.</li>
            <li>Draw in AutoCAD Detail and assembly drawing of machine parts viz., pulleys, pipe fittings, gears and cams applying range of cognitive and practical skills.</li>
            <li>Construct drawing of Engine & Machine parts with detailed and assembly in template layout applying quality concept in AutoCAD.</li>
            <li>Create 3D Solid by switching to 3D modeling workspace in AutoCAD, generate views, print preview and plotting.</li>
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
