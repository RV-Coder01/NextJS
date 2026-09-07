export default async function PPBottomBar(){
    await new Promise(resolve=> setTimeout(resolve, 3000))
    return(
        <>
        <h1>Hey from PP Bottom Bar</h1>
        </>
    )
}