
import { Link as ScrollLink } from "react-scroll";
import Features from "./Features";
import Pricing from "./Pricing";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact"; // if you want contact section on same page

function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 🔹 HERO SECTION */}
      <section
        id="hero"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center pt-32 pb-20"
      >
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Automate Your Social Growth
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Social Agent AI helps you generate content, schedule posts, and track
            engagement across platforms.
          </p>

          {/* 🧠 Social Agent AI description – glass card */}
          <div className="max-w-5xl mx-auto mt-6 px-6 py-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
            <p className="text-md md:text-lg text-white/90 leading-relaxed text-center">
              <span className="font-semibold text-white">Social Agent AI</span> is an intelligent platform that automatically generates 
              <span className="font-semibold text-white"> high-quality advertisements</span> from simple product images. It transforms photos into complete ad videos with 
              <span className="font-semibold text-white"> realistic environments, human interactions, multiple scenes,</span> and 
              <span className="font-semibold text-white"> brand-ready storytelling</span>, eliminating the need for professional studios or manual editing.
            </p>

            <p className="text-md md:text-lg text-white/90 leading-relaxed text-center mt-4">
              Using advanced <span className="font-semibold text-white">generative AI</span> and 
              <span className="font-semibold text-white"> automated creative pipelines</span>, Social Agent AI enables businesses to produce 
              <span className="font-semibold text-white"> professional ad content in seconds</span>, making it ideal for 
              <span className="font-semibold text-white"> e-commerce sellers, creators, and brands</span> that need fast, scalable, and engaging marketing assets.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {/* Scroll to Pricing */}
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={600}
              offset={-80}
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 cursor-pointer"
            >
              See Pricing
            </ScrollLink>

            {/* Scroll to Features */}
            <ScrollLink
              to="features"
              smooth={true}
              duration={600}
              offset={-80}
              className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 cursor-pointer"
            >
              Explore Features
            </ScrollLink>
          </div>

          {/* 🎬 3 Highlight cards under hero */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            <div className="bg-white/15 border border-white/20 backdrop-blur-lg rounded-xl p-6 text-center text-white shadow-lg hover:scale-105 transition-all">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-xl font-bold mb-2">AI Video Ads</h3>
              <p className="text-sm text-white/85">
                Instantly convert product images into cinematic advertisement videos.
              </p>
            </div>

            <div className="bg-white/15 border border-white/20 backdrop-blur-lg rounded-xl p-6 text-center text-white shadow-lg hover:scale-105 transition-all">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Generation</h3>
              <p className="text-sm text-white/85">
                No studios. No editing. Generate ads in seconds with one click.
              </p>
            </div>

            <div className="bg-white/15 border border-white/20 backdrop-blur-lg rounded-xl p-6 text-center text-white shadow-lg hover:scale-105 transition-all">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-xl font-bold mb-2">Boost Conversions</h3>
              <p className="text-sm text-white/85">
                High-converting marketing assets designed for social platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 FEATURES CARDS (your Features.jsx) */}
      <div id="features">
        <Features />
      </div>

      {/* 🔹 UNIQUE SECTION – Why Social Agent AI is Unique */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 ">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            What Makes Social Agent AI Unique
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-20">
            A powerful generative AI engine designed to replace traditional ad production
            with speed, scale, and cinematic quality.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                ⚡ Fully Automated Ad Generation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Upload a product image and Social Agent AI instantly produces a polished advertisement tailored to the product.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                🎬 Cinematic Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Generates lifelike scenes, smooth camera motion, and realistic visuals that feel professionally directed.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                📦 Scalable for Any Business
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Works for sarees, sweets, cosmetics, décor, apparel, and more—perfect for small sellers to large brands.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                💰 Highly Cost-Effective
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Reduces the need for videographers, studios, or editing tools by up to 90%.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                🎯 Adaptive & Personalized Ads
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Each ad is customized to the product’s style, target audience, and platform for improved engagement.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                🤖 Automation Ready
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Connects easily with tools like n8n, enabling full automation of ad creation, storage, scheduling, and publishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 PRICING CARDS (your Pricing.jsx) */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* 🔹 ABOUT SECTION (from About.jsx) */}
      <div id="about">
        <About />
      </div>

      {/* 🔹 CONTACT SECTION */}
      <div id="contact">
        <Contact />
      </div>

      {/* 🔹 FAQ SECTION */}
      <section id="faq">
        <FAQ />
      </section>
    </div>
  );
}

export default Home;
