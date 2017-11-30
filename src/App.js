import React, { Component } from 'react';
import './App.css';
import itemData from './data/todoData';
import Graphs from './components/Graphs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Timber from './components/Timber';
import Indicators from './components/Indicators';


class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      items: [],
      graph: 1
    };
  }

  componentDidMount() {
    itemData.getItems().then(result => {
      this.setState({ items: result});
      console.log("result: " + result);
    });
  }

  chartBtn(){
    // täällä vie uusi graph arvo Graphs.js ja päivitä view
    console.log("wooo");
    //Graphs graph={this.state.graph = 3};
    this.setState({ graph: 1}); //ei toimi
    console.log("graph: " + this.state.graph);
  }

  columnBtn(){}
  tableBtn(){}

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
        <div className="col-md-12"><b>asdasdas</b>                 
                            
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
        </div>
      </div>       
    </div>
</div>
);
  }
}

export default App;
