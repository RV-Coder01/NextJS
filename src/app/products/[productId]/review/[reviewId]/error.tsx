"use client"

export default function ErrorReview({error}:{error:Error}){
    return(
        <>{error.message}</>
    )
}