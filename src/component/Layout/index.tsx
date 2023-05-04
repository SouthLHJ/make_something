import React from 'react'

import Filter from "@src/container/Filter";

import {Link} from "react-router-dom"

const LayOut = ({childern}:{ childern : React.ReactNode})=>{


    return(
        <div style={{display :"flex",flex : 1}}>
            <nav  style={{display :"flex",flexDirection : "column", width : 100}}>
                <div>
                    <Link to={'/Filter'} />
                </div>
                <div>
                    <Link to={'/Zustand'} />
                </div>
                <div>
                    <Link to={'/IconList'} />
                </div>

            </nav>
            <section>
                {childern}
            </section>
        </div>
    )
}

export default LayOut;