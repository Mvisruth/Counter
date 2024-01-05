import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/CounterSlice'
function Counter(){
    //state to dispatch the input value
    const [range , setRange] = useState()
    //hook to dispatch a function in action

    const dispatch = useDispatch()

    //components can access the state by useing useselector hook

    const count = useSelector((state)=>state.counter.value)

    console.log(range)
    return (
    <>
    
        <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column '>
            <h1 style={{fontSize:'90px'}}>{count}</h1>
            <div className='mt-5'>
                <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
                {/* number method is used to convert string into number */}
                <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
                <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
                
            </div>
            <div className='w-50 mt-5 '>
                <input type="text" onChange={(e)=>setRange(e.target.value)} placeholder='enter the range' className='form-control' style={{borderColor:'blue'}} />
                </div>
        </div>
        

      
    </>
 )
    
}
export default Counter