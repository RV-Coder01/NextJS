import { Metadata } from "next";

type props={ params: Promise<{ productId: string }>}

export const generateMetadata=async ({params}:props): Promise<Metadata> =>{
    const productId=(await params).productId
    return{
        title:`Product ${productId} metadata`
    }
}


export default async function ProductDetails(
    { params }: props
)
{
    const productId = (await params).productId;
    return (
        <>
            <h1>Welcome to Product {productId} detail page</h1>
        </>
    )
}