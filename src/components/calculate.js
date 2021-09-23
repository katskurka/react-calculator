import React, { useState } from 'react'

const Calculate = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')

  const magicmath = (num1, operator, num2) => {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let errorMessage = 'Enter Valid Numbers!'
  
    if ((Number(num1)) && (Number(num2))) {
      switch(operator){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return 'Invalid input'
      } 
    } else {
      alert(errorMessage)
    }
  }

  return (
    <>
    <div className="calculator">
      <input type="text" name="num1" onChange={event => setNum1(event.target.value)} value={num1} />
      <select name="operator" onChange={event => setOperator(event.target.value)} className="operator" value={operator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
      <input type="text" name="num2" onChange={event => setNum2(event.target.value)} value={num2} />
      <button onClick={event => setResult(magicmath(num1, operator, num2))}>=</button>
      <input type="text" onChange={event => setResult(event.target.value)} value={result} />
    </div>
    </>
  )
}

export default Calculate
