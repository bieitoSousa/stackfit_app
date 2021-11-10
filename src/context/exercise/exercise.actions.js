import {
    GET_EXERCISE_LOADING, 
    GET_EXERCISE_LOADED,
    GET_EXERCISE_FAIL_ACTION,
} from "./exercise.types";

//EXERCISE
export function getExerciseLoadingAction(data) {
    return {
        type: GET_EXERCISE_LOADING,
        payload: data
    }
}
export function getExerciseLoadedAction(data) {
    return {
        type: GET_EXERCISE_LOADED,
        payload: data
    }
}
export function getExerciseFailAction(data) {
    return {
        type: GET_EXERCISE_FAIL_ACTION,
        payload: data
    }
}

/*
# EXERCISE ACTIONS 
    getExerciseLoadingAction,
    getExerciseLoadedAction,
    getExerciseFailAction,

# EXERCISE TYPES 
    GET_EXERCISE_LOADING, 
    GET_EXERCISE_LOADED,
    GET_EXERCISE_FAIL_ACTION,

*/