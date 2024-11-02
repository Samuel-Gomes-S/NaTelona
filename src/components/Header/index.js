import React from "react";
import './header.css'
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header
            className="container"
        >
            {/* Titulo app */}

            <Link
                className="title"
                to="/"
            >
                Na telona
            </Link>

            {/* Link para favoritos */}

            < Link
                className="button"
                to="/favorites"
            >
                Meus filmes
            </Link>
        </header>

    )

}