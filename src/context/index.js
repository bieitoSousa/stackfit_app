import { createStore, combineReducers } from 'redux';
import { appReducer } from './app/app.reducer';
import { exerciseReducer } from './exercise/exercise.reducer';
import { marketReducer } from './marker/market.reducer';
import { regionReducer } from './region/region.reducer';
import { sesionReducer } from './sesion/sesion.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    market: marketReducer,
    region: regionReducer,
    sesion: sesionReducer,
    exercise: exerciseReducer,
})
export default createStore(rootReducer);