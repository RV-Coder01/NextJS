"use client";
import {usePathname} from "next/navigation"

export default function NotFoundReview(){
    const pathname=usePathname()
    const reviewId=pathname.split("/")[4]
    const productId=pathname.split("/")[2]
    return(
        <>
        <h1>404</h1>
        <h3>Review not found for review:{reviewId} and for product {productId}</h3>
        </>
    )
}