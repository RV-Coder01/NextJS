import Link from 'next/link'
export const metadata={
    title:"Product metadata"
}

export default function Product() {
    const id=3;
    return (
        <>
            <h1>Welcome to Product page</h1>
            <h1><Link href="/products/1" replace>Product 1</Link></h1>
            <h1><Link href="/products/2" >Product 2</Link></h1>
            <h1><Link href= {`/products/${id}`} >Product 3</Link></h1>
            <h1>Product 4</h1>
        </>
    )
}