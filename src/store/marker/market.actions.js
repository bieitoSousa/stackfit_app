import {
    GET_MARKET_STAROILD_LOADING, 
    GET_MARKET_STAROILD_LOADED,
    GET_MARKET_STAROILD_FAIL_ACTION,
    GET_MARKET_WORKSHOPS_LOADING, 
    GET_MARKET_WORKSHOPS_LOADED,
    GET_MARKET_WORKSHOPS_FAIL_ACTION,
    GET_MARKET_RESTAURANT_LOADING, 
    GET_MARKET_RESTAURANT_LOADED,
    GET_MARKET_RESTAURANT_FAIL_ACTION,
    GET_MARKET_HOTEL_LOADING, 
    GET_MARKET_HOTEL_LOADED,
    GET_MARKET_HOTEL_FAIL_ACTION,
} from "./market.types";

//STAROILD
export function getMarketStaroildLoadingAction(data) {
    return {
        type: GET_MARKET_STAROILD_LOADING,
        payload: data
    }
}
export function getMarketStaroildLoadedAction(data) {
    return {
        type: GET_MARKET_STAROILD_LOADED,
        payload: data
    }
}
export function getMarketStaroildFailAction(data) {
    return {
        type: GET_MARKET_STAROILD_FAIL_ACTION,
        payload: data
    }
}
//WORKSHOPS
export function getMarketWorkshopsLoadingAction(data) {
    return {
        type: GET_MARKET_WORKSHOPS_LOADING,
        payload: data
    }
}
export function getMarketWorkshopsLoadedAction(data) {
    return {
        type: GET_MARKET_WORKSHOPS_LOADED,
        payload: data
    }
}
export function getMarketWorkshopsFailAction(data) {
    return {
        type: GET_MARKET_WORKSHOPS_FAIL_ACTION,
        payload: data
    }
}
//RESTAURANT
export function getMarketRestaurantLoadingAction(data) {
    return {
        type: GET_MARKET_RESTAURANT_LOADING,
        payload: data
    }
}
export function getMarketRestaurantLoadedAction(data) {
    return {
        type: GET_MARKET_RESTAURANT_LOADED,
        payload: data
    }
}
export function getMarketRestaurantFailAction(data) {
    return {
        type: GET_MARKET_RESTAURANT_FAIL_ACTION,
        payload: data
    }
}
//HOTEL
export function getMarketHotelLoadingAction(data) {
    return {
        type: GET_MARKET_HOTEL_LOADING,
        payload: data
    }
}
export function getMarketHotelLoadedAction(data) {
    return {
        type: GET_MARKET_HOTEL_LOADED,
        payload: data
    }
}
export function getMarketHotelFailAction(data) {
    return {
        type: GET_MARKET_HOTEL_FAIL_ACTION,
        payload: data
    }
}
/*
//STAROILD
getMarketStaroildLoadingAction
getMarketStaroildLoadedAction
getMarketStaroildFailAction

//WORKSHOPS
getMarketWorkshopsLoadingAction
getMarketWorkshopsLoadedAction
getMarketWorkshopsFailAction
 
//RESTAURANT
getMarketRestaurantLoadingAction
getMarketRestaurantLoadedAction
getMarketRestaurantFailAction
  
//HOTEL
getMarketHotelLoadingAction
getMarketHotelLoadedAction
getMarketHotelFailAction
 
*/