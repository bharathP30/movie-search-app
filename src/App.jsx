import { useState } from "react";

export default function App(){
const [list] = useState([]);
const [name, setName] = useState("");
const [watchlist, setWatchlist] = useState([]);
const [rfilter, setRfilter] = useState("");
const [gfilter,setGfilter] = useState("");

return (
    <div>
        <header>
            <h1>Movie Search</h1>
        </header>

        
    </div>
)
}