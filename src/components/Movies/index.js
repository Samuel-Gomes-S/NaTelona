import React from "react";
import './movie.css'
import { Link } from "react-router-dom";
export default function Movies({ data }) {


    return (
        <div
            className="movieContainer"
        >
            {
                data.map((movie) => {
                    return (
                        <div
                            className="movieContent"
                            key={movie.id}
                        >
                            {/* Titulo do filme */}
                            <strong
                                id="movieTitle"
                            >
                                {movie.title}
                            </strong>
                            <hr />
                            {/* Imagem do filme */}
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                className="movieImg"
                                alt={movie.title}
                            />
                            <hr />

                            {/* Botão para acessar detalhes do filme */}
                            <Link
                                id="btnDetail"
                                to={`/details/${movie.id}`}
                            >
                                Acessar
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}