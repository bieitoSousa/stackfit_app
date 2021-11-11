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
const store = createStore(rootReducer);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch