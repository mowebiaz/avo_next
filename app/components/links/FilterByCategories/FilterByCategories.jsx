'use client'

import { useState } from 'react'
import { FilterTag } from '../FilterTag/FilterTag'
import { LinksContainer } from '../LinksContainer/LinksContainer'

export function FilterByCategories() {
  const categoriesList = ['ski', 'trajets', 'sur place']
  const links = [
    {
      name: 'Avoriaz',
      link: 'https://www.avoriaz.com/',
      category: 'sur place',
    },
    {
      name: 'les Portes du Soleil',
      link: 'https://www.portesdusoleil.com/',
      category: 'sur place',
    },
    {
      name: 'ESF Avoriaz',
      link: 'https://www.esf-avoriaz.com/',
      category: 'ski',
    },
    {
      name: 'SERMA',
      link: 'https://www.skipass-avoriaz.com/',
      category: 'ski',
    },
    {
      name: 'les Snowparks',
      link: 'https://www.avoriaz.com/decouvrir/les-incontournables/snowparks/',
      category: 'ski',
    },
    {
      name: 'Golf',
      link: 'https://www.avoriaz.com/activites-ete/golf-d-avoriaz/golf/',
      category: 'sur place',
    },
    {
      name: 'Altibus',
      link: 'https://www.altibus.com/stations-desservies/morzine-avoriaz/',
      category: 'trajets',
    },
    {
      name: 'Le village des enfants',
      link: 'https://www.village-des-enfants.com/fr/',
      category: 'sur place',
    },
    {
      name: 'Aquariaz',
      link: 'https://www.avoriaz.com/activites-hiver/centre-aquatique/aquariaz/',
      category: 'sur place',
    },
    {
      name: 'Bowling',
      link: 'https://www.bowling-avoriaz.com/',
      category: 'sur place',
    },
    {
      name: 'Garderie',
      link: 'https://www.esf-avoriaz.com/tout-petits/garderie-avrizou/',
      category: 'sur place',
    },
    {
      name: 'Ferme de Seraussaix',
      link: 'https://www.lafermedeseraussaix.com/',
      category: 'sur place',
    },
    {
      name: 'Balade en traineaux',
      link: 'https://www.avoriaz.com/decouvrir/micro-aventure/huuue-cocher--/',
      category: 'sur place',
    },
    {
      name: 'Chiens de traîneaux',
      link: 'https://www.lapattenordic.fr/',
      category: 'sur place',
    },
    {
      name: 'Antoine Ski',
      link: 'https://www.antoine-ski.fr/',
      category: 'ski',
    },
    {
      name: 'Ski Land',
      link: 'https://www.skiset.com/station-ski/avoriaz/magasins/ski-land',
      category: 'ski',
    },
    {
      name: 'Ski Pass',
      link: 'https://www.skipass-avoriaz.com/',
      category: 'ski',
    },
    {
      name: 'Autocars Jacquet',
      link: 'https://jacquet-autocars.com/lignes-regulieres/',
      category: 'trajets',
    },
    {
      name: 'Swiss Tours',
      link: 'https://www.cham-transfers.com/EN/REGULAR-LINE/Geneva-Les-Prodains-(Regular-line)/Regular-Line/CT0140BT/easy-bus-transfers-regular-line-from-geneva-to-les-prodains-cheap-827.html',
      category: 'trajets',
    },
    {
      name: 'Parkings - haut',
      link: 'https://www.avoriazparkings.com/',
      category: 'trajets',
    },
    {
      name: 'Parking - bas',
      link: 'https://www.parkingmorzine.com/reservation-parking-prodains.php',
      category: 'trajets',
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
