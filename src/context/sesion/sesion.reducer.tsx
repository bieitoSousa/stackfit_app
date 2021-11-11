import { ISesion } from "../../interface/ISesion";
import { initialState } from "../initialState";
import { sesionModel  } from "./sesion.models";
import { GET_SESION_FAIL_ACTION, GET_SESION_LOADED, GET_SESION_LOADING } from "./sesion.types";


export interface ISesionState {
    sesionLoading: boolean,
    sesionLoaded: boolean,
    sesionLoadingFail: boolean,
    sesionData: ISesion[] | [],
}

type SesionAction = 
    | { type: 'GET_SESION_LOADING' }
    | { type: 'GET_SESION_LOADED', payload: { data : ISesion[] | []}} 
    | { type: 'GET_SESION_FAIL_ACTION' }


export const sesionReducer = (state : ISesionState = initialState, action : SesionAction ) : ISesionState => {
    switch (action.type) {

        case GET_SESION_LOADING:
            return {
                ...state,
                sesionLoading: false,
                sesionLoaded: false,
                sesionLoadingFail: false,
                sesionData: [],
            }
        case GET_SESION_LOADED:
            return {
                ...state,
                sesionLoading: false,
                sesionLoaded: false,
                sesionLoadingFail: false,
                sesionData: action.payload && action.payload.data ? action.payload.data.map(el => new sesionModel(el)) : []
            }
        case GET_SESION_FAIL_ACTION:
            return {
                ...state,
                sesionLoading: false,
                sesionLoaded: false,
                sesionLoadingFail: false,
                sesionData: [],
            }

        default:
            return {
                ...state
            }
    }
}