import React, { useEffect, useState } from "react"
import './favorites.css'
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function Favorites() {

    const [movie, setMovie] = useState([])

    useEffect(() => {

        const favorites = JSON.parse(localStorage.getItem('@movies')) || []

        setMovie(favorites)

    }, [])

    function removeMovie(id) {

        let movies = movie.filter(item => item.id !== id)

        setMovie(movies)

        localStorage.setItem('@movies', JSON.stringify(movies))

        toast.success("Filme deletado")
    }

    return (
        <div
            className="containerfav"
        >

            <h1>
                Meus filmes
            </h1>

            {
                movie.length === 0 &&
                <span>
                    Voce não possui filmes salvos...
                </span>
            }

            <ul>
                {
                    movie.map((item) => {
                        return (
                            <li

                                key={item.id}
                            >
                                <span>
                                    {item.title}
                                </span>
                                <div

                                >
                                    <Link
                                        to={`/details/${item.id}`}
                                    >
                                        Ver detalhes
                                    </Link>
                                    <a onClick={() => removeMovie(item.id)}>
                                        Deletar
                                    </a>
                                </div>
                            </li>

                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}
