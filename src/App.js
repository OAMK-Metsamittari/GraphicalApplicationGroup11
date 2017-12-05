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
      items: [],
      graph: 1
    };

    this.chartBtn = this.chartBtn.bind(this);
    this.columnBtn = this.columnBtn.bind(this);
    this.tableBtn = this.tableBtn.bind(this);
  }

  componentDidMount() {
    itemData.getItems().then(result => {
      this.setState({ items: result});
      console.log("result: " + result);
    });
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

  //renderissä haetaan graph arvo App.js ja viedään se Graphs.js, nappien onClickissä voi vaihtaa sitä graph arvoa ja päivittää App.js render()

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
        <Graphs items={ this.state.items } graph={ this.state.graph }/>
        <button className="btn btn-success" onClick={ this.chartBtn }>Chart</button>
        <button className="btn btn-success" onClick={ this.columnBtn }>Column</button>
        <button className="btn btn-success" onClick={ this.tableBtn }>Table</button>
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
