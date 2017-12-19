import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Regionlevel extends Component {
    constructor(props){
        super(props);
        this.regionLevelHandler = this.regionLevelHandler.bind(this);
    }
    regionLevelHandler(event){
        this.props.selectedRegLevelId(event.target.value);
    }   
    render () {
        const {regionLevel} = this.props;
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Aluetasot</b>                
                    <select className="form-control" onChange={this.regionLevelHandler}>
                        <option>Valitse aluetaso</option>
                            {
                                regionLevel.map(element=>
                                <option value={element.id} key={element.id} >{element.name}</option>) 
                            }
                    </select>                
                </div>
            </div>     
        )      
    }    
}

export default Regionlevel