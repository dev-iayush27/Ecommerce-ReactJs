import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="text-muted">&copy; 2021 Ayush Gupta, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><Link className="text-muted" to="/"><img src="images/insta.png" className="bi" width="30" height="30" /></Link></li>
                        <li className="ms-3"><Link className="text-muted" to="/"><img src="images/fb.png" className="bi" width="30" height="30" /></Link></li>
                        <li className="ms-3"><Link className="text-muted" to="/"><img src="images/youtube.png" className="bi" width="30" height="30" /></Link></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}