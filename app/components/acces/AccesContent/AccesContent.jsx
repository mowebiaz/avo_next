import { MapGoogle } from '../../mapGoogle/mapGoogle'
import { TitleWithIcon } from '../../TitleWithIcon/TitleWithIcon'
import { FaCar, FaPlaneDeparture } from 'react-icons/fa'
import { FaTrain, FaCableCar } from 'react-icons/fa6'
import { MdHomeWork } from 'react-icons/md'
import './AccesContent.scss'

export function AccesContent() {
  return (
    <>
      <p>
        Notre studio à Avoriaz est facilement accessible, que vous arriviez en
        voiture, en train, ou en bus. Découvrez les options pour rejoindre cette
        magnifique station de ski en Haute-Savoie, idéale pour un séjour en
        montagne sans stress.
      </p>
      <section>
        <h2 id="studio">Accéder au studio</h2>
        <p>
          Notre studio se trouve dans la résidence Pas du Lac (n°41 sur le plan
          de la station).
        </p>
        <MapGoogle/>
        {/*         google map studio
         */}
        <p>
          Avoriaz étant une station sans voiture, vous devrez vous garer et
          accéder au studio par d&apos;autres moyens de transport: à pied, en
          traineau ou chenillette.
        </p>

        <TitleWithIcon
          title={<h3>Arrivée par les Prodains</h3>}
          icon={<FaCableCar />}
        />
        <p>
          Se garer au &quot;parking longue durée&quot; des Prodains (parking
          découvert). Puis prendre le téléphérique des Prodains Express, qui
          permet de relier Morzine à Avoriaz en 4 min et évite la montée de la
          Route d&apos;Avoriaz. La gare d&apos;arrivée du téléphérique se situe
          près du studio (place Jean Vuarnet). Rejoindre ensuite le Pas du Lac à
          pied: entrée par le haut (10ème étage) ou par le bas (RdC, au niveau
          des pistes). Nous appeler à votre arrivée au Pas du Lac.
          {/*           Les Prodains sur google map:
           */}
        </p>
        <h4>Horaires et tarifs du téléphérique</h4>
        <div className="tables">
          <table className="timetable">
            <thead>
              <tr>
                <th colSpan={2}>Horaires Hiver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>8h00 - 21h00</td>
              </tr>
              <tr>
                <td>Mardi</td>
                <td>8h00 - 21h00</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>8h00 - 21h00</td>
              </tr>
              <tr>
                <td>Jeudi</td>
                <td>8h00 - 21h00</td>
              </tr>
              <tr>
                <td>Vendredi</td>
                <td>8h00 - minuit</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>8h00 - minuit</td>
              </tr>
              <tr>
                <td>Dimanche</td>
                <td>8h00 - 22h00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>
                    Rotation en continu jusqu&apos;à 19h30. Interruption entre
                    19h30 et 19h55, puis rotation toutes les 20 minutes.
                    <br />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={3}>Tarifs Hiver (€)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <strong>Aller simple</strong>
                </td>
                <td>
                  <strong>Aller retour</strong>
                </td>
              </tr>
              <tr>
                <td>
                  Adulte
                  <br />
                  <span className="definition">de 26 à 64 ans</span>
                </td>
                <td>8,60</td>
                <td>13,80</td>
              </tr>
              <tr>
                <td>
                  Enfant
                  <br />
                  <span className="definition">de 5 à 15 ans</span>
                </td>
                <td>6,20</td>
                <td>10,00</td>
              </tr>
              <tr>
                <td>
                  Jeunes
                  <br />
                  <span className="definition">de 16 à 25 ans</span>
                </td>
                <td>7,70</td>
                <td>12.40</td>
              </tr>
              <tr>
                <td>
                  Sénior
                  <br />
                  <span className="definition">65 ans et plus</span>
                </td>
                <td>7,70</td>
                <td>12.40</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tables">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Horaires Eté</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tous les jours</td>
                <td>
                  9h30 - 12h30
                  <br />
                  13h30 - 18h30
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>Rotation toutes les 30 minutes</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={3}>Tarifs Eté (€)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <strong>Aller simple</strong>
                </td>
                <td>
                  <strong>Aller retour</strong>
                </td>
              </tr>
              <tr>
                <td>
                  Adulte
                  <br />
                  <span className="definition">de 26 à 64 ans</span>
                </td>
                <td rowSpan={4}>6,70</td>
                <td rowSpan={4}>7,80</td>
              </tr>
              <tr>
                <td>
                  Enfant
                  <br />
                  <span className="definition">de 5 à 15 ans</span>
                </td>
              </tr>
              <tr>
                <td>
                  Jeunes
                  <br />
                  <span className="definition">de 16 à 25 ans</span>
                </td>
              </tr>
              <tr>
                <td>
                  Sénior
                  <br />
                  <span className="definition">65 ans et plus</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <TitleWithIcon
          title={<h3>Arrivée par l&apos;accueil station</h3>}
          icon={<MdHomeWork />}
        />
        <p>
          La Route d’Avoriaz vous emmène jusqu’à l&apos;accueil station, situé
          en haut d&apos;Avoriaz. A votre arrivée, dirigez-vous directement au
          quai de déchargement afin de décharger vos bagages, avant de vous
          garer dans l&apos;un des parkings couverts ou sur le parking
          extérieur. Puis prendre une chenillette (13,50€) ou un traîneau (14€)
          pour rejoindre le bas de la station, où se trouve notre studio.
        </p>
        {/*           L'accueil' sur google map:
         */}
        <h3>Les parkings</h3>
        <p>Les parkings sont gratuits en été.</p>
        <p>En hiver:</p>
        <ul>
          <li>
            Parking des Prodains: xx € la semaine.{' '}
            <a
              className="link"
              href="https://www.parkingmorzine.com/reservation-parking-prodains.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver
            </a>
          </li>
          <li>
            Parkings couverts: 100€ la semaine. Pas de réservation à moins de 3
            jours de l&apos;arrivée.{' '}
            <a
              className="link"
              href="https://www.avoriazparkings.com/reservation-parking.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver
            </a>
          </li>
          <li>
            Parking extérieur: 80€ la semaine. Pas de réservation.{' '}
            <a
              className="link"
              href="https://www.avoriazparkings.com/parking-exterieur-avoriaz.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2 id="station">Accéder à Avoriaz</h2>

        <TitleWithIcon
          title={<h3>Venir en voiture</h3>}
          icon={<FaCar />}
        />
        <ul>
          <li>En provenance du Nord de la France, passer par Dijon.</li>
          <li>En provenance du centre et de l&apos;ouest, passer par Lyon.</li>
          <li>En provenance du sud, passer par Valence puis Grenoble.</li>
          <li>
            Depuis l&apos;Alsace, passer par la Suisse, puis prendre la
            direction de Thonon Les Bains, puis Morzine-Avoriaz pour un trajet
            plus court !
          </li>
        </ul>
        <p>
          Rejoindre l&apos;A41, prendre la direction de Chamonix. Sortie n°18
          (Scionzier). Suivre ensuite les directions suivantes: direction
          Taninges, puis direction les Gets, Morzine et enfin Morzine-Les
          Prodains (téléphérique) ou Avoriaz (accueil station).
        </p>

        <TitleWithIcon
          title={<h3>Venir en train</h3>}
          icon={<FaTrain />}
        />
        <p>
          Gares TGV de Cluses, de Thonon les Bains ou{' '}
          <a
            className="link"
            href="https://www.sbb.ch/fr/informations-voyages/gares/trouver-gare/gare-de-geneve-cornavin.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            gare internationale de Genève
          </a>
          .
        </p>
        <p>Le TGV Lyria relie Paris à Genève en 3h11.</p>
        <p>
          La ligne Léman Express, RER transfrontalier, permet de rejoindre
          Cluses et Thonon-les-Bains rapidement depuis les gares de Genève,
          Bellegarde-sur-Valserine ou encore Annecy.
        </p>
        {/*         parler des bus
         */}

        <TitleWithIcon
          title={<h3>Venir en avion</h3>}
          icon={<FaPlaneDeparture />}
        />
        <p>
          Les compagnies Altibus / SAT, Swiss Tours ou Easybus vous transportent
          de l’
          <a
            className="link"
            href="https://www.gva.ch/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            aéroport international de Genève
          </a>{' '}
          à Avoriaz.
        </p>
      </section>
    </>
  )
}
