"use client"
import {useEffect} from "react"

export default function Error({error, reset}:{error:Error; reset:()=>void}){   
    useEffect(()=>{
        console.log(`${error}`)
    },[error])
    return(
        <div className="users-error" role="alert">
            <div className="users-error-icon" aria-hidden="true">!</div>
            <h1>Unable to load users</h1>
            <p>There was a problem fetching the users data.</p>
    
        </div>
    )
}