import Image from "next/image";

export default function TradesPage() {
  const steps = [
    {
      step: '01',
      title: 'REGISTRATION',
      description: 'Online Registration on ITI Admission Portal',
    },
    {
      step: '02',
      title: 'TRADE',
      description: 'Priority Wise Trade selection Student can choose Multiple Trades',
    },
    {
      step: '03',
      title: 'MERIT LIST',
      description: 'Merit List Is Generated as per the Norms of Admission Portal',
    },
    {
      step: '04',
      title: 'CAP ROUND',
      description: 'Admission Portal selects the candidate on the basis of merit list',
    },
  ];

  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] py-12 px-4">
      {/* Our Trades Section */}
      <h3 className="text-4xl font-extrabold text-center text-[#1F2C56] mb-8">
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
<div className="bg-[#F4F8FC] py-10 px-4">
  <h3 className="text-4xl font-extrabold text-center text-[#1F2C56] mb-8">
    Admission Process
  </h3>

  <div className="max-w-2xl mx-auto space-y-10">
    {[
      {
        step: '01',
        title: 'REGISTRATION',
        description: 'Online Registration on ITI Admission Portal',
      },
      {
        step: '02',
        title: 'TRADE',
        description: 'Priority Wise Trade selection Student can choose Multiple Trades',
      },
      {
        step: '03',
        title: 'MERIT LIST',
        description: 'Merit List Is Generated as per the Norms of Admission Portal',
      },
      {
        step: '04',
        title: 'CAP ROUND',
        description: 'Admission Portal selects the candidate on the basis of merit list',
      },
    ].map((item, index, arr) => {
      const isEven = index % 2 === 0;
      const isLast = index === arr.length - 1;
      const isFirst = index === 0;

      return (
        <div key={index} className="relative z-10">
          {/* White Top Arrow — skip for first item */}
          {!isFirst && (
            <div
              className={`absolute top-0 w-0 h-0 
                border-l-[15px] border-l-transparent 
                border-r-[15px] border-r-transparent 
                border-t-[30px] border-t-[#F4F8FC]
                ${isEven ? 'left-20 md:left-148' : 'right-20 md:right-148'}`}
            />
          )}

          {/* Main Box */}
          <div className="bg-[#102645] text-white px-10 py-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
            <div
              className="text-[26px] text-white font-bold"
              style={{ fontFamily: ['Protest Riot'] }} // Apply the font here
            >
              {item.step}
            </div>

            <div className="w-full flex flex-col items-center text-center -mt-2">
              <h3 className="text-yellow-500 font-bold text-[20px] uppercase tracking-wide underline mb-1">
                {item.title}
              </h3>
              <p className="text-white text-[18px] leading-snug">
                {item.description}
              </p>
            </div>
          </div>

          {/* Bottom Blue Arrow — skip for last item */}
          {!isLast && (
            <div className="relative z-10">
              <div
                className={`absolute bottom-[-30px] w-0 h-0 
                  border-l-[30px] border-l-transparent 
                  border-r-[30px] border-r-transparent 
                  border-t-[50px] border-t-[#102645] 
                  ${isEven ? 'left-4 md:left-9' : 'right-4 md:right-9'}`}
              />
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>




  

{/* Required Documents */}
<div className="w-full px-6 md:px-24 py-16 bg-[#F4F8FC]">
  <div className="max-w-6xl min-h-[600px] mx-auto border border-gray-300 rounded-xl bg-white shadow-xl px-12 py-12">
    <h3 className="text-4xl font-bold text-center mb-10 text-[#000000]">
      Required Documents for ITI Admission
    </h3>
    <ul className="list-disc pl-12 space-y-6 text-2xl font-semibold text-black leading-relaxed">
      <li>SSC Marksheet (Original)</li>
      <li>School Leaving Certificate (Original)</li>
      <li>Aadhar Card (Photocopy)</li>
      <li>Domicile Certificate (Photocopy)</li>
      <li>Caste Certificate (Photocopy)</li>
      <li>Non Creamy Layer Certificate (Photocopy)</li>
      <li>Passport-size Photographs (Size – 4.5 x 3.5)</li>
    </ul>
  </div>
</div>



{/* Trades Offered Table */}
<h2 className="text-4xl font-extrabold text-center mt-16 mb-8 text-blue">
  Trades Offered by Our Institute
</h2>

<div className="w-full px-1 md:px-2">
  <div className="mx-auto max-w-[1400px] overflow-hidden rounded-lg shadow-lg">
    <table
      className="w-full text-center text-[20px] border-separate"
      style={{ borderSpacing: 0 }}
    >
      <thead className="bg-[#1F2C56] text-white font-bold">
        <tr className="h-[70px]">
          <th className="px-6 py-4 border-r border-black">Trade Name</th>
          <th className="px-6 py-4 border-r border-black">Trade Type</th>
          <th className="px-6 py-4 border-r border-black">Eligibility</th>
          <th className="px-6 py-4">Duration</th>
        </tr>
      </thead>
      <tbody className="bg-[#BAC7E5] text-black font-semibold">
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
          ["Draughtsman Mechanical", "Engineering", "10th Passed", "2 Years"],
          ["Draughtsman Civil", "Engineering", "10th Passed", "2 Years"],
          ["Marine Fitter", "Engineering", "10th Passed", "2 Years"],
        ].map(([name, type, eligibility, duration], index) => (
          <tr key={index} className="h-[70px]">
            <td className="px-6 py-4 border-r border-black">{name}</td>
            <td className="px-6 py-4 border-r border-black">{type}</td>
            <td className="px-6 py-4 border-r border-black">{eligibility}</td>
            <td className="px-6 py-4">{duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      {/* Dubai Dry Docks Courses Table */}
      <h2 className="text-4xl font-extrabold text-center mt-16 mb-8 text-blue">
  Dubai Dry Docks Courses
</h2>

<div className="overflow-x-auto w-full px-4 mb-16 ">
  <div className="max-w-[1300px] mx-auto overflow-hidden rounded-lg shadow-lg"> {/* Rounded + Shadow */}
    <table
      className="w-full h-auto text-sm text-center border-separate min-h-[300px]"
      style={{ borderSpacing: 0 }}
    >
      <thead className="bg-[#1F2C56] text-white text-xl">
        <tr>
          <th className="px-4 py-3 border-r border-black">Name</th>
          <th className="px-4 py-3 border-r border-black">Eligibility</th>
          <th className="px-4 py-3">Duration</th>
        </tr>
      </thead>
      <tbody className="bg-[#BAC7E5] text-black font-bold text-base text-xl">
        {[
          ["Mechanical Fitter", "10th Passed", "2 Months"],
          ["Marine Electrician", "10th Passed", "2 Months"],
          ["Marine Welder", "10th Passed", "2 Months"],
        ].map(([name, eligibility, duration], index) => (
          <tr key={index} className="min-h-[60px]">
            <td className="px-4 py-3 border-r border-black">{name}</td>
            <td className="px-4 py-3 border-r border-black">{eligibility}</td>
            <td className="px-4 py-3">{duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
}
