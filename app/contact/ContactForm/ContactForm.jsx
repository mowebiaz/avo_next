'use client'

import { useForm, ValidationError } from '@formspree/react'
import './ContactForm.scss'

export function ContactForm() {
  const [state, handleSubmit] = useForm('xkgonvap')

  if (state.succeeded) {
    return (
      <p>Merci pour votre message. Nous vous répondrons dès que possible</p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
    >
            <div>
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          type="text"
          name="name"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  )
}
