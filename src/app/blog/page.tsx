
import Link from 'next/link'
export default async function Blog() {
    await new Promise((resolve) => 
        setTimeout(resolve, 4000)
);
    return(
        <>
        <h1>Welcome to blog</h1>
         <Link href="/">Home</Link>
        </>
    
    )
}