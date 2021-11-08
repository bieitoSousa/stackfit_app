import {
    GET_REGION_SPAIN_LOADING, 
    GET_REGION_SPAIN_LOADED,
    GET_REGION_SPAIN_FAIL_ACTION,
} from "./region.types";

//REGION SPAIN
export function getRegionSpainLoadingAction(data) {
    return {
        type: GET_REGION_SPAIN_LOADING,
        payload: data
    }
}
export function getRegionSpainLoadedAction(data) {
    return {
        type: GET_REGION_SPAIN_LOADED,
        payload: data
    }
}
export function getRegionSpainFailAction(data) {
    return {
        type: GET_REGION_SPAIN_FAIL_ACTION,
        payload: data
    }
}

/*
# REGION SPAIN ACTIONS 
    getRegionSpainLoadingAction,
    getRegionSpainLoadedAction,
    getRegionSpainFailAction,

# REGION SPAIN TYPES 
    GET_REGION_SPAIN_LOADING, 
    GET_REGION_SPAIN_LOADED,
    GET_REGION_SPAIN_FAIL_ACTION,

*/