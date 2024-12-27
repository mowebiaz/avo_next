import { db } from './config'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'

export async function getWeeks() {
  const weeksCollection = collection(db, 'weeks')
  const weeksSnapshot = await getDocs(weeksCollection)
  const weeks = weeksSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
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