import React, { Component } from 'react';
import './App.css';
import itemData from './data/todoData';
import Graphs from './components/Graphs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Timber from './components/Timber';
import Indicators from './components/Indicators';
import Products from './components/Products';
import Diversity from './components/Diversity';
import Carbon from './components/Carbon';
import Other from './components/Other';
import RegionLevel from './components/Regionlevel';
import ScenarioChoice from './components/ScenarioChoice';
import Region from './components/Region';
import ScenarioCollection from './components/ScenarioCollection';
import Scenario from './components/Scenario';
import Timing from './components/Timing';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      lang: true,
      regionsLevels : [],
      regions : [],
      scenariosCollection : [],
      regionId : "1",

      graph: 1
    }

    this.regionLevel = this.regionLevel.bind(this);

    this.chartBtn = this.chartBtn.bind(this);
    this.columnBtn = this.columnBtn.bind(this);
    this.tableBtn = this.tableBtn.bind(this);
  }

  regionLevel() {
      itemData.getRegionLevels(this.state.lang).then(result => {
      this.setState( { regionsLevels : result} )
    });
  }

  componentDidMount() {
    /*
    itemData.getRegionLevels().then(result => {
      this.setState({ items: result});
      console.log("getRegionLevels result: " + result);
    });
    */
    this.regionLevel();
    //getStrings.chooseLang(this.state.lang);
  }

  chartBtn(){
    console.log("wooo");
    this.setState({ graph: 1});
    console.log("graph: " + this.state.graph);
  }

  columnBtn(){
    console.log("wooo");
    this.setState({ graph: 2});
    console.log("graph: " + this.state.graph);
  }

  tableBtn(){
    console.log("wooo");
    this.setState({ graph: 3});
    console.log("graph: " + this.state.graph);
  }

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
              <ScenarioChoice />               
              <RegionLevel />
              <Region />
              <ScenarioCollection />
              <Scenario />
              <Timing />
        </div>         
      </div>       
      <div className="col-md-6">
        <Graphs regionsLevels={ this.state.regionsLevels } graph={ this.state.graph }/>
        <button className="col-md-offset-4 btn btn-default" onClick={ this.chartBtn }>Pyöreä pylväskaavio</button>
        <button className="btn btn-default" onClick={ this.columnBtn }>Pylväskaavio</button>
        <button className="btn btn-default" onClick={ this.tableBtn }>Taulukko</button>
      </div>
      <div className="col-md-3 well well-sm indicator">
        <div className="col-md-12"> 
        <Indicators />
        <Timber />
        <Products />
        <Diversity />
        <Carbon />
        <Other />
        </div>
      </div>       
    </div>               
    </div>
    );
  }
}

export default App;
