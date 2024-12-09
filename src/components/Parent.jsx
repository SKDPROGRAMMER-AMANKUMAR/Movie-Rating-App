import React,{useContext} from 'react'
import Search from './Search'
import { AppContext } from './Context/Context'

const Parent = () => {
  const { movieData }  = useContext(AppContext)
  
  return (
    <div className="min-h-screen rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="fixed  inset-0 overflow-hidden pointer-events-none">
        {/* Film grain effect */}
        <div className="absolute  top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-10"></div>
        
        {/* Animated spotlight effects */}
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[160px] animate-spotlight"></div>
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[160px] animate-spotlight animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[160px] animate-spotlight animation-delay-4000"></div>
        
        {/* Cinematic lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="bg-gradient-to-b from-black/40 to-transparent backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center flex items-center justify-center gap-3 sm:gap-4">
              <i className="fas fa-film text-yellow-300 animate-pulse"></i>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Movie Search App
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Search Component */}
      <div className="relative z-10 mt-8">
        <Search />
      </div>

      {/* Movie Details Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8 relative z-10">
        <div className="bg-black/30 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden border border-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)] transition-all duration-500">
          <div className="flex flex-col lg:flex-row">
            {/* Movie Poster Section */}
            <div className="lg:w-1/3 relative group">
              <div className="relative aspect-[2/3] lg:aspect-auto lg:h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay z-10"></div>
                <img
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  src={movieData?.Poster ? `${movieData?.Poster}`:"https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg"}
                  alt="Movie Poster"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {['Action', 'Biography', 'Drama'].map((genre) => (
                          <span key={genre} className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-lg text-xs text-white/90 font-medium border border-white/10">
                            {movieData?.Genre ? (movieData?.Genre):(genre)} 
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-white/90 font-medium flex items-center gap-2">
                        <i className="fas fa-calendar-alt text-blue-400"></i>
                        {movieData?.Released ? (movieData?.Released):("Released: 21 Dec 2016")}
                        
                      </p>
                      <p className="text-sm text-white/90 font-medium flex items-center gap-2">
                        <i className="fas fa-clock text-blue-400"></i>
                        Runtime: {movieData?.Runtime? (movieData?.Runtime):("161 min")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Movie Information Section */}
            <div className="lg:w-2/3 p-6 sm:p-8 text-white/90">
              {/* Title and Ratings Section */}
              <div className="border-b border-white/10 pb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <h2 className="text-4xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                    {movieData?.Title? (movieData?.Title):("Dangal")}
                  </h2>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <div className="flex-1 sm:flex-none bg-black/20 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] group hover:scale-105 transition-all duration-300">
                      <p className="text-xs text-white/70">IMDb Rating</p>
                      <p className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                        <i className="fas fa-star text-yellow-400 group-hover:animate-spin"></i>
                        {movieData?.imdbRating ? (movieData?.imdbRating):('8.3')}
                      </p>
                    </div>
                    <div className="flex-1 sm:flex-none bg-black/20 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300">
                      <p className="text-xs text-white/70">Rotten Tomatoes</p>
                      <p className="text-xl sm:text-2xl font-bold text-white">{movieData?.Ratings?.[1]?.Value ? (movieData?.Ratings?.[1]?.Value):("89%")}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-clock text-blue-400"></i>
                    {movieData?.Runtime? (movieData?.Runtime):("161 min")}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-globe text-blue-400"></i>
                    {movieData?.Language ? (movieData?.Language):("Hindi, English")}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-calendar text-blue-400"></i>
                    {movieData?.Year ? (movieData?.Year):("2016")}
                  </span>
                </div>
              </div>

              {/* Plot Section */}
              <div className="py-6 border-b border-white/10">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <i className="fas fa-book text-blue-400"></i>
                  Plot Summary
                </h3>
                <p className="text-white/70 leading-relaxed p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-300">
                  {movieData?.Plot ? (movieData?.Plot):("Mahavir Singh Phogat, a former wrestler, decides to fulfill his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.")}
                </p>
              </div>

              {/* Cast & Crew Section */}
              <div className="py-6 border-b border-white/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <i className="fas fa-users text-blue-400"></i>
                  Cast & Crew
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-300">
                    <p className="text-sm text-white/70 mb-1">Director</p>
                    <p className="font-medium"> {movieData?.Director ? (movieData?.Director):("Nitesh Tiwari")}</p>
                  </div>
                  <div className="p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-300">
                    <p className="text-sm text-white/70 mb-1">Stars</p>
                    <p className="font-medium">{movieData?.Actors ? (movieData?.Actors):("Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh")}</p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <i className="fas fa-info-circle text-blue-400"></i>
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.15)] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-trophy text-yellow-400 text-xl"></i>
                        <div>
                          <p className="text-sm text-white/70">Awards</p>
                          <p className="font-medium">{movieData?.Awards ? (movieData?.Awards):("41 wins & 38 nominations")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.15)] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-dollar-sign text-green-400 text-xl"></i>
                        <div>
                          <p className="text-sm text-white/70">Box Office</p>
                          <p className="font-medium">{movieData?.BoxOffice ? (movieData?.BoxOffice):("$12,391,761")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.15)] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-film text-blue-400 text-xl"></i>
                        <div>
                          <p className="text-sm text-white/70">Type</p>
                          <p className="font-medium">{movieData?.Type ? (movieData?.Type):("Movie")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.15)] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-map-marker-alt text-red-400 text-xl"></i>
                        <div>
                          <p className="text-sm text-white/70">Country</p>
                          <p className="font-medium">{movieData?.Country ? (movieData?.Country):("India, United States")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 mt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-lg">
            <p className="text-white/70 text-center text-sm flex items-center justify-center gap-2">
              <img 
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" 
                alt="TMDB Logo" 
                className="w-6 h-6"
              />
              This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Parent
