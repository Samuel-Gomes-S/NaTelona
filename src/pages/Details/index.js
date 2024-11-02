import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import movieApi from "../../services/api/api";
import './details.css'
import { toast } from "react-toastify";

export default function Details() {

    const { id } = useParams(); // pega o id do filme na rota
    const [movie, setMovie] = useState({})
    const [loadingMovies, setLoadingMovies] = useState(true)
    const keyApi = "775dd640caca35f6a950e6c32a2629f7"
    const navigate = useNavigate()

    useEffect(() => {

        async function loadMovie() {

            await movieApi.get(`movie/${id}`, {
                params: {
                    api_key: keyApi,
                    language: 'pt-br',
                }
            }).then((response) => {
                const data = response.data
                setMovie(data)
                setLoadingMovies(false)
            }).catch(() => {
                navigate('/', { replace: true })
            })

        }
        loadMovie()

    }, [id, navigate])

    function addFavorite() {
        let movieList = localStorage.getItem('@movies')
        let fav = JSON.parse(movieList) || []

        const hasMovie = fav.some((moviesFAV) => moviesFAV.id === movie.id)

        if (hasMovie) {
            toast.warn("Esse filme já se encontra na lista.")
            return
        }
        fav.push(movie)
        localStorage.setItem('@movies', JSON.stringify(fav))
        toast.success("Filme salvo..")

    }

    if (loadingMovies) {
        return (
            <div className="loadingMovies">
                <h2> Carregando...</h2>
            </div>
        )
    }

    return (

        <article
            className="containerDetails"
        >

            <h1>
                {movie.title}
            </h1>

            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                className="movieImg"
                alt={movie.title}
            />

            <h2>
                <strong>
                    Sinopse:
                </strong>
            </h2>
            <div
                id="overview"
            >
                {movie.overview}
            </div>
            <div
                id="infoAverage"
            >
                <strong>
                    Avaliação:
                </strong>
                {' ' + movie.vote_average} / 10
            </div>
            <div
                id="areaButtons"
            >
                <a onClick={() => addFavorite()}>
                    Salvar
                </a>
                <a
                    target="blank"
                    href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
                >
                    Trailer
                </a>
            </div>
        </article >

    )
}
