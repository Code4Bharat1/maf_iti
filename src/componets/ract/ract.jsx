import Image from "next/image";

export default function RACTandTrades() {
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] px-4 py-12">
      {/* RACT Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-[20px] font-bold mb-4">
          Refrigeration & Air Conditioning Technician (RACT)
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div>
            <Image
              src="/aboutus/classroom1.png"
              alt="RACT"
              width={512}
              height={283}
              className="rounded"
            />
          </div>

          {/* Description */}
          <div className="text-[17px] mt-7 md:mt-12 md:ml-6 leading-relaxed">
            <p>
              Refrigeration & Air Conditioning Technician (RACT) who install,
              repair, gas charging & troubleshoot refrigeration & air
              conditioning in home & businesses. They work on refrigerator,
              window & split AC, HVAC unit, central AC, Ice factory, cold
              storage, etc. The trainee is able to check & rectify electrical
              defect in different refrigerator & AC. Trainee will be make a duct
              insulate in duct insulate in duct, AHU servicing and to identify
              VRF/VRV system. The trainee also able to check control system &
              identify error code of refrigeration system.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="font-bold text-[18px] mb-3 underline">Key Learning :</h3>
          <ul className="list-disc list-inside text-[16px] space-y-2"
          style={{ fontFamily: "Times New Roman, serif" }}>
            <li>
              Perform copper tube cutting, flaring, swagging, gas welding,
              brazing, soldering.
            </li>
            <li>
              Servicing, dismantling, and checking different parts of different
              types of commercial compressor.
            </li>
            <li>
              Install service and repair windows and split AC. Perform servicing
              of different types of water-cooled condenser, evaporator, chiller
              & cooling tower.
            </li>
            <li>
              Conduct servicing, repairing, leak testing, gas charging of
              fridge, deep freezer, water cooler, cold storage, ice candy plant
              etc.
            </li>
            <li>
              Identify the various components of central AC test, Servicing of
              A.H.U, damper, check air flow, De-scaling of condenser and CT
              servicing.
            </li>
            <li>
              Troubleshoot both Central A.C. plant direct and indirect system.
              Perform servicing of car AC. Fault diagnosis & remedial measures.
            </li>
          </ul>
        </div>
      </div>

      {/* Our Trades */}
      <div className="max-w-6xl mx-auto">
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
            <p className="text-[16px] font-semibold p-4 leading-snug">
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
            <p className="text-[16px] font-semibold p-4 leading-snug">
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
            <p className="text-[16px] font-semibold p-4 leading-snug">
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
