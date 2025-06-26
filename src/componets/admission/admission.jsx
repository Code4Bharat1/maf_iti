import Image from "next/image";

export default function TradesPage() {
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] py-12 px-4">
      {/* Our Trades Section */}
      <h3 className="text-3xl font-bold text-center text-[#1F2C56] mb-8">
        Our Trades
      </h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            img: "/aboutus/classroom1.png",
            title: "Refrigeration & Air Conditioning Technician (RACT)",
          },
          {
            img: "/aboutus/classroom2.png",
            title: "Draughtsman Mechanical",
          },
          {
            img: "/aboutus/classroom3.png",
            title: "Computer Operator & Programming Assistant (COPA)",
          },
        ].map((trade, index) => (
          <div
            key={index}
            className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden"
          >
            <Image
              src={trade.img}
              alt={trade.title}
              width={450}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="font-semibold text-lg py-4">{trade.title}</p>
          </div>
        ))}
      </div>

      {/* Admission Process Section */}
<h2 className="text-4xl font-bold text-center text-[#1F2A44] mt-16 mb-10">
  Admission Process
</h2>

<div className="max-w-3xl mx-auto space-y-16 relative z-10">
  {[
    {
      number: "01",
      title: "REGISTRATION",
      description: "Online Registration on ITI Admission Portal",
      arrowPosition: "left",
    },
    {
      number: "02",
      title: "TRADE",
      description: "Priority Wise Trade selection Student can choose Multiple Trades",
      arrowPosition: "right",
    },
    {
      number: "03",
      title: "MERIT LIST",
      description: "Merit List Is Generated as per the Norms of Admission Portal",
      arrowPosition: "left",
    },
    {
      number: "04",
      title: "CAP ROUND",
      description: "Admission Portal selects the candidate on the basis of merit list",
      arrowPosition: "left",
    },
  ].map((step, index, array) => (
    <div key={index} className="relative z-10">
  {/* Blue Box */}
  <div className="bg-[#1F2A44] text-white text-md rounded-md shadow-md px-6 py-5 relative flex gap-4">
    <div className="text-white font-bold text-3xl">{step.number}</div>
    <div className="text-center w-full">
      <p className="text-yellow-400 text-md font-bold uppercase underline">
        {step.title}
      </p>
      <p className="text-sm font-medium">{step.description}</p>
    </div>

    {/* Blue Arrow (bottom of blue box) */}
    {index !== array.length - 1 && (
      <div
        className={`absolute w-0 h-0 
          border-l-[20px] border-l-transparent 
          border-r-[20px] border-r-transparent 
          border-t-[20px] border-t-[#1F2A44] 
          bottom-[-20px] z-20 ${step.arrowPosition === 'left' ? 'left-10' : 'right-10'}`}
      />
    )}
  </div>

  {/* White Arrow (below blue arrow, above next box) */}
  {index !== array.length - 1 && (
    <div
      className={`absolute w-0 h-0 
        border-l-[20px] border-l-transparent 
        border-r-[20px] border-r-transparent 
        border-t-[20px] border-t-white 
        bottom-[-40px] z-10 ${step.arrowPosition === 'left' ? 'left-10' : 'right-10'}`}
    />
  )}
</div>

  ))}
</div>



      {/* Required Documents */}
      <div className="w-full max-w-5xl min-h-[400px] mx-auto mt-10 p-8 border border-gray-300 rounded-md bg-white shadow-md">
  <h3 className="text-xl font-bold text-center mb-6">
    Required Documents for ITI Admission
  </h3>
  <ul className="list-disc pl-6 space-y-4 text-base font-bold text-black">
    <li>SSC Marksheet (Original)</li>
    <li>School Leaving Certificate (Original)</li>
    <li>Aadhar Card (Photocopy)</li>
    <li>Domicile Certificate (Photocopy)</li>
    <li>Caste Certificate (Photocopy)</li>
    <li>Non Creamy layer certificate (Photocopy)</li>
    <li>Passport-size Photographs (size–4.5 x 3.5)</li>
  </ul>
</div>


{/* Trades Offered Table */}
<h2 className="text-4xl font-bold text-center mt-16 mb-4 text-blue">
  Trades Offered by Our Institute
</h2>

<div className="overflow-x-auto w-full px-2 rounded">
  <table
    className="w-full h-automax-w-[600px] mx-auto text-md text-center border-separate min-h-[300px]"
    style={{ borderSpacing: 0 }}
  >
    <thead className="bg-[#1F2C56] text-white text-lg">
      <tr>
        <th className="px-4 py-4 border-r border-black">Trade Name</th>
        <th className="px-4 py-4 border-r border-black">Trade Type</th>
        <th className="px-4 py-4 border-r border-black">Eligibility</th>
        <th className="px-4 py-4">Duration</th>
      </tr>
    </thead>
    <tbody className="bg-[#BAC7E5] text-black font-bold text-base">
      {[
        [
          <>
            Computer Operator and <br />
             Programming Assistant (COPA)
          </>,
          "Non-Engineering",
          "10th Passed",
          "1 Year",
        ],
        [
          <>
            Refrigeration and <br /> 
            Air Conditioning Technician
          </>,
          "Engineering",
          "10th Passed",
          "2 Years",
        ],
        [
          <>
            Draughtsman Mechanical
          </>,
          "Engineering",
          "10th Passed",
          "2 Years",
        ],
        [
          <>
            Draughtsman Civil
          </>,
          "Engineering",
          "10th Passed",
          "2 Years",
        ],
        [
          <>
            Marine Fitter.
          </>,
          "Engineering",
          "10th Passed",
          "2 Years",
        ],
      ].map(([name, type, eligibility, duration], index) => (
        <tr key={index} className="min-h-[60px]">
          <td className="px-4 py-4 border-r border-black">{name}</td>
          <td className="px-4 py-4 border-r border-black">{type}</td>
          <td className="px-4 py-4 border-r border-black">{eligibility}</td>
          <td className="px-4 py-4">{duration}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


{/* Dubai Dry Docks Courses Table */}
<h2 className="text-4xl font-bold text-center mt-10 mb-4 text-blue">
  Dubai Dry Docks Courses
</h2>
<div className="overflow-x-auto w-full px-4 mb-16">
  <table className="w-full h-auto text-sm text-center border-separate min-h-[300px]" style={{ borderSpacing: 0 }}>
    <thead className="bg-[#1F2C56] text-white text-sm">
      <tr>
        <th className="px-10 py-6 border-r border-black">Name</th>
        <th className="px-10 py-6 border-r border-black">Eligibility</th>
        <th className="px-10 py-6">Duration</th>
      </tr>
    </thead>
    <tbody className="bg-[#BAC7E5] text-black font-bold text-lg">
      {[
        ["Mechanical Fitter", "10th Passed", "2 Months"],
        ["Marine Electrician", "10th Passed", "2 Months"],
        ["Marine Welder", "10th Passed", "2 Months"],
      ].map(([name, eligibility, duration], index) => (
        <tr key={index} className="min-h-[80px]">
          <td className="px-10 py-6 border-r border-black">{name}</td>
          <td className="px-10 py-6 border-r border-black">{eligibility}</td>
          <td className="px-10 py-6">{duration}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



    </div>
  );
}
