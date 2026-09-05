"use client"
import {useRouter} from "next/navigation"

export default function ErrorReview(
    { error,reset }: { error: Error,
        reset:()=> void
     }
) {
    const router=useRouter()
    function reload(){
        router.refresh()
        reset()
    }
    return (
        <>
        <h1>{error.message}</h1>
        <button onClick={reload}>Reset</button>
        </>
    )
}