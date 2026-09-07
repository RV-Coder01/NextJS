"use client"
import { useState } from "react"

export default function ClientComponent() {
    const [name, setName] = useState("")
    console.log("Client component rendered")
    return (
        <>
            <h1>Hey from client component</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <h2>Hey {name}</h2>
        </>
    )
}