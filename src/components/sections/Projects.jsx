import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Repos to always hide (commit bots, daily activity etc.)
const HIDDEN = ['daily', 'bot', 'commit', 'streak', 'stats', 'readme', 'profile'];

export default function Projects() {
  const [repos, setRepos]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(false);
  const [profile, setProfile] = useState(null);
  const ref = useRef();

  useEffect(() => {
    // Fetch profile + repos in parallel — no per-repo README calls (avoids rate limit)
    Promise.all([
      fetch('https://api.github.com/users/om051105'),
      fetch('https://api.github.com/users/om051105/repos?sort=updated&per_page=100'),
    ])
      .then(([pRes, rRes]) => Promise.all([pRes.json(), rRes.json()]))
      .then(([profileData, repoData]) => {
        setProfile(profileData);

        if (!Array.isArray(repoData)) {
          // Rate limited — still show fallback projects below
          setError(true);
          setLoading(false);
          return;
        }

        const clean = repoData
          .filter(r => {
            if (r.fork) return false;
            const name = (r.name || '').toLowerCase();
            const desc = (r.description || '').toLowerCase();
            return !HIDDEN.some(kw => name.includes(kw) || desc.includes(kw));
          })
          .slice(0, 12);

        setRepos(clean);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  useEffect(() => {
    if (!loading && repos.length > 0) {
      gsap.fromTo('.gh-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '#projects-grid', start: 'top 80%' }
        }
      );
    }
  }, [loading, repos]);

  const langColor = (lang) => {
    const map = { Python:'#3572A5', JavaScript:'#f1e05a', TypeScript:'#3178c6', 'C++':'#f34b7d', HTML:'#e34c26', CSS:'#563d7c', Jupyter:'#DA5B0B', default:'#8b949e' };
    return map[lang] || map.default;
  };

  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-20">

      {/* Section header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="accent-line" />
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--accent)' }}>
          Chapter Four — GitHub
        </span>
      </div>

      <div className="overflow-hidden mb-6">
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8F0FF] uppercase">
          All<br />Projects
        </h2>
      </div>

      {/* Live profile stats strip */}
      {profile && (
        <div className="flex flex-wrap gap-6 mb-14 pb-8 border-b border-white/5">
          {[
            { label: 'Public Repos',  val: profile.public_repos },
            { label: 'Followers',     val: profile.followers },
            { label: 'Following',     val: profile.following },
            { label: 'Member Since',  val: new Date(profile.created_at).getFullYear() },
          ].map(({ label, val }) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-[#E8F0FF]">{val}</div>
              <div className="text-[10px] uppercase tracking-widest text-[#4A5070]">{label}</div>
            </div>
          ))}
        </div>
      )}

      {loading ? (
        <div className="flex items-center gap-4 text-[#4A5070] text-xs uppercase tracking-widest">
          <div className="w-4 h-4 border border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
          Connecting to GitHub API...
        </div>
      ) : error && repos.length === 0 ? (
        <p className="text-[#4A5070] text-sm">
          GitHub API rate limit reached. Refresh in a minute — repos auto-load live from your account every time the page opens.
        </p>
      ) : (
        <div id="projects-grid" ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {repos.map(repo => (
            <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}
              className="gh-card group card-glass rounded-2xl p-6 flex flex-col justify-between hover:border-[var(--accent)] transition-all duration-400 min-h-[180px]">
              <div>
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-[#E8F0FF] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-1">
                  {repo.name}
                </h3>
                <p className="text-xs text-[#4A5070] leading-relaxed line-clamp-3">
                  {repo.description || 'No description provided.'}
                </p>
              </div>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  {repo.language && (
                    <>
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: langColor(repo.language) }} />
                      <span className="text-[10px] text-[#4A5070] font-medium">{repo.language}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-3 text-[10px] text-[#4A5070]">
                  {repo.stargazers_count > 0 && <span>⭐ {repo.stargazers_count}</span>}
                  <span>{new Date(repo.updated_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Auto-update notice */}
      <p className="mt-10 text-[10px] uppercase tracking-widest text-[#4A5070] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
        Live — auto-updates every page load from github.com/om051105
      </p>
    </section>
  );
}
