import Image from "next/image";

export default function COPASection() {
  return (
    <div className="bg-[#F4F8FC] px-4 py-12 text-[#1F2C56]">
      {/* COPA Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          Computer Operator & Programming Assistant (COPA)
        </h2>

        {/* Image and Description */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="border-4 border-[#1F2C56] rounded">
            <Image
              src="/aboutus/classroom3.png"
              alt="COPA"
              width={512}
              height={282}
              className="rounded"
            />
          </div>
          <div className="text-md leading-relaxed">
            <p>
              Computer Operator & Programming Assistant (COPA) COPA is one of
              the best ITI certificate course, Trainee knows about COPA – Office
              Package – MS Word, MS Excel, MS Power Point, MS Access, DBMS, My
              SQL, Computer networking, Internet and E-commerce, HTML, CSS,
              Java, JavaScript, Advance Excel, Cyber Security, Cloud Computing,
              Python.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="font-bold text-base mb-2 text-[#1F2C56] underline">
            Key Learning :
          </h3>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>
              Install and setup operating system and related software in a
              computer following safety precautions.
            </li>
            <li>
              Create, format and edit document using word processing application
              software.
            </li>
            <li>
              Create, format, edit and develop a workbook by using spreadsheet
              application software.
            </li>
            <li>
              Create and customize slides for presentation. Create and manage
              database file using MySQL.
            </li>
            <li>
              Install, setup/configure, troubleshoot and secure computer network
              including Internet.
            </li>
            <li>
              Develop web pages using HTML and CSS. Develop web pages using Java
              Script.
            </li>
            <li>
              Create workbooks with advanced formulae, macros, charts, pivot
              tables and demonstrate ability to use Power tools.
            </li>
            <li>Browse, select and transact using E commerce websites.</li>
            <li>
              Secure information from Internet by using cyber security concept.
            </li>
            <li>Explain Cloud concepts & services.</li>
            <li>Write programs using Python / Java language.</li>
          </ul>
        </div>
      </div>

      {/* Our Trades Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#1F2C56]">
          Our Trades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="text-center bg-white shadow rounded p-4">
            <Image
              src="/aboutus/classroom1.png"
              alt="RACT"
              width={464}
              height={262}
              className="mx-auto rounded"
            />
            <p className="mt-2 text-md font-semibold">
              Refrigeration & Air Conditioning Technician (RACT)
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center bg-white shadow rounded p-4">
            <Image
              src="/aboutus/classroom2.png"
              alt="Draughtsman Mechanical"
              width={464}
              height={262}
              className="mx-auto rounded"
            />
            <p className="mt-2 text-sm font-semibold">
              Draughtsman Mechanical
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center bg-white shadow rounded p-4">
            <Image
              src="/aboutus/classroom3.png"
              alt="COPA"
              width={464}
              height={262}
              className="mx-auto rounded"
            />
            <p className="mt-2 text-sm font-semibold">
              Computer Operator & Programming Assistant (COPA)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
