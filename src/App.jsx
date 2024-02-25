import React from 'react'
import './scss/app.scss'

import Header from './components/Header'
import Sorted from './components/Sorted'
import Categories from './components/Categories'
import pizzas from './assets/pizzas.json'
import PizzaBlock from './components/PizzaBlock'

// rafc - создать быстро компонент!

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
            {pizzas.map((obj, index)=>(
              <PizzaBlock {...obj} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

