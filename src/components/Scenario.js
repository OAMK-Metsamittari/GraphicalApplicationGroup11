import React, { Component } from 'react'

class Scenario extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedScenario:0,
            selectedIndicator:0
        }
        this.selectScenario = this.selectScenario.bind(this);
    }
    selectScenario(event){ 

        let result = [];
        let ScenarioName = []; 
        let Lenght = event.target.options.length; 

        for (var count=0; count<Lenght; count++) {
            var opt = event.target.options[count];        
            if (opt.selected) {
              result.push(opt.value || opt.text);             
              ScenarioName.push(opt.text);
            }
          }      
            this.props.selectedScenarioNumber(result,ScenarioName);          
      }

    render () {
        const {scenario} = this.props;
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Skenaariot </b>
                <select className="form-control" onChange={this.selectHandler}>
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