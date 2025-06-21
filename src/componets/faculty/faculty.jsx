import Image from "next/image";

const facultyMembers = [
  {
    name: "Parkar Jameel. Y",
    role: "Trade Instructor",
    experience: "27+ Years Teaching Experience",
    image: "/aboutus/parkar.png",
  },
  {
    name: "Mukadam Vazir. AR",
    role: "Trade Instructor",
    experience: "38 years of Teaching & Industrial Experience",
    image: "/aboutus/mukadam.png",
  },
  {
    name: "Khatib Ubaidulla. M",
    role: "Trade Instructor",
    experience: "20+ years of Teaching & Industrial Experience",
    image: "/aboutus/khatib.png",
  },
  {
    name: "Dakhni Irshad. I",
    role: "CNC Expert / Workshop Instructor",
    experience: "19+ Years of Teaching & Industrial Experience",
    image: "/aboutus/dakhni.png",
  },
  {
    name: "Firfire Fabiha. S",
    role: "Trade Instructor",
    experience: "10+ Years Teaching Experience",
    image: "/aboutus/firfire.png",
  },
  {
    name: "Dalvi Ejaz. M",
    role: "Trade Instructor",
    experience: "16+ years Teaching Experience",
    image: "/aboutus/dalvi.png",
  },
  {
    name: "Dahivl Rahish. AR",
    role: "Trade Instructor",
    experience: "10+ years of Teaching & Industrial Experience",
    image: "/aboutus/dakhni2.png",
  },
  {
    name: "Chogle Sushil. G",
    role: "Trade Instructor",
    experience: "11+ years of Teaching & Industrial Experience",
    image: "/aboutus/chogle.png",
  },
  {
    name: "Kadir Maryam. M",
    role: "Employability Skills",
    experience: "4 years of Teaching & Industrial Experience",
    image: "/aboutus/kadari.png",
  },
];

const nonTeachingStaff = [
  {
    name: "Bharat Dhasade",
    role: "Peon",
    experience: "11+ Years of Total Experience",
    image: "/aboutus/bharti.png",
  },
  {
    name: "Sone Dharmendra. S",
    role: "Peon Staff",
    experience: "42+ Years of Total Experience",
    image: "/aboutus/sone.png",
  },
  {
    name: "Lane Hidayat. M",
    role: "Store Keeper",
    experience: "40+ Years of Total Experience",
    image: "/aboutus/lane.png",
  },
];

export default function FacultyPage() {
  return (
    <div className="bg-[#F4F8FC]">
      {/* Faculty Section */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-[#1F2C56] mb-12">
          Our Faculty
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-[#FFEB3B] rounded-xl p-4 text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={180}
                height={180}
                className="mx-auto object-contain h-[180px] w-[180px]"
              />
              <div className="bg-[#1F2C56] text-white mt-4 py-2 px-2 rounded-md">
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-sm">{member.role}</p>
                <p className="text-xs mt-1">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Teaching Staff */}
        <h2 className="text-3xl font-bold text-center text-[#1F2C56] my-12">
          Non-Teaching Staff
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {nonTeachingStaff.map((staff, index) => (
            <div key={index} className="bg-[#FFDF35] rounded-xl p-4 text-center">
              <Image
                src={staff.image}
                alt={staff.name}
                width={180}
                height={180}
                className="mx-auto object-contain h-[180px] w-[180px]"
              />
              <div className="bg-[#1F2C56] text-white mt-4 py-2 px-2 rounded-md">
                <p className="font-semibold text-sm">{staff.name}</p>
                <p className="text-sm">{staff.role}</p>
                <p className="text-xs mt-1">{staff.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
