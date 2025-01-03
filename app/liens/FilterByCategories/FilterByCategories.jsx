'use client'

import { useState } from 'react'
import { FilterTag } from '../FilterTag/FilterTag'
import { links } from '../links'
import { LinksContainer } from '../LinksContainer/LinksContainer'

export function FilterByCategories() {
  const categoriesList = ['ski', 'trajets', 'sur place']
  
  const [selectedCategories, setSelectedCategories] = useState(categoriesList)

  function changeCategories(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      )
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
      <LinksContainer
        links={links}
        selectedCategories={selectedCategories}
      />
    </>
  )
}
