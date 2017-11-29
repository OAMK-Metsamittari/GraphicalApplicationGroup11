import axios from 'axios';
import moment from 'moment';

function getItems()
{
    return new Promise((resolve, reject) => {

        axios.get("http://melatupa.azurewebsites.net/regionLevels")
        .then(results => {
            console.log(results);
            const items = results.data.map(element => {  
                element.dueDate = moment(element.dueDate);
                return element;
            });
            resolve(items);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
} 

export default { getItems };