import React, {useState, useEffect, useContext} from "react"
import { Context } from "../Context"

function MovieCard({movie: { Title, Poster, Year, imdbID }}) {
    

    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        getMovieData()
    }, [])

    function getMovieData() {
        (async () => {
            const url = `http://localhost:5001/api/movie/omdbapi/id/?i=${imdbID}&plot=full`
            try {
                const res = await fetch(url)
                const data = await res.json()
                setMovieData(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }
    console.log(movieData)

    return (

        <div className="movie-card">
            <img className="movie-poster" src={Poster} alt=""></img>
            <div className="card-content">
                <h2 className="movie-title">{Title}</h2>
                <p className="movie-year">Release Year: {Year}</p>
            </div>
        </div>
    )
}

export default MovieCard