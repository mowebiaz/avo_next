import { getWeeks } from '../../lib/firebase/firestore'
import { addDaysToDate } from '../../lib/utils/date'
import './PriceTable.scss'

export async function PriceTable() {
  const weeks = await getWeeks()
  return (
    <div>
      <table className="price-table">
          <caption>Hiver 2024-2025</caption>
        <thead>
{/*           <tr>
            <th colSpan={3}>Hiver 2024-2025</th>
          </tr> */}
          <tr>
            {['Arrivée', 'Départ', 'Prix'].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={week.id} className={week.dispo ? '' : 'booked'}>
              <td>
                {week.entryDate.toDate().toLocaleDateString('fr-FR', {
                  weekday: 'long',
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
