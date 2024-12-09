import React,{useContext, useState} from 'react'
import { AppContext } from './Context/Context'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const {getMovieData, setMovieData} = useContext(AppContext)

  // const handleSearch = (event) => {
  //   if(searchInput.trim() !== ''){
  //     setSearchInput(event.target.value);
  //     console.log("The movie name is " + event.target.value)
  //     getMovieData(searchInput,setMovieData)
  //      setSearchInput('')
  //   }
  // };

  const handleSearchVIAEnter = (e) => {
    const value = e.target.value; // Get the current input value
    setSearchInput(value);
    if (e.key === 'Enter' && value.trim() !== '') { // Use 'value' instead of 'searchInput'
      console.log("I'm clicked");
      console.log("The movie name is " + value);
      getMovieData(value, setMovieData); // Pass 'value' to the API
      setSearchInput(''); // Clear the input state
      e.target.value = ""; // Clear the input field
    }
  };
  

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="relative flex items-center bg-black/20 backdrop-blur-2xl p-2 sm:p-4 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620] hover:shadow-[inset_-12px_-8px_40px_#46464640] transition-all duration-300 border border-white/20 group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-blue-500/5 rounded-2xl group-hover:from-purple-500/10 group-hover:via-indigo-500/10 group-hover:to-blue-500/10 transition-colors duration-300"></div>
        <div className="absolute inset-0 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)] transition-shadow duration-300"></div>
        <i  className="fas fa-search text-lg sm:text-xl text-blue-400 absolute left-5 sm:left-8 transition-transform duration-300 group-hover:scale-110 z-10"></i>
        <input
          type="text"
          onKeyDown={handleSearchVIAEnter}
          placeholder="Search for movies..."
          className="w-full pl-12 sm:pl-16 pr-24 sm:pr-36 py-3 sm:py-4 rounded-xl bg-black/10 backdrop-blur-sm border-2 border-transparent focus:border-blue-500/30 focus:bg-black/20 focus:outline-none text-base sm:text-lg text-white placeholder-blue-200/50 transition-all duration-300 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1),inset_2px_2px_4px_rgba(0,0,0,0.2)] focus:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.15),inset_4px_4px_8px_rgba(0,0,0,0.25)]"
        />
        {/* <span onClick={handleSearch}  className="relative flex items-center gap-2">
            <span onClick={handleSearch} className="hidden sm:inline-block transform group-hover/btn:translate-x-1 transition-transform">
              Search
            </span>
            <i  onClick={handleSearch} className="fas fa-arrow-right text-base sm:text-xl group-hover/btn:translate-x-1 transition-transform"></i>
            </span>
            <span onClick={handleSearch}  className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span> */}
          
        {/* <button
        onClick={handleSearch} className="absolute right-2 sm:right-4 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[4px_4px_8px_rgba(0,0,0,0.25),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.15)] font-semibold group/btn z-10">
        </button> */}
      </div>
    </div>
  )
}

export default Search
