import axios from 'axios';
import moment from 'moment';

var headers =  { headers: {
    'Accept-Language': 'en' }
    }

function getRegionLevels(lang)
{   
    if (lang === true){
        headers =  { headers: {
            'Accept-Language': 'fi' }
            }  
    } else {
        headers =  { headers: {
            'Accept-Language': 'en' }
            }
    }
    return new Promise((resolve, reject) => {
        axios.get("http://melatupa.azurewebsites.net/regionLevels", headers)
        .then(results => {
            //console.log("getRegionLevels results: " + results)
            const items = results.data;
            resolve(items);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}


function getRegions(id)
{

  return new Promise((resolve, reject) => {
    axios.get("http://melatupa.azurewebsites.net/regionLevels/" + id + "/regions", headers)
    .then(results => {
            //console.log("getRegions results: " + results)
            const items = results.data;
            //console.log("getRegions items: " + items)
        resolve(items);
    })
    .catch(error => {
        console.log(error);
        reject();
    })
 });
}

function getScenarioCollection(collectionId, regionId)
{

 return new Promise((resolve , reject) => {
    axios.get( "http://melatupa.azurewebsites.net/scenarioCollection/" + collectionId + "/region/" + regionId, headers)
    .then(results => {
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

export default { getRegionLevels, getRegions, getScenarioCollection };