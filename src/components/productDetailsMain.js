import React, { useState, useEffect } from 'react'
import { ProductDetails } from './productDetails'
import { ProductReviews } from './productReviews'
import axios from 'axios'

const client = axios.create({
    baseURL: "https://ecommerce-api-ao7g.onrender.com/api/v1"
})

export const ProductDetailsMain = ({ productId }) => {

    const [productDetails, setProductDetails] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        client
            .get('/product/6638e82e7f4fc603b4b53edc')
            .then((response) => {
                setProductDetails(response.data.product)
            })
            .catch(error => {
                setError(error)
            })
    }, [])

    if (error) {
        return (
            <>
                <h3>Error: {error.message}</h3>
            </>
        )
    }

    console.log(productDetails)

    if (!productDetails) {
        return null
    } else {
        return (
            <>
                <ProductDetails productDetails={productDetails} />
                <ProductReviews />
            </>
        )
    }
}