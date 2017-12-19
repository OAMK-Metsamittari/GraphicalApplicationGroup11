import React, { Component } from 'react'

class Timing extends Component {
    constructor(props){
        super(props);       
        this.timingHandler = this.timingHandler.bind(this);
    }    
    timingHandler(event){
        this.props.selectedYear(event.target.value);
    }
    render () {
        const { year } = this.props;
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Ajankohta </b>
                    <select className="form-control" onChange={this.timingHandler}>
                        <option>Valitse vuosi</option>
                        {            
                            year.map(element=>
                                    element.timePeriods.map(value=>
                                        <option value={value.id} key={value.id} > {value.yearStart}-{value.yearEnd} </option>
                                    )
                                )
                        }
                    </select>
                </div>        
            </div>
        )
    }
}

export default Timing