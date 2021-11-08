import { createStore, combineReducers } from 'redux';
import { appReducer } from './app/app.reducer';
import { marketReducer } from './marker/market.reducer';
import { regionReducer } from './region/region.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    market: marketReducer,
    region: regionReducer,
})
export default createStore(rootReducer);