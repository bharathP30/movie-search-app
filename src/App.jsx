import { useState } from "react";

export default function App(){
const [list] = useState([]);
const [name, setName] = useState("");
const [watchlist, setWatchlist] = useState([]);
const [ratingFilter, setRatingFilter] = useState("");
const [genreFilter, setGenreFilter] = useState("");

console.log(name);

const buttonClass = "px-4 bg-slate-600 focus:bg-slate-700 text-white rounded-full";


return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-t from-gray-800 to-gray-700">
        
            <header className="">
                  <h1 className="p-2 my-6 text-3xl rounded-lg text-gray-950 text-center font-semibold font-sans">Movie Search</h1>
            </header>

        <form onSubmit={(e)=>{ e.preventDefault(), setName(e.target.value)}}    className="bg-gray-800 pt-6 px-3 pb-2 mx-auto my-4 rounded-lg flex">
            <label htmlFor="movieName"></label>
            <input value={name}
                   onChange={(e)  => setName(e.target.value)}
                   className="w-full bg-gray-800 p-2 h-14 border-none outline-none text-gray-100 rounded-sm" type="search" id="movieName" name="query" placeholder="Enter search terms..." autoFocus required/>
            <button type="submit">🔍</button>
        </form>

        <div className="space-y-2 mx-2">
            <h2 className="text-gray-200 font-medium">Select Genre :</h2>
            <div className="flex gap-2 p-2 flex-wrap justify-right items-start rounded-lg w-fit outline-double  mx-auto">
            <button className={buttonClass} onClick={()=>setGenreFilter("All")}>All</button>
            <button className={buttonClass} onClick={()=>setGenreFilter("Sci-Fi")}>Sci-Fi</button>
            <button className={buttonClass} onClick={()=>setGenreFilter("Action")}>Action</button>
            <button className={buttonClass} onClick={()=>setGenreFilter("Drama")}>Drama</button>
            <button className={buttonClass} onClick={()=>setGenreFilter("Comedy")}>Comedy</button>
            </div>
             <h2 className="text-gray-200 font-medium">Select Rating :</h2>
            <div className="flex gap-4 p-2 justify-center items-center outline-double rounded-full w-fit">
            <button className={buttonClass} onClick={()=>setRatingFilter("9+")}>9+</button>
            <button className={buttonClass} onClick={()=>setRatingFilter("8+")}>8+</button>
            <button className={buttonClass} onClick={()=>setRatingFilter("7+")}>7+</button>
            </div>
        </div>

      
    </div>
)
}