import React from 'react'
import { Link } from "react-router-dom"

export const ProductCard = ({ productData }) => {
    return (
        <>
            <div className="row">
                {productData.map(item => {
                    const { id, category, name, price, image } = item
                    return (
                        <>
                            <div className="card col-md-3" key={id}>
                                <img src={image} className="rounded mt-2" alt="..." height="150" />
                                <div className="card-body">
                                    <Link to="/productDetails">
                                        <h6 className="card-title">{name}</h6>
                                    </Link>
                                    <p className="card-subtitle text-muted">{category}</p>
                                    <h5 className="mt-2">{"₹" + price}</h5>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
