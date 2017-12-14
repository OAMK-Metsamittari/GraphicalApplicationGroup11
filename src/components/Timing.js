import React, { Component } from 'react'

class Timing extends Component {
    constructor(props){
        super(props);
        this.selectYear = this.selectYear.bind(this);   
    }
    selectYear(event){      
        let index = event.target.selectedIndex; 
        let value = event.target.options[index].value; 
        let text = event.target.options[index].text; 
             
        this.props.selectedYear(text,value);
   }
    render () {
        const { year } = this.props;
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Ajankohta </b>
                    <select className="form-control" onChange={this.selectYear}>
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