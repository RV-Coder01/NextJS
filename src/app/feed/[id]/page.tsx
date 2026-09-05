import {data} from "./../feed-data/data";
import { notFound } from "next/navigation";

export default async function FeedData(
    {params}:{params:Promise<{id:string}>}
){
    const paramsData = await params;
    const feedData = data.find((feed)=>feed.id === Number(paramsData.id));

    if (!feedData) {
        notFound();
    }

    return(
        <>
        <article
                        key={feedData.id}
                        style={{
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            padding: "16px",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <img
                            src={feedData.image.src}
                            alt={feedData.name}
                            width={1200}
                            height={600}
                                style={{
                                    width: "100%",
                                    height: "800px",
                                    objectFit: "contain",
                                    backgroundColor: "#041b33",
                                }}
                        />
                        <h2>{feedData.name}</h2>
                        <p>{feedData.description}</p>
                    </article>
        </>
    )
}