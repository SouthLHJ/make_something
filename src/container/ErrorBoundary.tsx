// import {Err} from "react"

import ErrorBoundary from "@src/component/ErrorBoundary";
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