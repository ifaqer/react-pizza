import React from 'react'
import Axios from "axios"
import qs from "qs"
import { useNavigate } from 'react-router-dom'

import {useSelector, useDispatch} from "react-redux"
import {setCategoryId} from "../redux/slices/filterSlice"

import Sorted from '../components/Sorted'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import {SearchContext} from "../App"

export default function Home(){
    const {search, setSearch} = React.useContext(SearchContext)
    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const categoryId = useSelector((state)=>state.filter.categoryId)
    const enterSorted = useSelector((state)=>state.filter.sort.sortProperty)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const data = ( categoryId ? `&category=` + categoryId + `&sortby=` + enterSorted : `&sortby=` + enterSorted )
    const [pages, setPages] = React.useState(1)
    
    React.useEffect(()=>{
        if (window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            navigate(`${params}`)
            console.log(params)
        }
    }, [])

    React.useEffect(()=>{
        setIsLoading(true)
        Axios.get(`https://65db02b53ea883a15290ffe7.mockapi.io/items?page=${pages}&limit=4` + data).then((obj)=>{
            setPizzas(obj.data)
            setIsLoading(false)
        })
    }, [categoryId, enterSorted, pages])
    
    React.useEffect(()=>{
        const queryString = qs.stringify({
            sortProperty: enterSorted,
            categoryId: categoryId,
            pages: pages,
        })
        navigate(`?${queryString}`)
    }, [categoryId, enterSorted, pages])

  return (
    <>
    <div className="content__top">
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
        <Sorted/>
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