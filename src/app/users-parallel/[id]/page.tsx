type UserPost={
    userId:number;
    id:number;
    title:string;
    body:string
}

type UserAlbum={
    userId:number;
    id:number;
    title:string;
}

async function fetcUserPost(userId:string): Promise<UserPost[]> {
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const data=await res.json()
    return data
}

async function fetcUserAlbums(userId:string): Promise<UserAlbum[]> {
    const res=await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    const data=await res.json()
    return data
}

export default async function UserParalle(
    {params}:{params:Promise<{id:string}>}
    ){
    const {id}= await params
    const posts=fetcUserPost(id)
    const albums=fetcUserAlbums(id)
    const [post,album]=await Promise.all([posts,albums])
    return(
        <main className="parallel-page">
            <h1>User {id} content</h1>
            <div className="parallel-columns">
                <section className="parallel-section" aria-labelledby="posts-heading">
                    <h2 id="posts-heading">Posts</h2>
                    <div className="parallel-list">
                        {post.map((item) => (
                            <article className="parallel-card" key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="parallel-section" aria-labelledby="albums-heading">
                    <h2 id="albums-heading">Albums</h2>
                    <div className="parallel-list">
                        {album.map((item) => (
                            <article className="parallel-card" key={item.id}>
                                <h3>{item.title}</h3>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}