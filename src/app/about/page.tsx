import Link from 'next/link'
export const metadata={
    title:{
        absolute :"About metadata"
    }
}

export default function About() {
    return(
        <>
        <h1>Welcome to about page</h1>
        <Link href="/">Home</Link>
        </>
    
    )
}