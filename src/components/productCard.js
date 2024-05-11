import React from 'react'
import { Link } from "react-router-dom"

export function ProductCard(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {props.products.map((item, index) => {
                        const { _id, category, name, price, images, ratings } = item
                        return (
                                <div className="col-md-3" key={index}>
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <span className="topbar">
                                                <span className="badge bg-success"> NEW </span>
                                                {/* <Link to="/" className="float-end"><i className="fa fa-heart"></i></Link> */}
                                            </span>
                                            <img src={images[0].url} alt="" />
                                        </div>

                                        <figcaption className="info-wrap border-top">
                                            
                                            <Link className="title" to={`/product/${_id}`}>{name}</Link>

                                            <small className="text-muted">{category}</small>
                                            <div className="price-wrap mt-2">
                                                <span className="price me-2">{"₹" + price}</span>
                                                <del className="price-old">₹1400</del>
                                                <ul className="rating-stars float-end">
                                                    <li style={{ width: `${(ratings / 5) * 100}%` }} className="stars-active">
                                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
