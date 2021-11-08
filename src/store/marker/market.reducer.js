import { initialState } from "../initialState";
import { coordinateModel, marketModel, } from "./market.models";
import {
    //STAROILD
    GET_MARKET_STAROILD_FAIL_ACTION,
    GET_MARKET_STAROILD_LOADED,
    GET_MARKET_STAROILD_LOADING,
    //WORKSHOPS
    GET_MARKET_WORKSHOPS_FAIL_ACTION,
    GET_MARKET_WORKSHOPS_LOADED,
    GET_MARKET_WORKSHOPS_LOADING,
    //RESTAURANT
    GET_MARKET_RESTAURANT_FAIL_ACTION,
    GET_MARKET_RESTAURANT_LOADED,
    GET_MARKET_RESTAURANT_LOADING,
    //HOTEL
    GET_MARKET_HOTEL_FAIL_ACTION,
    GET_MARKET_HOTEL_LOADED,
    GET_MARKET_HOTEL_LOADING,
    
} from "./market.types";

export const marketReducer = (state = initialState, action) => {
    switch (action.type) {

        //STAROILD
        case GET_MARKET_STAROILD_LOADING:
            return {
                ...state,
                marketStaroilLoading: true,
                marketStaroilLoaded: false,
                marketStaroilLoadingFail: false,
                marketStaroilData: [],
            }
        case GET_MARKET_STAROILD_LOADED:
            return {
                ...state,
                marketStaroilLoading: false,
                marketStaroilLoaded: true,
                marketStaroilLoadingFail: false,
                marketStaroilData: action.payload && action.payload.data ? action.payload.data.map(el => new marketModel(el)) : []
            }
        case GET_MARKET_STAROILD_FAIL_ACTION:
            return {
                ...state,
                marketStaroilLoading: false,
                marketStaroilLoaded: true,
                marketStaroilLoadingFail: true,
                marketStaroilData: [],
            }

        //WORKSHOPS
        case GET_MARKET_WORKSHOPS_LOADING:
            return {
                ...state,
                marketWorkshopsLoading: true,
                marketWorkshopsLoaded: false,
                marketWorkshopsLoadingFail: false,
                marketWorkshopsData: [],
            }
        case GET_MARKET_WORKSHOPS_LOADED:
            return {
                ...state,
                marketWorkshopsLoading: false,
                marketWorkshopsLoaded: true,
                marketWorkshopsLoadingFail: false,
                marketWorkshopsData: action.payload && action.payload.data ? action.payload.data.map(el => new marketModel(el)) : []
            }
        case GET_MARKET_WORKSHOPS_FAIL_ACTION:
            return {
                ...state,
                marketWorkshopsLoading: false,
                marketWorkshopsLoaded: true,
                marketWorkshopsLoadingFail: true,
                marketWorkshopsData: [],
            }

        //RESTAURANT
        case GET_MARKET_RESTAURANT_LOADING:
            return {
                ...state,
                marketRestaurantLoading: true,
                marketRestaurantLoaded: false,
                marketRestaurantLoadingFail: false,
                marketRestaurantData: [],
            }
        case GET_MARKET_RESTAURANT_LOADED:
            return {
                ...state,
                marketRestaurantLoading: false,
                marketRestaurantLoaded: true,
                marketRestaurantLoadingFail: false,
                marketRestaurantData: action.payload && action.payload.data ? action.payload.data.map(el => new marketModel(el)) : []
            }
        case GET_MARKET_RESTAURANT_FAIL_ACTION:
            return {
                ...state,
                marketRestaurantLoading: false,
                marketRestaurantLoaded: true,
                marketRestaurantLoadingFail: true,
                marketRestaurantData: [],
            }

        //HOTEL
        case GET_MARKET_HOTEL_LOADING:
            return {
                ...state,
                marketHotelLoading: true,
                marketHotelLoaded: false,
                marketHotelLoadingFail: false,
                marketHotelData: [],
            }
        case GET_MARKET_HOTEL_LOADED:
            return {
                ...state,
                marketHotelLoading: false,
                marketHotelLoaded: true,
                marketHotelLoadingFail: false,
                marketHotelData: action.payload && action.payload.data ? action.payload.data.map(el => new marketModel(el)) : []
            }
        case GET_MARKET_HOTEL_FAIL_ACTION:
            return {
                ...state,
                marketHotelLoading: false,
                marketHotelLoaded: true,
                marketHotelLoadingFail: true,
                marketHotelData: [],
            }

        default:
            return {
                ...state
            }
    }
}