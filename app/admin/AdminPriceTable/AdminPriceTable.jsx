'use client'

import { useEffect, useState } from 'react'
import { addDaysToDate } from '../../lib/utils/date'
import { db } from '@/app/lib/firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { updateDispo } from '@/app/lib/firebase/firestore'
import { ButtonSwitch } from '@/app/components/ButtonSwitch/ButtonSwitch'

export function AdminPriceTable() {
  const [weekList, setWeekList] = useState([])

  useEffect(() => {
    const fetchWeekList = async () => {
      const weeksCollection = collection(db, 'weeks')
      const weeksSnapshot = await getDocs(weeksCollection)
      const data = weeksSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setWeekList(data)
    }
    fetchWeekList()
  }, [])

  const toggleDispo = (id, newDispo) => {
    updateDispo(id, newDispo)
    setWeekList((prevWeekList) =>
      prevWeekList.map((week) => {
        if (week.id === id) {
          return { ...week, dispo: newDispo }
        }
        return week
      })
    )
  }

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

              <td>
                <ButtonSwitch
                  id={'btn-dispo-' + week.id}
                  isChecked={week.dispo}
                  onToggle={(newDispo) => toggleDispo(week.id, newDispo)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
