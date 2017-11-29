import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Timber from './components/Timber';
import Indicators from './components/Indicators';


class App extends Component {
  render() {
    return ( 
    <div>        
      <div className="row">      
      <div className="col-md-12" >
      <Header />
    </div>      
    </div>
    <div className="row">       
      <div className="col-md-3 well well-sm indicator" >  
        <div className="col-md-12"><b>asdasdas</b>                 
                            
        </div>         
      </div>       
      <div className="col-md-6"><b>asdasdasdasd</b>
        
      </div>
      <div className="col-md-3 well well-sm indicator">
        <div className="col-md-12"> 
          <Indicators />
          <Timber />
        </div>
      </div>       
    </div>
</div>
);
  }
}

export default App;
