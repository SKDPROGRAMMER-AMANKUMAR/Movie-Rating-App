const BaseURL = "http://www.omdbapi.com/?";
const apikey = `${process.env.APIKEY}`;

// Function to fetch movie data
export const getMovieData = async (movieName,setMovieData) => {
  try {
    // if (!movieName || typeof movieName !== "string") {
    //   throw new Error("Invalid movie name. Please provide a valid movie title.");
    // }

    // Ensure the movie name is properly encoded for the URL
    // const encodedMovieName = encodeURIComponent(movieName.trim());

    // Fetch data from the OMDb API
    const response = await fetch(`${BaseURL}apikey=${apikey}&t=${movieName}`);
    // Check if the response is okay
    if (!response.ok) {
      throw new Error("Error while connecting to OMDb API.");
    }

    const movieData = await response.json();

    // Check if the API returned an error
    // if (movieData.Response === "False") {
    //   throw new Error(movieData.Error || "Movie not found.");
    // }

    // Log the movie data
    console.log("The movie data is: ", movieData);
    setMovieData(movieData)
    return movieData; // Return the data if needed
  } catch (error) {
    console.error("Error while fetching movie data: ", error.message);
  }
};
