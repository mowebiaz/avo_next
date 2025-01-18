'use client'

import { useState } from 'react'
import './ButtonSwitch.scss'

export function ButtonSwitch({ id, isChecked, onToggle }) {
  const handleCheck = () => {
    onToggle(!isChecked)
  }

  return (
    <label
      htmlFor={id}
      className="btn-switch"
    >
      <input
        type="checkbox"
        role="switch"
        name={id}
        id={id}
        checked={isChecked}
        onChange={handleCheck}
      />
      {isChecked ? (
        <span className="on">oui</span>
      ) : (
        <span className="off">non</span>
      )}
    </label>
  )
}
