import React from 'react'

export const ProductDetails = ({ productDetails }) => {

    const { name, price, description, ratings, images, category, seller, stock, numberOfReviews } = productDetails

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="row no-gutters">
                        <aside className="col-md-5">
                            <article className="gallery-wrap">
                                <div className="img-big-wrap">
                                    <img src={images[0].url} alt="" />
                                </div>
                                <div className="thumbs-wrap">
                                    {images.map(item => {
                                        const { url } = item
                                        return (
                                            <>
                                                <img src={url} alt="" className="item-thumb" />
                                            </>
                                        )
                                    })}
                                </div>
                            </article>
                        </aside>
                        <main className="col-md-7 border-start">
                            <article className="content-body">

                                <h2 className="title">{name}</h2>
                                <p className="text-muted">{category}</p>

                                <div className="rating-wrap my-3">
                                    <ul className="rating-stars">
                                        <li style={{ width: `${(ratings / 5) * 100}%` }} className="stars-active">
                                            <img src="images/icons/stars-active.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="images/icons/starts-disable.svg" alt="" />
                                        </li>
                                    </ul>
                                    <small className="label-rating text-muted">({numberOfReviews} Reviews)</small>
                                    {/* <small className="label-rating text-success me-2"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
                                <Link to="/" className="btn-link me-3 text-muted">
                                    <i className="fa fa-heart me-1"></i>Save for later</Link> */}
                                </div>

                                <div className="d-flex flex-row mb-3">
                                    <h3 className="price">₹{price}</h3>
                                    {/* <p className="price text-muted mx-2"><s>₹1000</s></p>
                                <p className="text-success">60% off</p> */}
                                </div>

                                <hr />

                                <div className="row mb-3">
                                    <div className="form-group col-md">
                                        <h5>Quantity</h5>
                                        <div className="input-group input-spinner">
                                            <div className="input-group-append">
                                                <button className="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                            </div>
                                            <input type="text" className="form-control" value="1" />
                                            <div className="input-group-prepend">
                                                <button className="btn btn-light" type="button" id="button-plus"> + </button>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className={`fw-bold mt-4 ${stock > 0 ? 'text-success' : 'text-danger'}`}>{stock > 0 ? 'In Stock' : 'Out of Stock'}</h5>
                                </div>

                                <div className="mb-4">
                                    <button type="button" className={`btn btn-primary me-2 ${stock > 0 ? "" : "disabled"}`}>
                                        <span className="text">ADD TO CART</span> <i className="fas fa-shopping-cart"></i>
                                    </button>
                                    <button type="button" className={`btn btn-success me-2 ${stock > 0 ? "" : "disabled"}`}>
                                        <span className="text">BUY NOW</span> <i className="fas fa-credit-card"></i>
                                    </button>
                                </div>

                                <hr />

                                <h5 className="mt-4">Description:</h5>
                                <p className="text-muted">{description}</p>

                                <hr />

                                <div className="d-flex">
                                    <p>Seller: </p>
                                    <p className="fw-bold ms-2">{seller}</p>
                                </div>

                            </article>
                        </main>
                    </div>
                </div>

                <article className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <aside className="col-md-6">
                                <h5 className="mb-3">Parameters</h5>
                                <dl className="row">
                                    <dt className="col-sm-3">Display</dt>
                                    <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd>

                                    <dt className="col-sm-3">Processor</dt>
                                    <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>

                                    <dt className="col-sm-3">Camera</dt>
                                    <dd className="col-sm-9">720p FaceTime HD camera</dd>

                                    <dt className="col-sm-3">Memory</dt>
                                    <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>

                                    <dt className="col-sm-3">Graphics</dt>
                                    <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
                                </dl>
                            </aside>
                            <aside className="col-md-6">
                                <h5 className="mb-3">Features</h5>
                                <ul className="list-check">
                                    <li>Best performance of battery</li>
                                    <li>5 years warranty for this product</li>
                                    <li>Amazing features and high quality</li>
                                    <li>Best performance of battery</li>
                                    <li>5 years warranty for this product</li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}