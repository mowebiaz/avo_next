import Image from 'next/image'
import { LinkAria } from '../../components/LinkAria/LinkAria'
import { TitleWithIcon } from '../../components/TitleWithIcon/TitleWithIcon'
import Summer from '../../../public/images/avoriaz-summer.webp'
import Winter from '../../../public/images/avoriaz-winter.webp'
import { TbSnowflake } from 'react-icons/tb'
import { IoIosSunny } from 'react-icons/io'
import './StationContent.scss'

export function StationContent() {
  return (
    <div className="station-content">
      <p>
        Située en plein cœur des Alpes, entre Mont-Blanc et Lac Léman, Avoriaz
        est une station de ski réputée pour ses paysages uniques et son
        architecture originale. Perchée à 1 800 mètres d&apos;altitude, elle
        offre un cadre idéal pour les amateurs de sports d&apos;hiver et de
        nature.
      </p>
      <p>
        Station sans voiture, vos enfants et vous profiterez de la station en
        toute sécurité.
      </p>
      <p>Toutes les activités liées à la montagne vous sont proposées.</p>
      <section>
        <TitleWithIcon
          icon={<TbSnowflake />}
          title={<h2>En hiver</h2>}
        />
        <p>
          En hiver, Avoriaz propose des activités pour tous les goûts : ski de
          piste, ski de randonnée, snowboard, randonnées en raquettes, scooter
          des neiges. Le domaine skiable franco-suisse des{' '}
          <LinkAria
            className="link"
            href={"https://www.portesdusoleil.com/"}
            target="_blank"
            referrerPolicy='no-opener no-referrer'
          >
            Portes du Soleil
          </LinkAria>
          , le plus grand domaine skiable des Alpes, offre 600 km de pistes pour
          des skieurs de tous niveaux, du débutant au confirmé. Plusieurs
          évènements ponctuent la saison comme le festival Rock the Pistes.
        </p>
      </section>
      <section>
        <TitleWithIcon
          icon={<IoIosSunny />}
          title={<h2>En Eté</h2>}
        />
        <p>
          VTT, via-ferrata, randonnée, parapente, rafting,{' '}
          <LinkAria
            className="link"
            href={"https://www.avoriaz.com/activites-ete/golf-d-avoriaz/golf/"}
            target="_blank"
            referrerPolicy='no-opener no-referrer'
          >
            golf
          </LinkAria>
          , tennis, pétanque.
        </p>
        <p>
          Plusieurs évènements ponctuent la saison comme le trail des
          Hauts-Forts ou le festival de danse...
        </p>
      </section>
      <div className="images">
        <div className="image-container">
          <Image
            className="image"
            src={Winter}
            alt="Vue panoramique de la station de ski d'Avoriaz en hiver"
            placeholder="blur"
            quality={100}
            fill
            priority
            sizes='(max-width: 920px) 100vw, 50vw'

          />
        </div>
        <div className="image-container">
          <Image
            className="image"
            src={Summer}
            alt="Vue panoramique de la station de ski d'Avoriaz en été"
            placeholder="blur"
            quality={100}
            fill
            priority
            sizes='(max-width: 920px) 100vw, 50vw'
          />
        </div>
      </div>
    </div>
  )
}
