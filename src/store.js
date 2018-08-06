import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'

const store = createStore(
    reducer,
    composeWithDevTools()
)

window.store = store;
window.state = store.getState();

export default store;


