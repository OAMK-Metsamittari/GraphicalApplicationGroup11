import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class ScenarioCollection extends Component {
    render () {
        const { scenarioCollection } = this.props;
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Skenaario kokoelma</b>                
                    <select className="form-control">
                        <option>Valitse kokoelma</option>
                            {            
                                scenarioCollection.map(element=>
                                    element.scenarioCollections.map(value=>
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

export default ScenarioCollection