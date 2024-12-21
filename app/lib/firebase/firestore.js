import { db } from './config'
import { collection, getDocs } from 'firebase/firestore'

export async function getWeeks() {
  const weeksCollection = collection(db, 'weeks')
  const weeksSnapshot = await getDocs(weeksCollection)
  const weeks = weeksSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
  return weeks
}