import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = ({ categories }) => {
    return (
        <>
            <header className="section-header bg mb-3">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-4">
                                <Link to="/" className="brand-wrap">
                                    <img className="logo" alt="" src="images/logo.png" />
                                </Link>
                            </div>
                            <div className="col-lg-6 col-sm-12 order-3 order-lg-2">
                                <form action="#" className="search">
                                    <div className="input-group w-100">

                                        <ul className="navbar-nav me-3 mb-2 mb-lg-0">
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Categories
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    {categories.map(item => {
                                                        return (
                                                            <>
                                                                <li><Link className="dropdown-item" to="/">{item}</Link></li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>

                                        <input type="text" className="form-control" style={{ width: '60%' }} placeholder="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
                                <div className="d-flex justify-content-end mb-3 mb-lg-0">
                                    <div className="widget-header">
                                        <small className="title text-muted">Welcome guest!</small>
                                        <div>
                                            <Link to="/">Sign in</Link> <span className="dark-transp"> | </span>
                                            <Link to="/"> Register</Link>
                                        </div>
                                    </div>
                                    <Link to="/" className="widget-header pl-3 ms-3">
                                        <div className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></div>
                                        <span className="badge badge-pill badge-danger notify">0</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}