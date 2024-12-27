import { getWeeks } from '../../lib/firebase/firestore'
import { addDaysToDate } from '../../lib/utils/date'
import './PriceTable.scss'

export async function PriceTable() {
  const weeks = await getWeeks()
  return (
    <div >
      <table className="price-table">
        <thead>
          <tr colspan="3">Hiver 2024-2025</tr>
          <tr>
            <th>Arrivée</th>
            <th>Départ</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={week.id}>
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
