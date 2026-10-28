import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementValueByUserInput } from './redux/feature/CounterSlice';

const App = () => {

  const data = useSelector(state=>state.count.value)
  console.log(data)

  const dispatch=useDispatch()

  const handleIncrement =() =>{
    dispatch(increment())

  }
  const handleDecrement =() =>{
    dispatch(decrement())

  }
  const incrementByUserInput=()=>{
    dispatch(incrementValueByUserInput(13))

  }
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-5">Counter - {data}</h1>
        <button onClick={handleIncrement} className="py-2.5 px-10 rounded bg-blue-600 border:none active:scale-95">Increment by 1</button>
        <button onClick={handleDecrement} className="py-2.5 px-10 rounded bg-blue-600 border:none active:scale-95">Decrement by 1</button>
        <button onClick={incrementByUserInput} className="py-2.5 px-10 rounded bg-blue-600 border:none active:scale-95">increment </button>
    </div>
  )
}

export default App