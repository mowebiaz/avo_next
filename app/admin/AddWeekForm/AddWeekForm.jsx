import { useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Timestamp } from 'firebase/firestore'
import { addMultipleWeeks } from '@/app/lib/firebase/firestore'
import { IoMdAddCircle } from "react-icons/io";
import './AddWeekForm.scss'

export function AddWeekForm() {
  const formRef = useRef(null)
  const btnFormRef = useRef(null)

  const handleClick = () => {
    formRef.current.style.display = 'flex'
    btnFormRef.current.style.display = 'none'
  }

  const {
    control,
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubtmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      newWeek: [{ entryDate: '', dispo: false, price: '' }],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'newWeek',
  })

  const onSubmit = async (data) => {
    // transform data to List
    const weeksList = data.newWeek
    // Format list for firestore
    const formatedWeeksList = weeksList.map((week) => ({
      ...week,
      entryDate: Timestamp.fromDate(new Date(week.entryDate)),
      price: Number(week.price),
    }))
    try {
      await addMultipleWeeks(formatedWeeksList)
      formRef.current.style.display = 'none'
      btnFormRef.current.style.display = 'flex'
            /*      si succès (isSubmitSuccessful)
      afficher un message de confirmation*/
    } catch (error) {
      console.log(error)
            /*si echec, afficher un message d'erreur */
    }
  }

  return (
    <>
      <div ref={btnFormRef}>
        <button onClick={handleClick}>Ajouter une semaine</button>
      </div>
      <div
        ref={formRef}
        className="div-form"
        style={{ display: 'none' }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="new-week"
            >
              <div>
                {/* mettre htmlfor, id... ? */}
                <label>Date d&apos;arrivée:</label>
                <input
                  type="date"
                  {...register(`newWeek.${index}.entryDate`, {
                    required: 'Veuillez renseigner la date',
                  })}
                />
                {errors?.newWeek?.[index]?.newEntryDay && (
                  <p>{errors.newWeek[index].newEntryDay.message}</p>
                )}
              </div>

              <div>
                <label>Disponible ?:</label>
                <input
                  type="checkbox"
                  {...register(`newWeek.${index}.dispo`)}
                />
              </div>

              <div>
                <label>Prix (€):</label>
                <input
                  type="number"
                  {...register(`newWeek.${index}.price`, {
                    required: 'Veuillez renseigner le prix',
                  })}
                />
                {errors?.newWeek?.[index]?.newPrice && (
                  <p>{errors.newWeek[index].newPrice.message}</p>
                )}
              </div>
            </div>
          ))}

          <button
            type="button"
            className='btn-add'
            disabled={isSubtmitting}
            onClick={() => append({ entryDate: '', dispo: false, price: '' })}
          >
            <IoMdAddCircle />
          </button>
          <button
            type="submit"
            disabled={isSubtmitting}
          >
            {/* revoir l'état du bouton */}
            {isSubtmitting ? 'loader' : 'Envoyer'}
          </button>
          {}
        </form>
      </div>
    </>
  )
}
