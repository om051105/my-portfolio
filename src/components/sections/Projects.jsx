import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/om051105/repos?sort=updated&per_page=6")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
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
    <section id="projects" className="min-h-screen py-24 px-4 flex flex-col justify-center items-center relative z-10 w-full">
      <h2 className="text-4xl text-glowRed uppercase tracking-widest font-bold mb-16 text-center shadow-[0_0_20px_#ff1a1a_var(--tw-shadow-color)] drop-shadow-[0_0_10px_#ff1a1a]">
        Projects Timeline
      </h2>

      {loading ? (
        <p className="text-xl text-gray-400">Loading GitHub Data...</p>
      ) : (
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {repos.map(repo => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              key={repo.id}
              className="gh-card p-6 bg-black/60 border border-darkRed rounded-xl transition-all duration-300 hover:scale-105 hover:border-glowRed hover:shadow-[0_0_20px_#ff1a1a] flex flex-col justify-between backdrop-blur"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 truncate">{repo.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-4 border-t border-darkRed/50 pt-4">
                <span className="text-xs font-mono text-glowRed px-2 py-1 bg-darkRed/20 rounded">
                  {repo.language || "Config"}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
