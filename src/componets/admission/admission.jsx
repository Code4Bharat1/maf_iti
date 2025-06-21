import Image from "next/image";

export default function TradesPage() {
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] py-12 px-4">
      {/* Our Trades Section */}
      <h2 className="text-2xl font-bold text-center mb-8">Our Trades</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="text-center">
          <Image
            src="/aboutus/classroom1.png"
            alt="RAC"
            width={300}
            height={200}
            className="mx-auto rounded"
          />
          <p className="mt-2 text-sm font-semibold">
            Refrigeration & Air Conditioning Technician (RAC)
          </p>
        </div>
        <div className="text-center">
          <Image
            src="/aboutus/classroom2.png"
            alt="Draughtsman Mechanical"
            width={300}
            height={200}
            className="mx-auto rounded"
          />
          <p className="mt-2 text-sm font-semibold">Draughtsman Mechanical</p>
        </div>
        <div className="text-center">
          <Image
            src="/aboutus/classroom3.png"
            alt="COPA"
            width={300}
            height={200}
            className="mx-auto rounded"
          />
          <p className="mt-2 text-sm font-semibold">
            Computer Operator & Programming Assistant (COPA)
          </p>
        </div>
      </div>

      {/* Admission Process */}
      <h2 className="text-2xl font-bold text-center my-12">Admission Process</h2>
      <div className="max-w-lg mx-auto flex flex-col gap-4">
        {[
          {
            number: "01",
            title: "REGISTRATION",
            description: "Online Registration on ITI Admission Portal",
          },
          {
            number: "02",
            title: "TRADE",
            description:
              "Priority wise Trade selection Student can choose multiple trades",
          },
          {
            number: "03",
            title: "MERIT LIST",
            description:
              "Merit List is Generated as per the Norms of Admission Portal",
          },
          {
            number: "04",
            title: "CAP ROUND",
            description:
              "Admission Portal selects the candidate on the basis of merit list",
          },
        ].map((step) => (
          <div
            key={step.number}
            className="flex items-start gap-4 bg-[#1F2C56] text-white rounded-lg px-4 py-3"
          >
            <div className="text-2xl font-bold">{step.number}</div>
            <div>
              <p className="text-xs font-bold text-[#FFEB3B] uppercase">
                {step.title}
              </p>
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Required Documents */}
      <div className="bg-white border max-w-xl mx-auto mt-12 p-6 rounded shadow">
        <h3 className="text-center font-semibold text-lg mb-4">
          Required Documents for ITI Admission
        </h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>SSC Marksheet (Original)</li>
          <li>School Leaving Certificate (Original)</li>
          <li>Aadhar Card (Photocopy)</li>
          <li>Domicile Certificate (Photocopy)</li>
          <li>Caste Certificate (Photocopy)</li>
          <li>Non Creamy layer certificate (Photocopy)</li>
          <li>Passport-size Photographs (size - 4.5 x 3.5)</li>
        </ul>
      </div>

      {/* Trades Offered by Our Institute */}
      <h2 className="text-2xl font-bold text-center mt-16 mb-4">
        Trades Offered by Our Institute
      </h2>
      <div className="overflow-x-auto max-w-6xl mx-auto border rounded">
        <table className="min-w-full bg-[#BAC7E5] text-sm text-center">
          <thead className="bg-[#1F2C56] text-white text-base">
            <tr>
              <th className="px-6 py-4">Trade Name</th>
              <th className="px-6 py-4">Trade Type</th>
              <th className="px-6 py-4">Eligibility</th>
              <th className="px-6 py-4">Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Computer Operator and Programming Assistant (COPA)",
                "Non-Engineering",
                "10th Passed",
                "1 Year",
              ],
              [
                "Refrigeration and Air Conditioning Technician",
                "Engineering",
                "10th Passed",
                "2 Years",
              ],
              ["Draughtsman Mechanical", "Engineering", "10th Passed", "2 Years"],
              ["Draughtsman Civil", "Engineering", "10th Passed", "2 Years"],
              ["Marine Fitter", "Engineering", "10th Passed", "2 Years"],
            ].map(([name, type, eligibility, duration], index) => (
              <tr key={index} className="hover:bg-[#dde5f5]">
                <td className="px-6 py-4">{name}</td>
                <td className="px-6 py-4">{type}</td>
                <td className="px-6 py-4">{eligibility}</td>
                <td className="px-6 py-4">{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dubai Dry Docks Courses */}
      <h2 className="text-2xl font-bold text-center mt-16 mb-4">
        Dubai Dry Docks Courses
      </h2>
      <div className="overflow-x-auto max-w-4xl mx-auto mb-16 border rounded">
        <table className="min-w-full bg-[#BAC7E5] text-sm text-center">
          <thead className="bg-[#1F2C56] text-white text-base">
            <tr>
              <th className="px-7 py-4">Name</th>
              <th className="px-7 py-5">Eligibility</th>
              <th className="px-7 py-5">Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Mechanical Fitter", "10th Passed", "2 Months"],
              ["Marine Electrician", "10th Passed", "2 Months"],
              ["Marine Welder", "10th Passed", "2 Months"],
            ].map(([name, eligibility, duration], index) => (
              <tr key={index} className="hover:bg-[#dde5f5]">
                <td className="px-6 py-4">{name}</td>
                <td className="px-6 py-4">{eligibility}</td>
                <td className="px-6 py-4">{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
