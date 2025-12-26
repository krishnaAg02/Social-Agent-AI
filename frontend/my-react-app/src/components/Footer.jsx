function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-6 fixed bottom-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        
        {/* Left Section - Brand */}
        <h2 className="text-2xl font-extrabold tracking-wide mb-6 md:mb-0 hover:scale-105 transition-transform duration-300">
          Social Agent AI
        </h2>

        {/* Center Section - Social Icons */}
        <div className="flex space-x-8 text-3xl">

          {/* Instagram */}
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-pink-300 relative group"
          >
            <i className="bi bi-instagram"></i>
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-blue-300 relative group"
          >
            <i className="bi bi-linkedin"></i>
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </a>

          {/* Twitter / X */}
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-gray-200 relative group"
          >
            <i className="bi bi-twitter-x"></i>
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              X (Twitter)
            </span>
          </a>

          {/* YouTube */}
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-red-300 relative group"
          >
            <i className="bi bi-youtube"></i>
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              YouTube
            </span>
          </a>

        </div>

        {/* Right Section - Copyright */}
        <p className="mt-6 md:mt-0 text-md font-medium tracking-wide">
          © {new Date().getFullYear()} Social Agent AI. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
