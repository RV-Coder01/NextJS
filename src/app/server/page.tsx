import {cookies} from "next/headers"
export default async function ABoutPage(){

    const cookie=await cookies()
    const theme=cookie.get("theme")
    console.log(theme)
    console.log("About page rendered on server")
    return(
        <>
        <h1>About Page:- server</h1>
        </>
    )
}