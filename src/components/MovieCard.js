import React, {useState, useEffect, useContext} from "react"
import { Context } from "../Context"

function MovieCard({movie: { Title, Poster, Year, imdbID }}) {
    

    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        getMovieData()
    }, [])

    function getMovieData() {
        (async () => {
            const url = `https://pure-beach-51673.herokuapp.com/api/movie/omdbapi?i=${imdbID}&plot=short`
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
    const genreDisplay = movieData.Genre && movieData.Genre.split(", ").map(genre => 
        <span className="movie-genre">{genre}</span>
        )

    return (

        <div className="movie-card">
            <img className="movie-poster" src={Poster} alt=""></img>
            <div className="card-content">
                <h2 className="movie-title">{Title}</h2>
                <p className="movie-release-date">Release date: {movieData.Released}</p>
                <p className="movie-plot">{movieData.Plot}</p>
                <div>Genres: {genreDisplay}</div>
            </div>
        </div>
    )
}

export default MovieCard