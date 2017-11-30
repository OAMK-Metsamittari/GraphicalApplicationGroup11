import axios from 'axios';
import moment from 'moment';

function getItems()
{
    return new Promise((resolve, reject) => {

        axios.get("http://melatupa.azurewebsites.net/regionLevels")
        .then(results => {
            console.log("todoData results:" + results);
            
            const items = results.data.map(element => {  
                element.order = moment(element.order);
                console.log("order: " + element.order);
                return element.id;
            });
            
            resolve(items);
            console.log("items: " + items);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

export default { getItems };