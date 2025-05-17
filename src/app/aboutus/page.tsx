
import SmoothScroll from "@/components/smoothScroll/smoothScroll";
import "./aboutPage.css";
import AboutSection from "@/components/Sections/AboutUsPage/AboutSection/AboutSection";
import TeamSection from "@/components/Sections/AboutUsPage/TeamSection/TeamSection";
export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />

      {/* Hero banner */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 z-0">
          <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About U_Spot</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Building the future of digital creativity, one pixel at a time
          </p>
        </div>
      </div>

      {/* Main content */}
      <AboutSection />
      <TeamSection />

      {/* Client logos section */}
      {/* <div className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="w-full h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                                    Logo {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

      {/* CTA section */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create with us?
          </h2>
          <p className="text-xl mb-8">
            Join our creative community and start building your next digital
            masterpiece.
          </p>
          <a
            target="_blank"
            style={{ textDecoration: "none", cursor: "pointer" }}
            href="https://wa.me/96176646946"
          >
            <button className="buttonGetInTouch bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
