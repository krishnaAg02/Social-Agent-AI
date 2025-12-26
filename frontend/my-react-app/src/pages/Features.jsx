function Features() {
  const features = [
    {
      title: "AI Caption Generator",
      desc: "Crafts catchy, platform-optimized captions in seconds.",
      icon: "✍️",
      isNew: true,
    },
    {
      title: "Multi-Platform Posting",
      desc: "Publish to YouTube, Instagram, X, Facebook, and Threads.",
      icon: "🌍",
    },
    {
      title: "Smart Scheduling",
      desc: "Plan your content calendar and auto-post at the best times.",
      icon: "⏰",
      isNew: true,
    },
    {
      title: "Analytics Snapshot",
      desc: "Track likes, comments, and shares in one unified dashboard.",
      icon: "📊",
    },
  ];

  // ✅ AI Demo Videos
  const demoVideos = [
    { title: "AI Saree Advertisement", src: "/videos/demo1.mp4" },
    { title: "Cosmetics Product AI Ad", src: "/videos/demo2.mp4" },
    { title: "Saree Shop AI Promo", src: "/videos/demo3.mp4" },
    { title: "Jewellery Product AI Ad", src: "/videos/demo4.mp4" },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-23"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ================= FEATURES ================= */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Powerful AI Features
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-20">
          Everything you need to automate, optimize, and scale your social media
          growth using artificial intelligence.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 text-center
                         hover:scale-105 transition-all duration-300 hover:shadow-indigo-300/50"
            >
              {f.isNew && (
                <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  NEW
                </span>
              )}

              <div className="text-5xl mb-5">{f.icon}</div>

              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                {f.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* ================= AI DEMO VIDEOS ================= */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          AI Generated Ad Demos
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-16">
          Hover to preview • Click for sound & fullscreen
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {demoVideos.map((video, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden
                         transition-all duration-300 hover:-translate-y-3
                         hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
              onMouseEnter={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.muted = true;
                v.play();
              }}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
            >
              {/* ✅ VIDEO: Hover = muted autoplay | Click = sound ON */}
              <video
                src={video.src}
                muted
                playsInline
                loop
                onClick={(e) => {
                  e.currentTarget.muted = false; // ✅ SOUND ON
                  e.currentTarget.play();
                  if (e.currentTarget.requestFullscreen) {
                    e.currentTarget.requestFullscreen();
                  }
                }}
                className="w-full h-64 object-cover transition-transform duration-700
                           group-hover:scale-110 cursor-pointer"
              />

              {/* ✅ Title Bar */}
              <div className="p-5 text-center bg-white relative z-10">
                <h4 className="text-lg font-bold text-indigo-600">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Hover to preview • Click for sound
                </p>
              </div>

              {/* ✅ Soft cinematic overlay */}
              <div
                className="absolute inset-0 bg-indigo-600/10 opacity-0
                           group-hover:opacity-100 transition-all duration-300
                           pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
