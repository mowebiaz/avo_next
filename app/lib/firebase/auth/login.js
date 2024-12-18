import { auth } from '../config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
    console.log(error.message)
  }
}
