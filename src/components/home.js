import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { NavBar } from './navBar'
import { Footer } from './footer'
import { Products } from './products'
import { Categories } from './productApi'
import { ProductDetailsMain } from './productDetailsMain'

export const Home = () => {

  var categories = Categories

  return (
    <>
      <Router>
        <NavBar categories={categories} />
        <Routes>
        <Route exact path="/" element={<Products />} />

        <Route exact path="/product" element={<Products />} />

        <Route exact path="/productDetailsMain" element={<ProductDetailsMain />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}