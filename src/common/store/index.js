import cardReducer from './cardReducer';
import { createStore } from 'redux';

const store = createStore(cardReducer);

export default store;