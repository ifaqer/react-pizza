import React from "react"

export default function Categories(){
  const [activeIndex, setActiveIndex] = React.useState(0)
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
                  onClick={()=>setActiveIndex(index)}
                  className={activeIndex == index ? "active" : ''}>
                  {title}
              </li>
            ))}
          </ul>
        </div>
    )
}