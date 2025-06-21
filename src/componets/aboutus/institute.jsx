import Image from "next/image";

export default function Institute() {
  return (
    <div className="min-h-scrnee bg-[#F4F8FC] flex flex-col justify-between">
      {/* Heading */}
      <div className="py-10 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1F2C56] text-center font-sans">
          Institute Management Committee
        </h1>
      </div>

      {/* Table Section */}
      <div className="px-4 pb-10 flex items-center justify-center">
        <div className="overflow-x-auto w-full h-auto  max-w-5xl rounded-xl shadow-md">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#1F2C56] text-white text-left">
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Position</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 bg-white">
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Awab H. Fakih</td>
                <td className="px-6 py-4">Chairman I.T.I</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Mubarak Kapdi</td>
                <td className="px-6 py-4">Renowned Educationist, Scholar &amp; the Author of 17 Books on Education</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Khalid Kolpekar</td>
                <td className="px-6 py-4">Auditor, Fakih and Company</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Hafiz Osama Farukh Sarang</td>
                <td className="px-6 py-4">B.E. Civil, Sarang &amp; Associates</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Ms. Zaibunnissa Malik</td>
                <td className="px-6 py-4">Ph. D, M.E., B.E. Principal, M.H.S. Polytechnic</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Tehseen Ulde</td>
                <td className="px-6 py-4">Diploma in Civil, Civil Contractor</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Dr. Sirajuddin H Chougle</td>
                <td className="px-6 py-4">Principal Maharashtra College of Arts Science and Commerce</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Ateef A.Rauf Fajandar</td>
                <td className="px-6 py-4">B.E. (Architecture) S A Planning &amp; Design</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Suhail Ismail Fakih</td>
                <td className="px-6 py-4">B.E. (Architecture)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Akil Firoz Karimi</td>
                <td className="px-6 py-4">M.E Civil – Director Urban Group</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Luqman Kazi</td>
                <td className="px-6 py-4">B.E. – Civil</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Abdul Majid Abdul Hamid Ansari</td>
                <td className="px-6 py-4">
                  Founder Director of ARBA Accelerator and Ventures Pvt Ltd, Head of Business Incubation &amp; Serial Entrepreneur, Stakeholder Raigad District (Govt), Entrepreneurship Cell IITB Mentor, Channel Partner CIIA, COT Core Member
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
