'use client'

import { ButtonLink } from '../../components/ButtonLink/ButtonLink'
import { Carousel } from '../../components/Carousel/Carousel'
import { slides } from '../../lib/slides'
import './StudioContent.scss'

const equipmentsList = [
  'wifi gratuit',
  'télévision',
  'lecteur DVD',
  'cafetière',
  'plaque vitrocéramique',
  'frigo',
  'grille-pain',
  'service à raclette',
  'bouilloire',
  'sèche-cheveux',
  'aspirateur',
]



export function StudioContent() {
  return (
    <div className="studio-content">
      <h1>Studio à louer à Avoriaz - Confort et proximité des pistes</h1>
      <p>
        Notre studio à Avoriaz est parfait pour vos vacances en montagne. Situé
        au pied des pistes, il vous permet de profiter pleinement de la station.
        Que vous veniez en famille ou entre amis, ce logement tout équipé vous
        garantit confort et praticité tout au long de votre séjour.
      </p>
      <section>
        <h2>Localisation idéale à Avoriaz</h2>
        <p>
          Notre studio se situe au bas de la station et au pied des pistes, au
          sein de la résidence <strong>Pas Du Lac</strong>. Il est proche du 3S
          (téléphérique des Prodains) et des remontées mécaniques (Tour, Stade,
          Lac Intrets). Nous sommes situés dans un quartier calme (les
          Hauts-Forts), à 450m du centre et du{' '}
          <a className='link'
            href="https://www.village-des-enfants.com/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            village des enfants
          </a>
          . Deux entrées sont possibles dans la résidence: au 10<sup>ème</sup>{' '}
          pour un accès à l&apos;ascenseur public et le centre station, ou au
          RdC pour un accès direct aux pistes.
        </p>
        {/*         TODO: photo le pas du lac
         */}
        <ButtonLink href="/acces#studio">Comment accéder au studio ?</ButtonLink>
        {/*       TODO: Localisation interactive
         */}
      </section>
      <section className="equipments">
        <h2>Un studio tout équipé pour un séjour confortable</h2>
        <p>
          C&apos;est un studio 3/4 personnes, au 3<sup>ème</sup> étage avec
          ascenseur. Il bénéficie d&apos;un <strong>balcon</strong> exposé
          Sud-Est, avec vue sur le lac d&apos;Avoriaz et les Hauts-Forts.
        </p>
        <ul className="equipments-list">
          <li>
            <strong>casier à ski</strong>
          </li>
          <li>entrée avec placards</li>
          <li>salle de bain avec baignoire et WC (nombreux rangements)</li>
          <li>cuisine équipée</li>
          <li>séjour avec 2 clic-clac</li>
        </ul>
        <ul className="equipments-badgelist">
          {equipmentsList.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
         <Carousel slides={slides}/>
     </section>
      <section className="pricing">
        <h2>Disponibilités et tarifs</h2>
        <p>
          <a href="/disponibilites-tarifs.html">
            Consultez les disponibilités et tarifs du studio
          </a>
          .
        </p>
      </section>
      {/*       TODO: slider
       */}{' '}
    </div>
  )
}
