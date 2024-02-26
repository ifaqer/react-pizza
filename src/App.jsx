import React from 'react'
import './scss/app.scss'
// rafce - создать быстро компонент!
// CTRl + / = комментарий
import Header from './components/Header'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <Home/>
        </div>
      </div>
    </div>
  )
}

