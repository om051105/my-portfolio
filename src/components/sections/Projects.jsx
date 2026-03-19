import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/om051105/repos?sort=updated&per_page=100")
      .then(res => res.json())
      .then(async data => {
        // Filter out fork repositories and anything that looks like a commit bot
        const realProjects = data.filter(repo => {
          const name = repo.name.toLowerCase();
          const desc = (repo.description || "").toLowerCase();
          const isBot = name.includes('bot') || name.includes('commit') || desc.includes('bot') || desc.includes('daily');
          return !repo.fork && !isBot;
        }).slice(0, 9);
        
        // Enhance projects with live README analysis
        const enhancedProjects = await Promise.all(realProjects.map(async (repo) => {
          try {
            const readmeRes = await fetch(`https://api.github.com/repos/om051105/${repo.name}/readme`, {
              headers: { Accept: "application/vnd.github.v3.raw" }
            });
            if (readmeRes.ok) {
              const text = await readmeRes.text();
              // Clean basic markdown to extract readable text
              const plainText = text.replace(/(#+|\[.*?\]\(.*?\)|<.*?>|\*+|!\[.*?\]\(.*?\)|`)/g, ' ').replace(/\s+/g, ' ').trim();
              // Grab first 200 characters of actual readme text as the "AI Description"
              repo.readme_analysis = plainText.substring(0, 160) + (plainText.length > 160 ? "..." : "");
            }
          } catch(e) {
            // keep silent on error
          }
          return repo;
        }));

        setRepos(enhancedProjects);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load GitHub data", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && repos.length > 0) {
      gsap.fromTo(
        '.gh-card',
        { y: 100, opacity: 0, rotationX: -30 },
        {
          y: 0, opacity: 1, rotationX: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: '#projects-grid',
            start: 'top 75%',
            end: 'center center',
          }
        }
      );
    }
  }, [loading, repos]);

  return (
    <section id="projects" className="min-h-screen py-32 px-8 md:px-24 relative z-10 w-full">
      <p className="text-xs uppercase tracking-[0.3em] text-[#e63946] mb-6 font-bold">GitHub</p>
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#f4f4f0] leading-[0.9] mb-20">
        All<br />Projects
      </h2>

      {loading ? (
        <div className="flex items-center gap-4 text-gray-600 text-sm uppercase tracking-widest">
          <div className="w-4 h-4 border-2 border-[#e63946] border-t-transparent rounded-full animate-spin" />
          Fetching GitHub data...
        </div>
      ) : (
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {repos.map(repo => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              key={repo.id}
              className="gh-card p-8 bg-[#151515] border-2 border-transparent hover:border-[#e63946] rounded-[2rem] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-3xl font-black text-[#f4f4f0] mb-3 uppercase tracking-tighter group-hover:text-[#e63946] transition-colors">{repo.name}</h3>
                <div className="text-gray-400 text-sm mb-6">
                  {repo.readme_analysis ? (
                    <div>
                      <span className="text-[#e63946] text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">Analysis</span>
                      <p className="line-clamp-4 leading-relaxed font-light">{repo.readme_analysis}</p>
                    </div>
                  ) : (
                    <p className="line-clamp-3 font-light leading-relaxed">{repo.description || "No description provided."}</p>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-black px-4 py-2 bg-[#f4f4f0] rounded-full">
                  {repo.language || "Config"}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-600">
                  {new Date(repo.updated_at).getFullYear()}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
