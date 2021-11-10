import {
    GET_SESION_LOADING, 
    GET_SESION_LOADED,
    GET_SESION_FAIL_ACTION,
} from "./sesion.types";

//SESION
export function getSesionLoadingAction(data) {
    return {
        type: GET_SESION_LOADING,
        payload: data
    }
}
export function getSesionLoadedAction(data) {
    return {
        type: GET_SESION_LOADED,
        payload: data
    }
}
export function getSesionFailAction(data) {
    return {
        type: GET_SESION_FAIL_ACTION,
        payload: data
    }
}

/*
# SESION ACTIONS 
    getSesionLoadingAction,
    getSesionLoadedAction,
    getSesionFailAction,

# SESION TYPES 
    GET_SESION_LOADING, 
    GET_SESION_LOADED,
    GET_SESION_FAIL_ACTION,

*/