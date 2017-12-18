import React, { Component } from 'react'

class Scenario extends Component {
    constructor(props){
        super(props);
        this.scenarioHandler = this.scenarioHandler.bind(this);
    }
    scenarioHandler(event){
        this.props.selectedScenario(event.target.value);
    }
    render () {
        const {scenario} = this.props;
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Skenaariot </b>
                    <select className="form-control" onChange={this.scenarioHandler}>
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