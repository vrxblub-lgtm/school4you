import { useState, useEffect, FormEvent } from 'react';
import { Search, BookOpen, GraduationCap, Layout, Gamepad2, ExternalLink, X } from 'lucide-react';
import gamesData from './games.json';

interface Game {
  id: string;
  title: string;
  url: string;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to Google search for the "web search" feature
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-800">
      {/* Header / Navigation */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2 text-indigo-700 font-bold text-xl">
          <GraduationCap className="w-8 h-8" />
          <span>EduPortal</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Curriculum</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Library</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Assignments</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Resources</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Search Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Student Resource Search</h1>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Access academic journals, research papers, and educational materials from across the web.
          </p>
          <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search academic resources..."
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl shadow-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Search
            </button>
          </form>
        </section>

        {/* Quick Links / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Library</h3>
            <p className="text-slate-500 text-sm">Access thousands of e-books and academic journals for your research projects.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Study Planner</h3>
            <p className="text-slate-500 text-sm">Organize your schedule, track assignments, and set reminders for upcoming exams.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Tools</h3>
            <p className="text-slate-500 text-sm">Engage with interactive simulations and logic-based educational exercises.</p>
          </div>
        </div>

        {/* Interactive Tools (Hidden Games) Section */}
        <section id="tools">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Interactive Learning Modules</h2>
            <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">3 Modules Available</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div 
                key={game.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-indigo-300 transition-all cursor-pointer group"
                onClick={() => setSelectedGame(game)}
              >
                <div className="aspect-video bg-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors"></div>
                  <Gamepad2 className="w-12 h-12 text-slate-300 group-hover:text-indigo-200 transition-colors" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{game.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Logic & Strategy</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-lg mb-4">
              <GraduationCap className="w-6 h-6" />
              <span>EduPortal</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Empowering students with the tools they need to succeed in their academic journey.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-4">Resources</h5>
            <ul className="text-sm text-slate-500 space-y-2">
              <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-4">Contact</h5>
            <p className="text-sm text-slate-500">support@eduportal.edu</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
          &copy; 2026 EduPortal Student Resource Center. All rights reserved.
        </div>
      </footer>

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedGame(null)}></div>
          <div className="bg-white w-full max-w-5xl h-full max-h-[80vh] rounded-3xl shadow-2xl relative z-10 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900">{selectedGame.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedGame(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-slate-50">
              <iframe 
                src={selectedGame.url} 
                className="w-full h-full border-none"
                title={selectedGame.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
