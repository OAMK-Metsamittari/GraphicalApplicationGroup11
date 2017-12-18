import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Region extends Component {
    constructor(props){
        super(props);        
        this.regionHandler = this.regionHandler.bind(this);
    }    
    regionHandler(event){        
        this.props.selectedRegionId(event.target.value);
    }  
    render () {
        const {region} =  this.props;  
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Alue</b>
                <div>
                    <select className="form-control" onChange={this.regionHandler}>
                    <option>Valitse alue</option>
                        {
                            region.map(element=>
                            <option value={element.id} key={element.id}>{element.name}</option>) 
                        }                          
                    </select>
                </div>
                </div>
            </div>
        )
    }
}

export default Region