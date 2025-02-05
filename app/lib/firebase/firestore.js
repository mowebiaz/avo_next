import { db } from './config'
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  writeBatch,
  query,
  orderBy,
  where,
} from 'firebase/firestore'

export async function getWeeks() {
  const weeksCollection = collection(db, 'weeks')
  const q = query(weeksCollection, orderBy('entryDate', 'asc'))
  const weeksSnapshot = await getDocs(q);
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

export async function checkIfWeekExists(entryDate) {
  try {
    const weeksRef = collection(db, 'weeks')
    const weekQuery = query(
      weeksRef,
      where('entryDate', '==', new Date(entryDate))
    )
    const querySnapshot = await getDocs(weekQuery)

    // Retourne `true` si la semaine existe déjà
    return !querySnapshot.empty
  } catch (error) {
    console.error('Erreur lors de la vérification de la semaine :', error)
    return false // En cas d'erreur, retourne `false` pour éviter de bloquer
  }
}

export async function addMultipleWeeks(weeksList) {
  const batch = writeBatch(db)

  weeksList.forEach((week) => {
    const weekData = { ...week }
    const collectionRef = doc(collection(db, 'weeks'))
    batch.set(collectionRef, weekData)
  })

  await batch.commit()
}

export async function deleteMutlipleWeeks(weeksListId) {
  const batch = writeBatch(db)

  weeksListId.forEach((id) => {
    const docRef = doc(db, 'weeks', id)
    batch.delete(docRef)
  })

  await batch.commit()
}
