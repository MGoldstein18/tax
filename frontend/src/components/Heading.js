import React from 'react'
import './heading.css'
import {Jumbotron} from 'reactstrap'

function Heading(){
    return(
        <div>
            <Jumbotron className="heading" >
                <h1>How much tax do you pay?</h1>
            </Jumbotron>
        </div>
    )
}

export default Heading