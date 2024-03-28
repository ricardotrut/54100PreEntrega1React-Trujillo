import React from 'react'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <header>
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light borderAbajo">

            <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">
                    <img className="logo" src="/assets/img/guitarra-electrica.png" alt="Logo"/>
                    Ricardo Guitars
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active borderAbajo" aria-current="page" href="#">Guitarras</a>
                        </li>
                        <li className="nav-item linknav">
                            <a className="nav-link" href="#">Bajos</a>
                        </li>
                        <li className="nav-item linknav">
                            <a className="nav-link" href="#">Baterias</a>
                        </li>
                        <li className="nav-item linknav">
                            <a className="nav-link" href="#">Amplificadores</a>
                        </li>
                        <li className="nav-item linknav">
                            <a className="nav-link" href="#">Teclados</a>
                        </li>
                        <li>
                            <a href='#'><CartWidget/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
