// import {Err} from "react"

import MakeError from "@src/component/ErrorBoundary/MakeError";



const ErrorBoundarys = ()=>{

    return(
        <div>
            <ErrorBoundary>
                <MakeError/>

            </ErrorBoundary>

        </div>

    
    )

}


export default ErrorBoundarys;