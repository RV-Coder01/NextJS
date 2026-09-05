import {data} from "../../feed-data/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function FeedData(
    {params}:{params:Promise<{id:string}>}
){
    const paramsData = await params;
    const feedData = data.find((feed)=>feed.id === Number(paramsData.id));

    if (!feedData) {
        notFound();
    }

    return(
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                backgroundColor: "rgba(4, 27, 51, 0.72)",
            }}
        >
            <h1>Hey from intercepted</h1>
            <article
                key={feedData.id}
                style={{
                    position: "relative",
                    width: "min(720px, 100%)",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    borderRadius: "12px",
                    padding: "24px",
                    backgroundColor: "white",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
                }}
            >
                <Link
                    href="/feed"
                    aria-label="Close modal"
                    style={{
                        position: "absolute",
                        top: "12px",
                        right: "16px",
                        zIndex: 1,
                        color: "#334155",
                        fontSize: "28px",
                        lineHeight: 1,
                        textDecoration: "none",
                    }}
                >
                    &times;
                </Link>
                <img
                    src={feedData.image.src}
                    alt={feedData.name}
                    width={1200}
                    height={600}
                    style={{
                        width: "100%",
                        height: "min(55vh, 420px)",
                        objectFit: "contain",
                        backgroundColor: "#041b33",
                    }}
                />
                <h2>{feedData.name}</h2>
                <p>{feedData.description}</p>
            </article>
        </div>
    )
}