import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redux/reducers/reducerIndex';

const clickStore = createStore(rootReducer, composeWithDevTools());

export default clickStore;