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
            <div className="movie-title">
                <p>{Title}</p>
            </div>
            <div className="movie-year">
                <p>{Year}</p>
            </div>
            <div className="movie-poster">
                <img src={Poster} alt=""></img>
            </div>
        </div>
    )
}

export default MovieCard