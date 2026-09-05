export default function Layout(
    {children,
        modal
    }:{children:React.ReactNode,
        modal:React.ReactNode
    }
){
    return(
        <>
        <h1>Feed Layout</h1>
        {modal}
        {children}
        </>
    )
}