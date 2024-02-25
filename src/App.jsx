import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Sorted from './components/Sorted'
import Categories from './components/Categories'
import PizzaBlock from './components/PizzaBlock'

export default function App() {
  return (
    <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories/>
            <Sorted/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock/>
          </div>
        </div>
      </div>
    </div>
  )
}

