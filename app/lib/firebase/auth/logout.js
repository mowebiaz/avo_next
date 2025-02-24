import { signOut } from 'firebase/auth'
import { auth } from '../config'

export async function logout() {

  try {
    await signOut(auth)
  } catch (error) {
    throw new Error(error.message)
  }
}
