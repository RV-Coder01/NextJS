"use client"

import { useState, useEffect } from "react"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!res.ok) {
                    throw new Error("Fetch failed")
                }
                const data = await res.json()
                setUsers(data)
            }catch(err){
                if(err instanceof Error){
                    setError(err.message)
                }else{
                    setError("Unexpected error")
                }
            }finally{
                setLoading(false)
            }
            
        }
        fetchUsers()
    }, [])
    return(
        <main className="users-page">
            <h1>Users Client</h1>
            {loading && <p className="users-status">Loading users...</p>}
            {error && <p className="users-status users-status-error">{error}</p>}
            {!loading && !error && (
                <ul className="users-grid">
                    {users.map((user) => (
                        <li className="user-card" key={user.id}>
                            <div className="user-card-name">{user.name}</div>
                            <div className="user-card-details">
                                <div><span>Username</span>{user.username}</div>
                                <div><span>Email</span>{user.email}</div>
                                <div><span>Phone</span>{user.phone}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}