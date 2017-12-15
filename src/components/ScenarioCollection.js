import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class ScenarioCollection extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Skenaario kokoelma</b>
                <div>
                    <select>
                    <option value="test1">test</option>
                    <option value="test2">123</option>
                    <option value="test3">456</option>
                    <option value="test4">789</option>
                </select>
                </div>
                </div>
            </div>
        )
    }
}

export default ScenarioCollection