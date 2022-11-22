import React from 'react'

export default function Navbar() {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">Boxer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-2" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/"><strong>FEATURES</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/">PRICING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/">DOWNLOAD</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/">contact</a>
                            </li>
                             
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
