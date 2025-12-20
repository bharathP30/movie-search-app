import { useState } from "react";

export default function App(){
const moviesData = [
  { id: 1, title: "The Matrix", rating: 8.7, genre: "Action", year: 1999 },
  { id: 2, title: "Inception", rating: 8.8, genre: "Action", year: 2010 },
  { id: 3, title: "Interstellar", rating: 8.6, genre: "Sci-Fi", year: 2014 },
  { id: 4, title: "The Dark Knight", rating: 9.0, genre: "Action", year: 2008 },
  { id: 5, title: "Pulp Fiction", rating: 8.9, genre: "Drama", year: 1994 },
  { id: 6, title: "Forrest Gump", rating: 8.8, genre: "Drama", year: 1994 },
  { id: 7, title: "The Shawshank Redemption", rating: 9.3, genre: "Drama", year: 1994 },
  { id: 8, title: "The Godfather", rating: 9.2, genre: "Drama", year: 1972 },
  { id: 9, title: "Goodfellas", rating: 8.7, genre: "Drama", year: 1990 },
  { id: 10, title: "The Hangover", rating: 7.7, genre: "Comedy", year: 2009 },
  { id: 11, title: "Superbad", rating: 7.6, genre: "Comedy", year: 2007 },
  { id: 12, title: "Step Brothers", rating: 6.9, genre: "Comedy", year: 2008 },
  { id: 13, title: "Avatar", rating: 7.8, genre: "Sci-Fi", year: 2009 },
  { id: 14, title: "Blade Runner 2049", rating: 8.0, genre: "Sci-Fi", year: 2017 },
  { id: 15, title: "The Avengers", rating: 8.0, genre: "Action", year: 2012 },
  { id: 16, title: "Guardians of the Galaxy", rating: 8.0, genre: "Action", year: 2014 },
  { id: 17, title: "Dune", rating: 8.0, genre: "Sci-Fi", year: 2021 },
  { id: 18, title: "Parasite", rating: 8.6, genre: "Drama", year: 2019 },
];

const [list] = useState(moviesData);
const [name, setName] = useState("");
const [watchlist, setWatchlist] = useState([]);
const [ratingFilter, setRatingFilter] = useState("All");
const [genreFilter, setGenreFilter] = useState("All");

const filtered = list.filter(movie => {

   if (name.trim().length === 0) {
        return false;
    }
  
    const filterName = movie.title.toLowerCase().includes(name.toLowerCase());
    const filterGenre = genreFilter === "All" || genreFilter === movie.genre;
    const filterRating = ratingFilter === "All" || 
                        (ratingFilter === "9+" && movie.rating >= 9) ||
                        (ratingFilter === "8+" && movie.rating >= 8) ||
                        (ratingFilter === "7+" && movie.rating >= 7);


    return filterName && filterGenre && filterRating;
})

const buttonClass = "px-4 py-2 rounded-full transition hover:scale-105";
const activeClass = "bg-purple-600 text-white";
const inactiveClass = "bg-slate-600 text-white";

const isInWatchlist = (movieId) => {
  return watchlist.some(m => m.id === movieId);
};

return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-t from-gray-800 via-purple-900 to-gray-700">
        
            <header className="">
                  <h1 className="my-8 md:my-20 md:text-6xl text-5xl rounded-lg text-gray-200 text-center font-bold font-sans">Movie Search</h1>
            </header>

        <div className="md:max-w-3xl bg-gray-800 pt-6 p-2 mx-auto my-4 rounded-lg flex items-center">
            <label htmlFor="movieName"></label>
            <input value={name}
                   onChange={(e)  => setName(e.target.value)}
                   className="w-full md:max-w-2xl bg-gray-800 px-4 h-14 border-none outline-none text-gray-100 rounded-sm" 
                   type="search" id="movieName" 
                   name="query" placeholder="Search Movies..." 
                   autoFocus/>
            <span className="text-2xl">🔍</span>
        </div>

        <div className="space-y-2 m-2">
           
            <div className="flex gap-2 p-2 flex-wrap justify-right items-start rounded-xl md:justify-center md:items-center md:gap-4">
            <button className={`${buttonClass} ${genreFilter === "All"? activeClass : inactiveClass} `} onClick={()=>setGenreFilter("All")}>All</button>
            <button className={`${buttonClass} ${genreFilter === "Sci-Fi"? activeClass : inactiveClass} `} onClick={()=>setGenreFilter("Sci-Fi")}>Sci-Fi</button>
            <button className={`${buttonClass} ${genreFilter === "Action"? activeClass : inactiveClass} `} onClick={()=>setGenreFilter("Action")}>Action</button>
            <button className={`${buttonClass} ${genreFilter === "Drama"? activeClass : inactiveClass} `} onClick={()=>setGenreFilter("Drama")}>Drama</button>
            <button className={`${buttonClass} ${genreFilter === "Comedy"? activeClass : inactiveClass} `} onClick={()=>setGenreFilter("Comedy")}>Comedy</button>
            </div>
        
            <div className="flex gap-4 p-2 justify-normal items-center rounded-full md:justify-center md:items-center">
            <button className={`${buttonClass} ${ratingFilter === "All"? activeClass : inactiveClass} `} onClick={()=>setRatingFilter("All")}>All</button>
            <button className={`${buttonClass} ${ratingFilter === "9+"? activeClass : inactiveClass} `} onClick={()=>setRatingFilter("9+")}>9+</button>
            <button className={`${buttonClass} ${ratingFilter === "8+"? activeClass : inactiveClass} `} onClick={()=>setRatingFilter("8+")}>8+</button>
            <button className={`${buttonClass} ${ratingFilter === "7+"? activeClass : inactiveClass} `} onClick={()=>setRatingFilter("7+")}>7+</button>
            </div>
        </div>

        <h2 className="m-6 md:text-3xl text-white text-2xl font-medium text-center">Search Results ({filtered.length} movies)</h2>
        <div className="w-full space-y-2 space-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-5xl md:mx-auto">
            {filtered.length === 0 ? (
                    <p className="text-gray-400 text-center py-8 md:text-xl">No movies found</p>
            ):(
                filtered.map(movie =>( 
                <div key={movie.id} className="w-full md:w-auto flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg text-white">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p>Rating: {movie.rating} | Genre: {movie.genre} | Year: {movie.year}</p>
                <button 
                    className={`w-1/2 py-2 rounded-lg font-semibold transition ${
                    isInWatchlist(movie.id) 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                    onClick={() => {
                        if (!isInWatchlist(movie.id)) {
                              setWatchlist([...watchlist, movie]);
                        }
                     }}
                    disabled={isInWatchlist(movie.id)}
                >
                    {isInWatchlist(movie.id) ? "Added ✓" : "Add to Watchlist"}
                </button>

                </div>
                ))
            )

            }
        </div>
        
        <h2 className="m-6 text-white text-2xl font-medium text-center">My Watchlist ({watchlist.length} movies)</h2>
        <div className="w-full md:max-w-2xl md:mx-auto space-y-2">
            {  watchlist.length === 0 ? (
                <p className="text-gray-400 text-center py-8 md:text-xl">Nothing yet!</p>
            ) :
            ( watchlist.map(movie =>( 
                <div key={movie.id} className="flex flex-col justify-center items-center bg-gray-800 p-4 rounded-lg text-white space-y-2">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p>Rating: {movie.rating} | Genre: {movie.genre} | Year: {movie.year}</p>
                <button 
                className="w-fit bg-red-500 px-4 py-2 rounded-lg font-medium"
                onClick={()=> setWatchlist(watchlist.filter(film => movie.id !== film.id))}
                >Remove</button>
                </div>
                )))
                }
        </div>

      
    </div>
)
}
