import {data} from "./feed-data/data";
import Link from "next/link";

export default async function FeedData(){
   
    return(
        <>
        <h1>Feed Data</h1>
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
            }}
        >
            {data.map((item)=>{
                return(
                    <article
                        key={item.id}
                        style={{
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            padding: "16px",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <img
                            src={item.image.src}
                            alt={item.name}
                            width={200}
                            height={200}
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <Link href={`/feed/${item.id}`}>Page</Link>
                    </article>
                )
            })}
        </div>
        </>
    )
}