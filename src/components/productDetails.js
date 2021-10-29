import React from 'react'

export const ProductDetails = ({ productDetails }) => {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={productDetails[0].image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{productDetails[0].name}</h5>
                            <h2 className="card-text">{"₹" + productDetails[0].price}</h2>
                            <p className="card-text text-muted">{productDetails[0].description}</p>

                            <div className="card flexbox-container d-flex flex-row mb-3">
                                <img src="images/star.png" alt="..." height="22" width="22" className="me-1"/>
                                <p>4.5</p>
                            </div>
                            <button type="button" className="btn btn-primary me-3">ADD TO CART</button>
                            <button type="button" className="btn btn-success">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}