
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
          <ScrollLink to="hero" smooth duration={600} offset={-80}>
            Social Agent AI
          </ScrollLink>
        </h1>

        <div className="space-x-6 font-semibold text-md">
          <ScrollLink
            to="hero"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-indigo-500"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="features"
            smooth
            duration={600}
            offset={-60}
            className="cursor-pointer hover:text-indigo-500"
          >
            Features
          </ScrollLink>


          <ScrollLink
            to="pricing"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-indigo-500"
          >
            Pricing
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth
            duration={600}
            offset={-60}
            className="cursor-pointer hover:text-indigo-500"
          >
            About
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth
            duration={600}
            offset={-20}
            className="cursor-pointer hover:text-indigo-500"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;