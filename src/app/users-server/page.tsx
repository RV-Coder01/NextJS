type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string
}

export default async function UsersServer(){
    await new  Promise((resolve)=>{
        setTimeout(resolve,2000)
    })
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const users:User[]=await response.json()
    return(
        <main className="users-page">
            <h1>Users Server</h1>
            
            { (
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