import React, { useState } from 'react'

const Operand = () => {
  const [selection, setSelection] = useState('+')

  return (
    <>
    <select value={selection} onChange={event => setSelection(event.target.value)} className="operand">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    </>
  )
}

export default Operand