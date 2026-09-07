export default async function PPHeader(){
    await new Promise(resolve=> setTimeout(resolve, 6000))
    return(
        <>
        <h1>Hey from PP Header</h1>
        </>
    )
}