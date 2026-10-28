import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/slice/userSlice';

const App = () => {


  const data = useSelector(state=>state.user.data)

  const dispatch = useDispatch()
  const getProductData=()=>{
    dispatch(fetchData())

  }
  return (
    <div className="p-10">
      <button onClick={getProductData} className="px-5 py-2 active:scale-95 border:none rounded bg-blue-600">Get Data</button>
      </div>
  )
}

export default App