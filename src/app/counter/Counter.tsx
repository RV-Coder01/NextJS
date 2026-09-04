"use client"
import {useState} from 'react'


export default function Counter(){
    const [count,setCount]=useState(0)

    return(
        <>
        <h1>Counter</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}