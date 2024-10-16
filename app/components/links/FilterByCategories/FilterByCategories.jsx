'use client'

import { useState } from "react"
import { FilterTag } from "../FilterTag/FilterTag"
import { CardsContainer } from "../CardsContainer/CardsContainer"


export function FilterByCategories() {
  const categoriesList = ['ski', 'trajets', 'sur place']
  const links = [
    { name: 'ESF Avoriaz', image: '', link: '', category: 'ski' },
    { name: 'SERMA', image: '', link: '', category: 'ski' },
    { name: 'Snowpark', image: '', link: '', category: 'ski' },
    { name: 'Golf', image: '', link: '', category: 'sur place' },
    { name: 'Bowling', image: '', link: '', category: 'sur place' },
    { name: 'Altibus', image: '', link: '', category: 'trajets' },
  ]

  const [selectedCategories, setSelectedCategories] = useState(categoriesList)

  function changeCategories(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  return (
    <>
    <FilterTag
      categoriesList={categoriesList}
      selectedCategories={selectedCategories}
      onChangeCategories={changeCategories}
    />
<CardsContainer
      links={links}
      selectedCategories={selectedCategories}
    />
    </>
  )


}
