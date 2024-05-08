import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="section-footer border-top bg">
                <div className="container">
                    <section className="footer-top padding-y">
                        <div className="row">
                            <aside className="col-md-4">
                                <article className="me-3">
                                    <img src="images/logo.png" alt="" className="logo-footer" />
                                    <p className="mt-3">Some short text about company like You might remember the Dell computer commercials in which a youth reports this exciting news to his friends.</p>
                                    <div>
                                        <Link className="btn btn-icon btn-light me-2" title="Facebook" target="_blank" to="/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-icon btn-light me-2" title="Instagram" target="_blank" to="/"><i className="fab fa-instagram"></i></Link>
                                        <Link className="btn btn-icon btn-light me-2" title="Youtube" target="_blank" to="/"><i className="fab fa-youtube"></i></Link>
                                        <Link className="btn btn-icon btn-light" title="Twitter" target="_blank" to="/"><i className="fab fa-twitter"></i></Link>
                                    </div>
                                </article>
                            </aside>
                            <aside className="col-sm-3 col-md-2">
                                <h6 className="title">About</h6>
                                <ul className="list-unstyled">
                                    <li> <Link to="/">About us</Link></li>
                                    <li> <Link to="/">Services</Link></li>
                                    <li> <Link to="/">Rules and terms</Link></li>
                                    <li> <Link to="/">Blogs</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-sm-3 col-md-2">
                                <h6 className="title">Services</h6>
                                <ul className="list-unstyled">
                                    <li> <Link to="/">Help center</Link></li>
                                    <li> <Link to="/">Money refund</Link></li>
                                    <li> <Link to="/">Terms and Policy</Link></li>
                                    <li> <Link to="/">Open dispute</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-sm-3  col-md-2">
                                <h6 className="title">For users</h6>
                                <ul className="list-unstyled">
                                    <li> <Link to="/"> User Login </Link></li>
                                    <li> <Link to="/"> User register </Link></li>
                                    <li> <Link to="/"> Account Setting </Link></li>
                                    <li> <Link to="/"> My Orders </Link></li>
                                    <li> <Link to="/"> My Wishlist </Link></li>
                                </ul>
                            </aside>
                            <aside className="col-sm-2  col-md-2">
                                <h6 className="title">Our app</h6>
                                <Link to="/" className="d-block mb-2"><img src="images/appstore.png" alt="" height="40" /></Link>
                                <Link to="/" className="d-block mb-2"><img src="images/playmarket.png" alt="" height="40" /></Link>
                            </aside>
                        </div>
                    </section>

                    <section className="footer-copyright border-top">
                        <p target="_blank" className="float-end text-muted">
                            <Link to="/" className="me-3">Privacy & Cookies</Link>
                            <Link to="/">Accessibility</Link>
                        </p>
                        <p className="text-muted"> &copy; 2020 Company  All rights resetved </p>

                    </section>
                </div>
            </footer>
        </>
    )
}