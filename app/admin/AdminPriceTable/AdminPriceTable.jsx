'use client'

import { use, useState } from "react"

export function AdminPriceTable() {
  const [weekList, setWeekList] = useState([])

  useEffect(() => {

  }, [])

  return (
    <div className="price-table">
      <table>
        <thead>
          <tr>
            <th>Arrivée</th>
            <th>Départ</th>
            <th>Prix</th>
            <th>Disponibilité</th>
          </tr>
        </thead>
        <tbody>
          {weekList.map((week) => (
            <tr key={week.id}>
              <td>
                {week.entryDate.toDate().toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </td>
              <td>{addDaysToDate(week.entryDate.toDate())}</td>
              <td>{week.price}</td>
              <td>{week.dispo ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
