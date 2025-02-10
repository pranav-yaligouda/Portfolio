import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 flex flex-col justify-center items-center text-white font-sans relative">
      <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight text-center text-shadow-lg">
        Hi, I'm <span className="text-primary">Pranav</span>
      </h1>
      <p className="text-xl sm:text-2xl mt-4 font-light tracking-wider text-center max-w-xl">
        A passionate developer who loves to create intuitive and dynamic web experiences.
      </p>
      
      <Link href="/projects">
        <button className="mt-8 px-8 py-4 text-xl font-semibold bg-white text-primary rounded-full shadow-lg hover:bg-primary hover:text-white transition duration-300 transform hover:scale-105">
          View My Projects
        </button>
      </Link>

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-8">
        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/pranav" target="_blank">
          <i className="fab fa-linkedin fa-3x text-white hover:text-gray-200 transition duration-300 transform hover:scale-110"></i>
        </Link>
        {/* GitHub */}
        <Link href="https://github.com/pranav" target="_blank">
          <i className="fab fa-github fa-3x text-white hover:text-gray-200 transition duration-300 transform hover:scale-110"></i>
        </Link>
        {/* Twitter */}
        <Link href="https://twitter.com/pranav" target="_blank">
          <i className="fab fa-twitter fa-3x text-white hover:text-gray-200 transition duration-300 transform hover:scale-110"></i>
        </Link>
        {/* Instagram */}
        <Link href="https://www.instagram.com/pranav" target="_blank">
          <i className="fab fa-instagram fa-3x text-white hover:text-gray-200 transition duration-300 transform hover:scale-110"></i>
        </Link>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-10 text-white text-sm opacity-60">
        <p>Let's build something awesome together!</p>
      </div>
    </div>
  );
}
