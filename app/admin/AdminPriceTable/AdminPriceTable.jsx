'use client'

import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { addDaysToDate } from '../../lib/utils/date'
import { db } from '@/app/lib/firebase/config'
import { deleteMutlipleWeeks, updateDispo } from '@/app/lib/firebase/firestore'
import { ButtonSwitch } from '@/app/components/ButtonSwitch/ButtonSwitch'
import { FaTrashAlt } from 'react-icons/fa'
import './AdminPriceTable.scss'

export function AdminPriceTable() {
  const [weekList, setWeekList] = useState([])
  const [weeksToDelete, setWeeksToDelete] = useState([])

  useEffect(() => {
    const weeksCollection = collection(db, 'weeks')

    const q = query(weeksCollection, orderBy('entryDate', 'asc'))

    // Real time listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setWeekList(data)
    })

    return () => unsubscribe()
  }, [])

  const toggleDispo = (id, newDispo) => {
    updateDispo(id, newDispo)
  }

  const handleCheck = (id) => {
    if (!weeksToDelete.includes(id)) {
      setWeeksToDelete((prevWeeksToDelete) => [...prevWeeksToDelete, id])
    } else {
      setWeeksToDelete((prevWeeksToDelete) =>
        prevWeeksToDelete.filter((weekId) => weekId !== id)
      )
    }
  }

  const deleteWeeks = async () => {
    try {
      await deleteMutlipleWeeks(weeksToDelete)
      setWeeksToDelete([])
    } catch (error) {
      console.log('erreur', error)
    }
  }

  return (
    <>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              {['Arrivée', 'Départ', 'Prix (€)', 'Dispo'].map(
                (header, index) => (
                  <th key={index}>{header}</th>
                )
              )}
              <th key="btn-delete">
                <button onClick={deleteWeeks} disabled={weeksToDelete.length === 0}>
                  <FaTrashAlt />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {weekList.map((week) => (
              <tr key={week.id}>
                <td>
                  {week.entryDate.toDate().toLocaleDateString('fr-FR', {
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
                <td>
                  <label htmlFor={'btn-delete-' + week.id}>
                    <input
                      type="checkbox"
                      name={'btn-delete-' + week.id}
                      id={'btn-delete-' + week.id}
                      onChange={() => handleCheck(week.id)}
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
