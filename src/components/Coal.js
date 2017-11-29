import React, { Component } from 'react'

class Coal extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-12">
                     <div className="coal"><b>Hiili</b>
                        <ul className="coalUi">
                            <li>Hiilen määrä</li>                            
                        </ul>
                     </div>
                </div>        
            </div>
        )
    }
}

export default Coal