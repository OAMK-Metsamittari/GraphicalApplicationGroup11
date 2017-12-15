import React, { Component } from 'react'

class Scenario extends Component {
    constructor(props){
        super(props);
        this.state = {                 
        }      
    }
    render () {
        const {scenario} = this.props;
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Skenaariot </b>
                    <select className="form-control">
                        <option>Valitse skenaario</option>
                            {            
                                scenario.map(element=>
                                    element.scenarios.map(value=>
                                    <option value={value.id} key={value.id} > {value.name}</option>                         
                                    )
                                )
                            }
                    </select>
                </div>        
            </div>
        )
    }
}

export default Scenario