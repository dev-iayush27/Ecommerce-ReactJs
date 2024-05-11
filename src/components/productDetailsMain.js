import React, { useState, useEffect } from 'react'
import { ProductDetails } from './productDetails'
import { ProductReviews } from './productReviews'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const client = axios.create({
    baseURL: "https://ecommerce-api-ao7g.onrender.com/api/v1"
})

export function ProductDetailsMain() {
    let uselocation = useLocation()
    console.log(uselocation.pathname.split('/')[2])
    let productId = uselocation.pathname.split('/')[2]

    const [productDetails, setProductDetails] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        client
            .get(`/product/${productId}`)
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