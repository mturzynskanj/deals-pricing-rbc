import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

{
    let obj = {
        fname: 'maria',
        lname: 'wojciechowska',
        address: {
            city: 'new york',
            zip: [222, 123, 1000, 10001]
        }
    }

    const addToArray = (arr) => (item) => arr.concat(item);
    const removeFromArray = (arr) => (item) => {
        let idx= arr.indexOf(item);
        let newArray = [...arr.slice(0, idx),...arr.slice(idx+1)]
        return newArray;
    }

    let newObj = {
        ...obj,
        address: {
            ...obj.address, county: 'bergen',
            //zip: obj.address.zip.concat('5555')
            //zip: addToArray(obj.address.zip)('555')
            zip: removeFromArray(obj.address.zip)(222)
        }
    };

    let newMaria = {
        age:1000
    }

    let arrayOfObjects = [{
        name:'maria', age:22
    },{
        name: 'karol', age:44
    },{
        name: 'blazje',age:11
    },{
        name:'helena', age:55
    }]

    let test = arrayOfObjects.map(obj=>{
        if(obj.name ==='maria'){
            return {...obj, ...newMaria}
        } else {
            return  obj;
        }
    })

    console.log('test is', test);
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
