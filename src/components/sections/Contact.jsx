export default function Contact() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Whether you want to collaborate on the future of AI or just say hi.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <a 
          href="mailto:om@example.com"
          className="group relative px-8 py-4 bg-transparent border-2 border-darkRed text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_#ff1a1a]"
        >
          <div className="absolute inset-0 bg-darkRed w-0 transition-all duration-300 ease-out group-hover:w-full z-0" />
          <span className="relative z-10 flex items-center justify-center">
            Send a Message
          </span>
        </a>

        <a 
          href="https://linkedin.com/in/om051105"
          target="_blank"
          rel="noreferrer"
          className="group relative px-8 py-4 bg-transparent border-2 border-[#0077b5] text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_#0077b5]"
        >
          <div className="absolute inset-0 bg-[#0077b5] w-0 transition-all duration-300 ease-out group-hover:w-full z-0" />
          <span className="relative z-10 flex items-center justify-center">
            LinkedIn
          </span>
        </a>
      </div>
      
      <div className="mt-32 text-gray-600 text-sm tracking-widest uppercase">
        © {new Date().getFullYear()} Om | Designed intelligently
      </div>
    </section>
  );
}
