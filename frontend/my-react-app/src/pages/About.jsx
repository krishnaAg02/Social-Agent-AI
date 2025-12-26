function About() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-15">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ===================== HEADING ===================== */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 animate-fadeIn">
          About Social Agent AI
        </h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16 animate-slideUp">
          We are building the future of advertising by transforming simple product images into 
          <span className="font-semibold text-indigo-600"> cinematic, AI-generated ad experiences </span>
          for brands, creators, and e-commerce businesses.
        </p>

        {/* ===================== MISSION & VISION ===================== */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Mission */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-10 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              🚀 Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower every business—big or small—to create 
              <span className="font-semibold"> studio-quality advertisements instantly </span>
              using the power of artificial intelligence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-10 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              🌍 Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the world’s most trusted 
              <span className="font-semibold"> AI advertising automation platform </span>
              where creativity meets speed, scale, and performance.
            </p>
          </div>
        </div>

        {/* ===================== CORE STORY ===================== */}
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 px-10 py-12 mb-24 animate-slideUp">
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-indigo-600">Social Agent AI</span> was created to eliminate the complexity of traditional ad production.
            We remove the need for studios, cameras, and editing software. With our 
            <span className="font-semibold"> generative AI pipelines</span>, you can generate 
            <span className="font-semibold"> high-conversion marketing videos in seconds</span>.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-5">
            From product photography to branded storytelling, our platform delivers 
            automation at scale - helping entrepreneurs, creators, and brands grow faster
            in today’s competitive digital economy.
          </p>
        </div>

        {/* ===================== ANIMATED STATS ===================== */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {[
            { value: "10x", label: "Faster Ad Creation" },
            { value: "95%", label: "Production Cost Saved" },
            { value: "24/7", label: "Automation Uptime" },
            { value: "100+", label: "Ads Generated Daily" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-xl p-8 hover:scale-110 transition-all duration-300"
            >
              <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default About;