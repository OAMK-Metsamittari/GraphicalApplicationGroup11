import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Timber from './components/Timber';
import Indicators from './components/Indicators';
import Products from './components/Products';
import Diversity from './components/Diversity';
import Coal from './components/Coal';
import Other from './components/Other';
import RegionLevel from './components/Regionlevel';


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
        <div className="col-md-12">                 
                            <RegionLevel />
        </div>         
      </div>       
      <div className="col-md-6">
        
      </div>
      <div className="col-md-3 well well-sm indicator">
        <div className="col-md-12"> 
          <Indicators />
          <Timber />
          <Products />
          <Diversity />
          <Coal />
          <Other />
        </div>
      </div>       
    </div>
</div>
);
  }
}

export default App;
