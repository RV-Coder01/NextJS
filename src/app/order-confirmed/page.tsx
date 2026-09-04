"use client"

import {useRouter} from 'next/navigation'


export default function OrderConfirmed() {
    const router=useRouter()
    function handleClick(){
        router.push("/")
    }
    return(
        <>
        <h1>Order Confirmed</h1>
        <button onClick={handleClick}>Back to Home</button>
        </>
    )
}