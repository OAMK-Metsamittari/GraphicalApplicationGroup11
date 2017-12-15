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
import toDoData from './data/todoData';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      scenario:[],
      selectedRegion:[],
      selectedScenarioId:[],     
      regionLevel:[],
      regionsLevels:[],
      region:[],
      year:[],
      items: [],
      lang: true, 
      graph: 1
    }

    this.regionLevel = this.regionLevel.bind(this);
    this.scenarioRegId = this.scenarioRegId.bind(this);
    this.selectedRegLevelId =  this.selectedRegLevelId.bind(this);
    this.selectedYear = this.selectedYear.bind(this);

    this.chartBtn = this.chartBtn.bind(this);
    this.columnBtn = this.columnBtn.bind(this);
    this.tableBtn = this.tableBtn.bind(this);
  
  }

  regionLevel() {
      itemData.getRegionLevels(this.state.lang).then(result => {
      this.setState( { regionsLevels : result} )
      console.log("regionsLevels: " + result);
    });
  }

  componentDidMount() {
    
    
    /*itemData.getRegionLevels().then(result => {
      this.setState({ items: result});
      console.log("getRegionLevels result: " + result);
    });  */ 
    toDoData.getRegions().then(result=>{                  
      this.setState({region:result.data})       
      this.setState({regionName:result.data[0].name});   
   });

    toDoData.getRegionLevels().then(result=>{           
      this.setState({regionLevel:result.data})          
    });

    toDoData.getScenario().then(result=>{           
      this.setState({scenario:result.data})
      this.setState({indicator:result.data})                     
    });

    toDoData.getYear().then(result=>{           
      this.setState({year:result.data})
      let timePeriods = result.data[0].timePeriods;
      let timeStart = result.data[0].timePeriods[0].yearStart;
      let timeEnd = result.data[0].timePeriods[0].yearEnd;
      this.setState({period:timeStart+"-"+timeEnd});       
    }); 
    
    
    //this.regionLevel();
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

  selectedRegLevelId(regionId){ 
    toDoData.getRegions(regionId).then(result=>{                  
      this.setState({region:result.data})
      this.setState({regionName:result.data[0].name});              
        })
      this.setState({updateSCollectionById:''});
    }


  selectedRegionId(regionId,rName){ 
    this.setState({updateSCollectionById:regionId})
    this.setState({regionName:rName});
  }
  

  scenarioRegId(scenId,regId){    
    toDoData.getScenario(scenId,regId).then(result=>{                  
      this.setState({scenario:result.data}) 
      this.setState({year:result.data})
      this.setState({indicator:result.data})          
    })
  }

  selectedScenarioNumber(result,sName){  
    this.setState({scenarioNumber:result.length}); 
    this.setState({selectedScenarioId:result}); 
    this.setState({selectedScenarioName:sName});       
  }

  selectedYear(year,id){
    this.setState({period:year});
    this.setState({periodId:id});
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
              <RegionLevel regionLevel={this.state.regionLevel} selectedRegLevelId={this.selectedRegLevelId}/>
              <Region region={this.state.region} selectedRegId={this.selectedRegId}/>
              <ScenarioCollection ScenarioCollection={this.state.region} updateSCollectionById={this.state.updateSCollectionById} scenarioRegId={this.seranioRegId}/>
              <Scenario scenario = {this.state.scenario} selectedScenarioNumber = {this.selectedScenarioNumber}/>
              <Timing year={this.state.year} selectedYear={this.selectedYear}/>
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
