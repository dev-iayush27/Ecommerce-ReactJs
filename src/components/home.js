import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
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
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>

          <Route exact path="/product">
            <Products />
          </Route>

          <Route exact path="/productDetailsMain">
            <ProductDetailsMain />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}