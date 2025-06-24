// pages/index.js
export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-between px-10"
      style={{ backgroundImage: "url('/home/welcome.png')" }}
    >
      {/* Left Side Text */}
      <div className="text-white text-center max-w-xl space-y-5">
        <h1 className="text-4xl font-bold">Register Now!</h1>
        <p className="text-4xl">
          <span className="text-yellow-400 whitespace-nowrap mx-20">"Take the First Step Toward</span>{" "}
          <span className="font-bold text-yellow-400 ">Success"</span>
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <span>awtmaft@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <span>+91 8983508919</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Course</option>
            <option>Computer Basics</option>
            <option>Web Development</option>
            <option>Advanced Excel</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
