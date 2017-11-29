import React, { Component } from 'react'

class Timber extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-12 textfont"><b>Puuntuotanto </b>
                    <ul className="text">
                     <li>Kantohinta-arvo</li>
                     <li>Nettotulojen nykyarvo</li>
                     <li>Hakkuukertymä</li>
                    <li>Tilavuus</li>
                    </ul>
                </div>        
            </div>
        );
    }
}

export default Timber