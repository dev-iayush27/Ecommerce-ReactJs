import React from 'react'

export const ProductReviews = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <header className="section-heading">
                        <h3>Customer Reviews</h3>
                        <div className="rating-wrap">
                            <ul className="rating-stars stars-lg">
                                <li style={{ width: '80%' }} className="stars-active">
                                    <img src="images/icons/stars-active.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/icons/starts-disable.svg" alt="" />
                                </li>
                            </ul>
                            <strong className="label-rating text-lg"> 4.5 <span className="text-muted">| 112 reviews</span></strong>
                        </div>
                    </header>

                    <article className="box mb-3">
                        <div className="icontext w-100">
                            <img src="images/avatars/avatar1.jpg" alt="" className="img-xs icon rounded-circle" />
                            <div className="text">

                                <span className="date text-muted float-md-end">24.04.2020</span>
                                <h6 className="mb-1">Mike John</h6>

                                <ul className="rating-stars">
                                    <li style={{ width: '80%' }} className="stars-active">
                                        <img src="images/icons/stars-active.svg" alt="" />
                                    </li>
                                    <li>
                                        <img src="images/icons/starts-disable.svg" alt="" />
                                    </li>
                                </ul>
                                <span className="label-rating text-success">Good</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p>
                                Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </p>
                        </div>
                    </article>

                </div>
            </div>
        </>
    )
}