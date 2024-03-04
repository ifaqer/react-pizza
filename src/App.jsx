import React from 'react'
import {Routes, Route} from "react-router-dom"
import './scss/app.scss'
// rafc - создать быстро компонент!
// CTRl + / = комментарий
import Header from './components/Header'
import Home from './pages/Home'
import Cart from "./pages/Cart"
import NotFound from './pages/NotFound'

export const SearchContext = React.createContext('')

export default function App() {
  const [search, setSearch] = React.useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{search, setSearch}}>
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

