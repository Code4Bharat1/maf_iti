'use client';
import Image from 'next/image';

export default function DraughtsmanCivil() {
  return (
    <section className="bg-[#f5f9ff] py-8 sm:py-10 md:py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
        {/* Left Side - Image & Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a264f] mb-3 sm:mb-4">Draughtsman Civil</h2>
          <Image
            src="/courses/course1.png"
            alt="Draughtsman Civil"
            width={600}
            height={400}
            className="rounded-md shadow-md w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>

        {/* Right Side - Description */}
        <div>
          <p className="text-gray-900 text-sm sm:text-base md:text-2xl mt-4 sm:mt-8 md:mt-20 text-justify">
           This two-year course trains candidates in professional skills and knowledge related to mechanical drafting. It covers geometric construction, freehand drawing of machine components, and drawing sheet preparation. Students also gain practical training in allied trades like Fitter, Turner, Machinist, and Sheet Metal Worker. They learn to create detailed and assembly drawings of parts like pulleys, gears, and pipe fittings, and apply quality standards using AutoCAD. The course also includes 3D modeling, view generation, and plotting drawings in PDF format.
          </p>
          </div>
          <div className="mt-6 sm:mt-7 md:mt-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1F2A44] mb-3 sm:mb-4 underline">Key Learning :</h3>
            <ul className="list-disc font-[Lateef] font-semibold text-xs sm:text-sm md:text-xl md:whitespace-nowrap list-inside space-y-2 sm:space-y-3 md:space-y-4 text-gray-900">
              <li>Install and setup operating system and related software in a computer following safety precautions.</li>
              <li>Create, format and edit document using word processing application software.</li>
              <li>Create, format, edit and develop a workbook by using spreadsheet application software.</li>
              <li>Create and customize slides for presentation. Create and manage database file using MySQL.</li>
              <li>Install, setup/configure, troubleshoot and secure computer network including Internet.</li>
              <li>Develop web pages using HTML and CSS. Develop web pages using Java Script.</li>
              <li>Create workbooks with advanced formulae, macros, charts, pivot tables and demonstrate ability to use Power tools.</li>
              <li>Browse, select and transact using E commerce websites.</li>
              <li>Secure information from Internet by using cyber security concept.</li>
              <li>Explain Cloud concepts & services.</li>
              <li>Write programs using Python / Java language.</li>
            </ul>
          </div>
        </div>

    </section>
  );
}