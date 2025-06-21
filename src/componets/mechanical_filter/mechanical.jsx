import Image from "next/image";

export default function MechanicalFitterSection() {
  return (
    <div className="bg-[#F4F8FC]  text-[#1F2C56] px-4 py-12">
      {/* Mechanical Fitter Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-xl font-bold mb-4">Mechanical Fitter</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div>
            <Image
              src="/aboutus/mechanical2.png"
              alt="Mechanical Fitter"
              width={512}
              height={282}
              className="rounded"
            />
          </div>
          {/* Description */}
          <div className="text-md leading-relaxed">
            <p>
              The Mechanical Fitter trade under ITI focuses on training students
              to install, assemble, maintain, and repair mechanical machinery
              and tools. This course is ideal for individuals who are interested
              in working with machines and want to build a career in
              manufacturing, automotive, maintenance, and engineering
              industries. The program emphasizes hands-on training along with
              essential theoretical knowledge to prepare students for real-world
              industrial environments.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="font-bold text-base mb-2">Key Learning :</h3>
          <ul className="list-disc list-inside text-md space-y-1">
            <li>
              Understand core mechanical engineering concepts along with
              workshop safety rules, tool handling, and first aid procedures.
            </li>
            <li>
              Learn hands-on skills like marking, drilling, filing, grinding,
              and assembling components used in various machines and structures.
            </li>
            <li>
              Gain the ability to read and interpret technical diagrams and
              blueprints essential for accurate fitting and machine work.
            </li>
            <li>
              Master the use of tools like vernier calipers, micrometers, and
              gauges to ensure high accuracy in mechanical operations.
            </li>
            <li>
              Learn to dismantle, inspect, repair, and reassemble mechanical
              equipment, with a focus on preventive maintenance techniques.
            </li>
          </ul>
        </div>
      </div>

      {/* Our Trades */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Trades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center bg-white  shadow rounded p-4">
            <Image
              src="/aboutus/classroom1.png"
              alt="RACT"
              width={464}
              height={262}
              className="mx-auto rounded"
            />
            <p className="mt-2 text-sm font-semibold">
              Refrigeration & Air Conditioning Technician (RACT)
            </p>
          </div>
          <div className="text-center bg-white shadow rounded p-4">
            <Image
              src="/aboutus/classroom2.png"
              alt="Draughtsman Mechanical"
              width={464}
              height={262}
              className="mx-auto rounded"
            />
            <p className="mt-2 text-1xl font-semibold">
              Draughtsman Mechanical
            </p>
          </div>
          <div className="text-center bg-white shadow rounded p-4">
            <Image
              src="/aboutus/classroom3.png"
              alt="COPA"
              width={464}
              height={262}
              className="mx-auto rounded"
            />
            <p className="mt-2 text-1xl font-semibold">
              Computer Operator & Programming Assistant (COPA)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
