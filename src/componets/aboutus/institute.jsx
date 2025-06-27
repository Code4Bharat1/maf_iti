import React from "react";

export default function ManagementCommittee() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] py-10 px-4">
      <h2 className="text-center text-4xl font-extrabold text-[#1F2A44] mb-15">
        Institute Management Committee
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full max-w-4xl mx-auto border border-gray-300 border-collapse rounded-2xl">
          <thead>
            <tr className="bg-[#1d3557] text-white text-center">
              <th className="p-5 text-base font-bold w-1/3 border border-gray-300">
                Name
              </th>
              <th className="p-5 text-base font-bold w-1/3 border border-gray-300">
                Position
              </th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base text-black text-center font-bold">
            {[
              ["Awab H. Fakih", "Chairman I.T.I"],
              ["Mubarak Kapdi", "Renowned Educationist, Scholar & the Author of 17 Books on Education"],
              ["Khalid Kolpekar", "Auditor, Fakih and Company"],
              ["Hafiz Osama Farukh Sarang", "B.E. Civil, Sarang & Associates"],
              ["Ms. Zaibunnissa Malik", "Ph. D, M.E., B.E. Principal, M.H.S. Polytechnic"],
              ["Tehseen Ulde", "Diploma in Civil, Civil Contractor"],
              ["Dr. Sirajuddin H Chougle", "Principal Maharashtra College of Arts Science and Commerce"],
              ["Afeef A. Rauf Fajandar", "B.E. (Architecture) S A Planning & Design"],
              ["Suhail Ismail Fakih", "B.E. (Architecture)"],
              ["Akil Firoz Karimi", "M.E Civil – Director Urban Group"],
              ["Luqman Kazi", "B.E. – Civil"],
              [
                "Abdul Majid Abdul Hamid Ansari",
                `Founder Director of ARBA Accelerator and Ventures Pvt Ltd, Head of Business Incubation & Serial Entrepreneur, 
                 Stakeholder Raigad District (Govt), Entrepreneurship Cell IITB Mentor, Channel Partner CIIA, COT Core Member`,
              ],
            ].map(([name, position], index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#FFFFFF]"}`}
              >
                <td className="p-5 border border-gray-300 whitespace-pre-line font-bold">
                  {name}
                </td>
                <td className="p-5 border border-gray-300 whitespace-pre-line font-bold">
                  {position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
