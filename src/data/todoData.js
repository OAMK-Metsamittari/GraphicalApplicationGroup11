import axios from 'axios';
import moment from 'moment';

var headers =  { headers: {
    'Accept-Language': 'fi' }
    }

function getRegionLevels(lang)
{   
    if (lang === true){
        headers =  { headers: {
            'Accept-Language': 'en' }
            }  
    } else {
        headers =  { headers: {
            'Accept-Language': 'fi' }
            }
    }
    return new Promise((resolve,reject)=>{
        axios.get("http://melatupa.azurewebsites.net/regionLevels",headers).then(result=>{        
          resolve(result);
        })
        .catch(error=>{
            console.log("error");
            reject();
        })
    });
}


function getRegions(regId)
{
    const regionId = regId || 1;
    return new Promise((resolve,reject)=>{
      axios.get("http://melatupa.azurewebsites.net/regionLevels/"+regionId+"/regions").then(result=>{        
        resolve(result);        
      })
      .catch(error=>{
          console.log("error");
          reject();
    })
 });
}

function getScenarioCollection(collectionId, regionId)
{
 return new Promise((resolve , reject) => {
    axios.get( "http://melatupa.azurewebsites.net/scenarioCollection/" + collectionId + "/region/" + regionId, headers).then(results => {
        const items = results.data;
        //console.log("getScenarioCollection items: " + items);
        resolve(items);
    })
    .catch(error => {
        console.log(error);
        reject();
    })
 });
 
}

function getScenario(scenId,regId){   
    const collectionId = scenId || 6;
    const regionId = regId || 24;
    return new Promise((resolve,reject)=>{
      axios.get("http://melatupa.azurewebsites.net/scenarioCollection/"+ collectionId +"/region/"+regionId).then(result=>{        
        resolve(result);
      })
      .catch(error=>{
          console.log(error);
          reject();
      })
    })   
}

function getYear(){
    return new Promise((resolve,reject)=>{
      axios.get("http://melatupa.azurewebsites.net/scenarioCollection/6/region/24").then(result=>{        
        resolve(result);
      })
      .catch(error=>{
          console.log(error);
          reject();
      })
    })   
}

export default { getRegionLevels, getRegions, getScenarioCollection, getScenario, getYear };