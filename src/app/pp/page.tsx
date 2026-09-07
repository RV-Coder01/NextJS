import PPHeader from "../components/PPHeader";
import PPBottomBar from "../components/PPBottomBar";
import { Suspense } from 'react'
export default function PP() {
    return (
        <>
            <Suspense fallback={<p>Comming Header...</p>}>
                <PPHeader />
            </Suspense>

            <h1>Hey from PP</h1>
            
            <Suspense fallback={<p>Comming BottomBar...</p>}>
                <PPBottomBar />
            </Suspense>

        </>
    )
}