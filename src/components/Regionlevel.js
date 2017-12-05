import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Regionlevel extends Component {s    
    render () {
       
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Aluetasot</b>
                    <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">HTML</a></li>
                      <li><a href="#">CSS</a></li>
                      <li><a href="#">JavaScript</a></li>
                    </ul>
                  </div>
                </div>
            </div>     
        )      
    }    
}

export default Regionlevel