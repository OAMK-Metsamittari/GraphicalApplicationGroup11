import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Region extends Component {
    render () {
        return (
            <div class="row">
                <div class="col-md-12 textfont"><b>Alue</b>
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

export default Region