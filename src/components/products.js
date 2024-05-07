import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductCard } from './productCard'

const client = axios.create({
    baseURL: "https://ecommerce-api-ao7g.onrender.com/api/v1"
})

export const Products = () => {

    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        client
            .get('/products')
            .then((response) => {
                console.log(response.data.data)
                setProducts(response.data.data)
            })
            .catch(error => {
                console.log(error)
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

    console.log(products)

    if (!products) {
        return null
    } else {
        return (
            <>
                <ProductCard products={products} />
            </>
        )
    }
}
