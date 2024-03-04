import React from 'react'
import Axios from "axios"

import Sorted from '../components/Sorted'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import {SearchContext} from "../App"

export default function Home(){

    const [enterCategories, setEnterCategories] = React.useState(0)
    const [enterSorted, setEnterSorted] = React.useState('rating')
    const {search, setSearch} = React.useContext(SearchContext)

    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const data = ( enterCategories ? `&category=` + enterCategories + `&sortby=` + enterSorted : `&sortby=` + enterSorted )
    const [pages, setPages] = React.useState(1)

    React.useEffect(()=>{
        setIsLoading(true)
        Axios.get(`https://65db02b53ea883a15290ffe7.mockapi.io/items?page=${pages}&limit=4` + data).then((obj)=>{
            setPizzas(obj.data)
            setIsLoading(false)
        })
    }, [enterCategories, enterSorted, pages])

  return (
    <>
    <div className="content__top">
        <Categories enterCategories={enterCategories} setEnterCategories={setEnterCategories}/>
        <Sorted setEnterSorted={setEnterSorted}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
    {
        isLoading ? [...new Array(4)].map((_, index)=><Skeleton key={index}/>) :
        (pizzas
            .filter((obj)=>{
                if(obj.title.toLowerCase().includes(search.toLowerCase())){
                    return true
                } else return false
            })
            .map((obj)=>(
            <PizzaBlock {...obj} key={obj.id}/>
        ))
        )
    }
    </div>
    <Pagination setPages={setPages}/>
    </>
  )
}