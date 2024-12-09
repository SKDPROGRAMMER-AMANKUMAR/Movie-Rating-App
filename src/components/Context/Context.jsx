import {createContext,useContext,useState} from "react";
import {getMovieData} from "../GetMovieData/index.js";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [movieData, setMovieData] = useState(null)
    const fetchMovieData = async (movie_name) => {
        await getMovieData(movie_name, setMovieData);
    };

    return (
        <AppContext.Provider  value={{
            setMovieData,
            getMovieData,
            movieData
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext,AppProvider}; 