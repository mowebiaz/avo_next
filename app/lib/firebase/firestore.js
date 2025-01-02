import { db } from './config'
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  Timestamp,
  writeBatch,
} from 'firebase/firestore'

/* voir const unsubscribe */
export async function getWeeks() {
  const weeksCollection = collection(db, 'weeks')
  const weeksSnapshot = await getDocs(weeksCollection)
  const weeks = weeksSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return weeks
}

export async function updateDispo(id, newDispo) {
  try {
    const weekRef = doc(db, 'weeks', id)
    await updateDoc(weekRef, { dispo: newDispo })
  } catch (error) {
    console.error('Error updating document: ', error)
  }
}

/* export async function addMultipleWeeks(weeksList) {
  const batch = writeBatch(db)

  weeksList.forEach((week) => {
    const weekData = { ...week }
    const docRef = doc(collection(db, 'weeks'))
    batch.set(docRef, weekData)
    console.log(weekData)
  })

  await batch.commit()
} */

export async function addMultipleWeeks(weeksList) {
  const batch = writeBatch(db)

  weeksList.forEach((week) => {
    const weekData = {...week}
    const docRef = doc(collection(db, 'weeks'))
    batch.set(docRef, weekData)
    console.log('weekData',weekData)
  })

  await batch.commit()
}
