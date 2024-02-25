import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Sorted from './components/Sorted'
import Categories from './components/Categories'
import PizzaBlock from './components/PizzaBlock'

export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sorted/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock/>
          </div>
        </div>
      </div>
    </div>
  )
}

