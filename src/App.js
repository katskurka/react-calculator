import './App.css';
import React, { useState } from 'react'
import Title from './components/title'
import Operand from './components/operand'
import Firstbox from './components/firstbox'
import Secondbox from './components/secondbox'
import Eval from './components/eval'
import Resultbox from './components/resultbox'

function App() {
  return (
    <>
    <Title />
    <Firstbox />
    <Operand />
    <Secondbox />
    <Eval />
    <Resultbox />
    </>
  )
}

export default App;
