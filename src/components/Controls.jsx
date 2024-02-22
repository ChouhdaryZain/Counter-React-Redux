import React from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  }

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <>
      <button
        onClick={handleIncrement}
        type="button" className="btn btn-primary btn-lg px-4 gap-3">+1</button>
      <button
        onClick={handleDecrement}
        type="button" className="btn btn-outline-secondary btn-lg px-4">-1</button>
    </>
  )
}

export default Controls