import { initialState } from "../initialState";
import { regionModel  } from "./region.models";
import { GET_REGION_SPAIN_FAIL_ACTION, GET_REGION_SPAIN_LOADED, GET_REGION_SPAIN_LOADING } from "./region.types";


export const regionReducer = (state = initialState, action) => {
    switch (action.type) {

        //STAROILD
        case GET_REGION_SPAIN_LOADING:
            return {
                ...state,
                regionSpainLoading: false,
                regionSpainLoaded: false,
                regionSpainLoadingFail: false,
                regionSpainData: [],
            }
        case GET_REGION_SPAIN_LOADED:
            return {
                ...state,
                regionSpainLoading: false,
                regionSpainLoaded: false,
                regionSpainLoadingFail: false,
                regionSpainData: action.payload && action.payload.data ? action.payload.data.map(el => new regionModel(el)) : []
            }
        case GET_REGION_SPAIN_FAIL_ACTION:
            return {
                ...state,
                regionSpainLoading: false,
                regionSpainLoaded: false,
                regionSpainLoadingFail: false,
                regionSpainData: [],
            }

        default:
            return {
                ...state
            }
    }
}