import Link from 'next/link'

export const metadata = {
    title: {
        default: "Nextjs Learning",
        template: "%s | Nextjs Learning"
    },
    description: "Learning Next.js with VatsR"
}

export default function Home() {
    return(
        <>
        <h1>Welcome to Home</h1>
        <Link href="/blog">Read Blogs</Link>
        <br />
        <Link href="/about">About</Link>
        </>
    
    )
}