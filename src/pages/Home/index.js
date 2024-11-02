import React, { useEffect, useState } from "react"
import movieApi from "../../services/api/api"
import Movies from "../../components/Movies"
import './home.css'

export default function Home() {

    const keyApi = "775dd640caca35f6a950e6c32a2629f7"
    const [page, setPage] = useState(1)
    const [listMovies, setlistMovies] = useState([])
    const [loadingMovies, setLoadingMovies] = useState(true)

    useEffect(() => {

        async function loadMovies() {

            const response = await movieApi.get('discover/movie', {
                params: {
                    include_adult: true,
                    language: 'pt-br',
                    page: page,
                    sort_by: 'popularity.des',
                    api_key: keyApi
                },

            })
            const data = response.data.results
            setlistMovies(data)
            setLoadingMovies(false)

        }

        loadMovies()


    }, [])

    if (loadingMovies) {
        return (
            <div
                className="loadingMovies"
            >
                <h2>
                    Carregando...
                </h2>
            </div>
        )
    }

    return <Movies data={listMovies} />


}