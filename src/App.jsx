import { useState } from "react";

export default function App(){
const [list] = useState([]);
const [name, setName] = useState("");
const [watchlist, setWatchlist] = useState([]);
const [ratingFilter, setRatingFilter] = useState("");
const [genreFilter, setGenreFilter] = useState("");
console.log(name);

return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-t from-gray-800 to-gray-700">
        
            <header className="">
                  <h1 className="p-2 my-6 text-3xl rounded-lg text-gray-950 text-center font-semibold font-sans">Movie Search</h1>
            </header>

        <form className="bg-gray-800 pt-6 px-3 pb-2 mx-auto my-4 rounded-lg flex">
            <label htmlFor="movieName"></label>
            <input value={name}
                   onChange={(e)  => setName(e.target.value)}
                   className="w-full bg-gray-800 p-2 h-14 border-none outline-none text-gray-100 rounded-sm" type="search" id="movieName" name="query" placeholder="Enter search terms..." autoFocus required/>
            <button onClick={() => setName(name)}
                    type="submit">🔍</button>
        </form>



      
    </div>
)
}