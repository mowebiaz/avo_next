import { getWeeks } from '../../lib/firebase/firestore'
import { addDaysToDate } from '../../lib/utils/date'
import './PriceTable.scss'

export async function getServerSideProps() {
  const weeks = await getWeeks(); // Récupère les données Firestore en temps réel
  return {
    props: { weeks }, // Passe les données en tant que props à ton composant
  };
}

export function PriceTable({weeks}) {
  /*const weeks = await getWeeks()*/
  return (
    <div>
      <h3>Hiver 2024-2025</h3>
      <div className="legend">
        <div className="legend-item">
          <span className="square free"></span>
          <p>disponible</p>
        </div>
        <div className="legend-item">
          <span className="square booked"></span>
          <p>déjà réservée</p>
        </div>
      </div>
      <table className="price-table">
        <thead>
          <tr>
            {['Arrivée', 'Départ', 'Prix'].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr
              key={week.id}
              className={week.dispo ? '' : 'booked'}
            >
              <td>
                {week.entryDate.toDate().toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                })}
              </td>
              <td>{addDaysToDate(week.entryDate.toDate())}</td>
              <td>{week.price}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
