import React from "react"

export default function Categories({categoryId, onChangeCategory}){
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
  ]
    return(
        <div className="categories">
          <ul>
            {categories.map((title, index)=>(
              <li key={index}
                  onClick={()=>onChangeCategory(index)}
                  className={categoryId == index ? "active" : ''}>
                  {title}
              </li>
            ))}
          </ul>
        </div>
    )
}