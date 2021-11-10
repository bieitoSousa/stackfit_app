import { initialState } from "../initialState";
import { exerciseModel  } from "./exercise.models";
import { GET_EXERCISE_FAIL_ACTION, GET_EXERCISE_LOADED, GET_EXERCISE_LOADING } from "./exercise.types";


export const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_EXERCISE_LOADING:
            return {
                ...state,
                exerciseLoading: false,
                exerciseLoaded: false,
                exerciseLoadingFail: false,
                exerciseData: [],
            }
        case GET_EXERCISE_LOADED:
            return {
                ...state,
                exerciseLoading: false,
                exerciseLoaded: false,
                exerciseLoadingFail: false,
                exerciseData: action.payload && action.payload.data ? action.payload.data.map(el => new exerciseModel(el)) : []
            }
        case GET_EXERCISE_FAIL_ACTION:
            return {
                ...state,
                exerciseLoading: false,
                exerciseLoaded: false,
                exerciseLoadingFail: false,
                exerciseData: [],
            }

        default:
            return {
                ...state
            }
    }
}