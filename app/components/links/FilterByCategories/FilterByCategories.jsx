'use client'

import { useState } from 'react'
import { FilterTag } from '../FilterTag/FilterTag'
import { LinksContainer } from '../LinksContainer/LinksContainer'

export function FilterByCategories() {
  const categoriesList = ['ski', 'trajets', 'sur place']
  const links = [
    { name: 'Avoriaz', link: 'https://www.avoriaz.com/', category: 'sur place' },
    { name: 'les Portes du Soleil', link: 'https://www.portesdusoleil.com/', category: 'sur place' },
    { name: 'ESF Avoriaz', link: 'https://www.esf-avoriaz.com/', category: 'ski' },
    { name: 'SERMA', link: 'https://www.skipass-avoriaz.com/', category: 'ski' },
    { name: 'les Snowparks', link: 'https://www.avoriaz.com/decouvrir/les-incontournables/snowparks/', category: 'ski' },
    { name: 'Golf', link: 'https://www.avoriaz.com/activites-ete/golf-d-avoriaz/golf/', category: 'sur place' },
    { name: 'Bowling', link: '', category: 'sur place' },
    { name: 'Altibus', link: '', category: 'trajets' },
    {
      name: 'Le village des enfants',
      link: 'https://www.village-des-enfants.com/fr/',
      category: 'sur place',
    },
  ]

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
