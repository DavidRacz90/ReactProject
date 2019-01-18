import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../src/reducers/index';

const clickStore = createStore(rootReducer, composeWithDevTools());

export default clickStore;