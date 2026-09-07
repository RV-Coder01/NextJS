import { Metadata } from "next";

type props={ params: Promise<{ productId: string }>}

export const generateMetadata=async ({params}:props): Promise<Metadata> =>{
    const productId=(await params).productId
    return{
        title:`Product ${productId} metadata`
    }
}

export async function generateStaticParams(){
    return[
        {productId:"1"},
        {productId:"2"},
        {productId:"3"}]
}

export const dynamicParams = false;

export default async function ProductDetails(
    { params }: props
)
{
    const productId = (await params).productId;
    return (
        <>
            <h1>Welcome to Product {productId} detail page at {new Date().toLocaleTimeString()}</h1>
        </>
    )
}