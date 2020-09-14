import React, { useState, useContext } from 'react'
import { Context } from "./Context"

import "./App.css"
import MovieCard from "./components/MovieCard"
import sampleData from "./sampleData/sampleData"



function App() {
    
    const [searchValue, setSearchValue] = useState("")
    const [searchData, setSearchData] = useState(sampleData)

    
    function handleSubmit(e) {
        e.preventDefault()
        getMovies()
        setSearchValue("")
    }

    function getMovies() {
        (async () => {
            const search = searchValue.trim().replace(/\s+/g, "+")
            const url = `https://pure-beach-51673.herokuapp.com/api/movie/omdbapi?s=${search}`
            try {
                const res = await fetch(url)
                const data = await res.json()
                setSearchData(data)

            } catch (error) {
                console.log(error)
            }
        })()
    }

    function handleChange(e) {
        const {value} = e.target
        setSearchValue(value)
    }
   
    return (
        <div>
            
            <header>
                
                <div className="logo">A Movie App</div>
                
                <form className="input-group" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="search movie"
                        value={searchValue}
                        onChange={handleChange}
                    />
                    
                    <button
                        className="search-btn"
                    >
                        Search
                    </button>
                </form>
                
            </header>


            <div className="movie-card-container">
                {searchData.Response === "False" || searchData.Response === undefined ?
                    <h3>{searchData.Error}</h3> :
                    searchData.Search.map(movie => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                    />)
                    )
                }
            </div>

        </div>
    )
}

export default App
