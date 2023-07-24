import { createStore } from 'redux';
import rootReducer from './reducer'; // Create your root reducer or combine multiple reducers if needed

const store = createStore(rootReducer);

export default store;