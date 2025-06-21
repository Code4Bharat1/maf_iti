import Image from "next/image";

export default function DraughtsmanCivil() {
  return (
    <div className="bg-[#F4F8FC] px-4 py-12 text-[#1F2C56]">
      {/* Draughtsman Civil Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-[20px] font-bold mb-4">Draughtsman Civil</h2>

        {/* Image and Description */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <Image
              src="/aboutus/classroom2.png"
              alt="Draughtsman Civil"
              width={512}
              height={282}
              className="rounded"
            />
          </div>
          <div className="text-[17px] leading-relaxed mt-7 md:mt-12 md:ml-6">
            <p>
              This course prepares trainees for the construction industry by
              teaching them to create detailed drawings of buildings, roads,
              dams, and other structures using sketches, notes, and data. They
              learn to work with drawing instruments and AutoCAD software to
              produce plans, elevations, sections, RCC drawings, and bar bending
              schedules. The course also covers material specifications,
              structural features, cost estimation, and analysis using software.
              After completion, students can work as Draughtsmen and grow into
              roles like Architectural Draughtsman or Supervisor.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="text-[18px] font-bold mb-3 underline">Key Learning :</h3>
          <ul
            className="list-disc list-inside text-[16px] space-y-2"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <li>
              Knowledge of basic Engineering Drawing like Lettering,
              Dimensioning, Geometrical Construction, Scale & Projection etc.
            </li>
            <li>2D Drawing & 3D Modelling on AutoCAD.</li>
            <li>
              Knowledge of Engineering Building Materials: Stone, Brick, Sand,
              Cement, Timber, Aggregate, Lime etc.
            </li>
            <li>
              Knowledge of all types of Construction such as Foundation, Floor,
              Plinth, Sub & Super Structure etc.
            </li>
            <li>Knowledge of Field Practice of Survey & Levelling.</li>
            <li>
              Knowledge of Building Planning. Find out the Quantities of
              Material, Estimating Costing & Site Supervision.
            </li>
            <li>
              Drafting of Structural & Architectural Drawing using AutoCAD.
            </li>
            <li>
              Preparing Drawing of Road, Railway, Dam, Barrage, Hydro Electric
              Project, Water Treatment Plant & Sewage Treatment Plant etc. using
              AutoCAD.
            </li>
          </ul>
        </div>
      </div>

      {/* Our Trades Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[24px] font-bold text-center mb-8">Our Trades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Trade Card 1 */}
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

          {/* Trade Card 2 */}
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

          {/* Trade Card 3 */}
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
  );
}
