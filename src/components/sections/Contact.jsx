export default function Contact() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-4 mb-20">
      <div className="text-center mb-12 w-full max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-[0_0_10px_#ff1a1a]">GitHub Matrix</h2>
        
        {/* The GitHub Green Wall */}
        <div className="w-full flex justify-center mb-10 overflow-x-auto py-4">
          <img 
            src="https://ghchart.rshah.org/00ff00/om051105" 
            alt="GitHub Green Wall Contribution Graph" 
            className="rounded-xl shadow-[0_0_20px_#00ff0033] bg-black/50 p-4 border border-green-900/50 transition-transform hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10 w-full relative z-10">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=om051105&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a" 
            alt="Om Singh's GitHub stats" 
            className="rounded-xl shadow-[0_0_20px_#ff1a1a] transition-transform hover:scale-105"
          />
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=om051105&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a" 
            alt="Top Languages" 
            className="rounded-xl shadow-[0_0_20px_#ff1a1a] transition-transform hover:scale-105"
          />
        </div>

        <div className="mt-20 flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-[0_0_10px_#ff1a1a]">Initiate Contact</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Open for collaborations, research roles, and building the next generation of intelligent systems.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center max-w-4xl">
            <a 
              href="mailto:singhsid2005@gmail.com"
              className="group relative px-8 py-6 bg-black/50 border border-darkRed text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_#ff1a1a] flex flex-col items-center justify-center backdrop-blur w-full md:w-1/3"
            >
              <div className="absolute inset-0 bg-darkRed w-0 transition-all duration-500 ease-out group-hover:w-full z-0 opacity-50" />
              <span className="relative z-10 text-2xl mb-2 tracking-wider">Email</span>
              <span className="relative z-10 text-sm text-gray-400 group-hover:text-white transition-colors">singhsid2005@gmail.com</span>
            </a>

            <div className="group relative px-8 py-6 bg-black/50 border border-darkRed text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_#ff1a1a] flex flex-col items-center justify-center backdrop-blur w-full md:w-1/3">
              <div className="absolute inset-0 bg-darkRed w-0 transition-all duration-500 ease-out group-hover:w-full z-0 opacity-50" />
              <span className="relative z-10 text-2xl mb-2 tracking-wider">Location</span>
              <span className="relative z-10 text-sm text-gray-400 group-hover:text-white transition-colors">Haridwar, Uttarakhand, India</span>
              <span className="relative z-10 text-xs text-glowRed mt-1 drop-shadow-[0_0_5px_#ff1a1a]">+91 9456196440</span>
            </div>

            <a 
              href="https://linkedin.com/in/om051105"
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-6 bg-black/50 border border-[#0077b5]/50 text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_#0077b5] hover:border-[#0077b5] flex flex-col items-center justify-center backdrop-blur w-full md:w-1/3"
            >
              <div className="absolute inset-0 bg-[#0077b5] w-0 transition-all duration-500 ease-out group-hover:w-full z-0 opacity-50" />
              <span className="relative z-10 text-2xl mb-2 tracking-wider">LinkedIn</span>
              <span className="relative z-10 text-sm text-gray-400 group-hover:text-white transition-colors">/in/om051105</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-gray-600 text-sm tracking-widest uppercase flex flex-col items-center gap-2">
        <span>© {new Date().getFullYear()} Om | Machine Learning Engineer</span>
        <span className="text-xs text-glowRed animate-pulse">System Online</span>
      </div>
    </section>
  );
}
