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
        let idx = arr.indexOf(item);
        let newArray = [...arr.slice(0, idx), ...arr.slice(idx + 1)]
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
        age: 1000
    }

    let arrayOfObjects = [{
        name: 'maria', age: 22
    }, {
        name: 'karol', age: 44
    }, {
        name: 'blazje', age: 11
    }, {
        name: 'helena', age: 55
    }]

    let test = arrayOfObjects.map(obj => {
        if (obj.name === 'maria') {
            return { ...obj, ...newMaria }
        } else {
            return obj;
        }
    })

    console.log('test is', test);

    let projects = {
        items: {
            1: {
                name: 'project1',
                tasks: [1, 2]

            },
            2: {
                name: 'project2',
                tasks: [3, 4]
            }
        },
        tasks: {
            items: {
                1: {
                    name: 'learn react',
                    date: 'march 2019'
                },
                2: {
                    name: 'learn redux',
                    date: 'may 2019'
                }

            }
        }

    };

    let requirement = {
        id: 1,
        deadline: 'July'
    }

    const { id, ...projectInfo } = requirement;

    let newProject = {
        ...projects,
        items: {
            ...projects.items,
            1: { ...projects.items[1], status: 'finished' }
        }
    };

    console.log('newProject', newProject);

    let newProject2 = {
        ...projects,
        items: {
            ...projects.items,
            2: { ...projects.items[2], ...projectInfo }
        }



    }

    console.log('project 2', newProject2);


    let newTasks = {
        ...projects.tasks,
        items: {
            ...projects.tasks.items,
            1: { ...projects.tasks.items[1], 'friend': 'dupa' },
            2: { ...projects.tasks.items[2], 'test': [].concat('test') }
        }
    }

    let newTasks2 = {
        ...projects.tasks,
        items: {
            ...projects.tasks.items,
            2: {
               ...projects.tasks.items[2],'lname':'woj', 
               'test': [].concat('dupa')
            }
        }
    }

    console.log('new Task', newTasks2);


}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
