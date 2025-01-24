'use client'

import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { IoMdCloseCircle } from 'react-icons/io'
import './ContactForm.scss'

export function ContactForm() {
  const formRef = useRef()
  const dialogRef = useRef(null)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()

  const openDialog = () => {
    dialogRef.current?.showModal()
  }

  const closeDialog = () => {
    dialogRef.current?.close()
    reset()
  }



  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      openDialog()

    } catch (error) {
      openDialog()

    }
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
      >
        <div>
          <label htmlFor="name">Nom *</label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            {...register('name', { required: 'Vous devez indiquer votre nom' })}
          />
          {errors.name && (
            <p className="message-error">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="reply_to"
            id="email"
            autoComplete="email"
            {...register('email', {
              required: 'Vous devez indiquer une adresse email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "L'email n'est pas valide",
              },
            })}
          />
          {errors.email && (
            <p className="message-error">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            id="message"
            {...register('message', {
              required: 'Vous devez indiquer un message',
            })}
          />
          {errors.message && (
            <p className="message-error">{errors.message.message}</p>
          )}
        </div>
        <div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="accepted"
              id="accepted"
              {...register('accepted', {
                required:
                  'Vous devez accepter la politique de confidentialité pour envoyer le formulaire',
              })}
            />
            <label
              htmlFor="accepted"
              className="checkbox"
            >
              J&apos;ai lu et j&apos;accepte la
              <Link
                href="/politique-de-confidentialite"
                className="link"
              >
                {' '}
                politique de confidentialité
              </Link>
            </label>
          </div>
            {errors.accepted && (
              <p className="message-error">{errors.accepted.message}</p>
            )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'loader' : 'Envoyer'}
        </button>
      <dialog ref={dialogRef} className='contact-dialog'>
        {isSubmitSuccessful ? (
          <p>Merci pour votre message. Nous vous répondrons dès que possible.</p>
        ) : (
          <p>Une erreur est survenue.</p>
        )}
        <button type='button' onClick={closeDialog}><IoMdCloseCircle/></button>
      </dialog>
      </form>
    </>
  )
}
