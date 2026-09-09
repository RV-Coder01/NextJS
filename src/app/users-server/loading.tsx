export default function Loading(){
    return(
        <div className="page-loader" role="status" aria-live="polite">
            <span className="page-loader-spinner" aria-hidden="true" />
            <p>Loading users...</p>
        </div>
    )
}