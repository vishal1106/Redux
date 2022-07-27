import React from 'react'
import {increment,decrement} from "./Reducer/action"
import { useDispatch, useSelector } from 'react-redux';
const Count = () => {
  const dispatch=useDispatch();
  const count=useSelector((state)=>
  state.count
  );
  
  return (
    <div>
      <h1>Counter:
      {count}
      </h1>


<div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>

    </div>
    </div>
  )
}

export default Count