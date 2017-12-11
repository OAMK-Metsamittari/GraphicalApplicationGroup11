import axios from 'axios';
import moment from 'moment';

function getItems()
{
    /*
    if(lang === true){
        headers =  { headers: {
            'Accept-Language': 'fi' }
            }  
    }else {
        headers =  { headers: {
            'Accept-Language': 'en' }
            }
    }
    */

    return new Promise((resolve , reject) => {
        axios.get("http://melatupa.azurewebsites.net/regionLevels" , headers)
        .then(results => {
            console.log("results: " + results)
            const items = results.data;
            resolve(items);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

export default { getItems };