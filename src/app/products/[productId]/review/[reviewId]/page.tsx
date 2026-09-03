import {notFound} from "next/navigation"

export default async function ReviewPage({params}:
    {params:Promise<{reviewId:string}>}
){
    const reviewId=(await params).reviewId
    if(parseInt(reviewId)>100){
        notFound()
    }
    return(
        <h1>Hey your review {reviewId}</h1>
    )
}