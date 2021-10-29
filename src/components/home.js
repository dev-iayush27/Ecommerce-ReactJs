import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { NavBar } from './navBar'
import { Footer } from './footer'
import { ProductCard } from './productCard'
import { ProductDetails } from './productDetails'
import { Categories, Products } from './productApi'

export const Home = () => {

  const [categories, setCategories] = useState(Categories)

  const [productData, setProductData] = useState(Products)

  const filterItem = (category) => {
    if (category === "") {
      setProductData(Products)
      return
    }
    const updatedList = Products.filter((item) => {
      return item.category === category
    })
    setProductData(updatedList)
  }

  return (
    <>
      <Router>
        <NavBar filterItem={filterItem} categories={categories} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <>
                  <ProductCard productData={productData} />
                </>)
            }}>
            </Route>
            
            <Route exact path="/product">
              <ProductCard productData={productData} />
            </Route>

            <Route exact path="/productDetails">
              <ProductDetails productDetails={productData}/>
            </Route>

          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  )
}