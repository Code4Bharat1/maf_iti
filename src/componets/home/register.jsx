import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';


export default function Home() {
  return (
    <div
      className="relative min-h-[32rem] bg-cover bg-center flex items-center justify-between px-10"
      style={{ backgroundImage: "url('/home/contactus.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/70 via-[#1F2A44]/50 to-[#1F2A44]/30 z-0" />

      {/* Left Side Text */}
 

    <div className="relative z-10 text-white text-center max-w-2xl mx-auto space-y-6 px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold">Register Now!</h1>

      <p className="text-2xl md:text-4xl font-bold text-[#FFD700]">
  "Take the First Step Toward
  <br />
  <span className="text-[#FFD700] font-extrabold text-4xl block mt-1">Success"</span>
</p>


      <div className="space-y-4 text-lg mt-20">
        <div className="flex items-center justify-start space-x-3">
          <div className="bg-yellow-400 text-white p-2 rounded-full">
            <MdEmail className="text-2xl" />
          </div>
          <span className="text-white text-2xl">awtmaft@gmail.com</span>
        </div>

        <div className="flex items-center justify-start space-x-3">
          <div className="bg-yellow-400 text-white p-2 rounded-full">
            <BsTelephone className="text-2xl" />
          </div>
          <span className="text-white text-2xl">+91 8983508919</span>
        </div>
      </div>
    </div>
  


      {/* Form */}
      <div className="relative z-10 bg-white p-6 rounded-r-4xl rounded-t-4xl shadow-[0_2px_4px_0_rgba(195,195,195,0.8)]  w-full max-w-sm p-14 mr-40">
        <form className="space-y-5 w-full max-w-xs mx-auto">
  <input
    type="text"
    placeholder="Your name"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-[0_2px_4px_0_rgba(195,195,195,0.8)] focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-[0_2px_4px_0_rgba(195,195,195,0.8)]  focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <select
    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-[0_2px_4px_0_rgba(195,195,195,0.8)] focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option>Select Course</option>
    <option>Computer Basics</option>
    <option>Web Development</option>
    <option>Advanced Excel</option>
  </select>
 <button
  type="submit"
  className="w-full bg-transparent py-3 rounded-md shadow-none  transition"
>
  <span className="bg-[#1a264f] text-white px-6 py-3 rounded-md shadow-md text-md font-medium tracking-wide">
    SUBMIT
  </span>
</button>

</form>

      </div>
    </div>
  );
}
