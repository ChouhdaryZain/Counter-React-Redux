import React from 'react'
import { useSelector } from 'react-redux'

const CounterScore = () => {
  const counter = useSelector(store=>store.counter);
  return (
    <p className="lead mb-4">Counter Current Score is: {counter}</p>
  )
}

export default CounterScore