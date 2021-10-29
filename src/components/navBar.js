import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style.css"

export const NavBar = ({ filterItem, categories }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={() => filterItem("")}>Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.map(item => {
                                        return (
                                            <>
                                                <li><Link className="dropdown-item" to="/product" onClick={() => filterItem(item)}>{item}</Link></li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success ms-2" type="button">Search</button>

                        <button className="btn btn-outline-primary ms-2" type="button">Login</button>
                        <button className="btn btn-outline-warning ms-2" type="button">Cart</button>
                    </div>
                </div>
            </nav>
        </>
    )
}