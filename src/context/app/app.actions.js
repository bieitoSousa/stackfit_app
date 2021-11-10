import {
    GET_APP_SETTINGS_LOADING,
    GET_APP_SETTINGS_LOADED,
    GET_APP_SETTINGS_FAIL,
    EMMIT_CRITICAL_ERROR,
    EMMIT_ERROR,
    HIDE_ERROR_MESSAGE,
} from "./app.types";

export function getAppSettingsLoadingAction(data) {
    return {
        type: GET_APP_SETTINGS_LOADING,
        payload: data
    }
}
export function getAppSettingsLoadedAction(data) {
    return {
        type: GET_APP_SETTINGS_LOADED,
        payload: data
    }
}
export function getAppSettingsFailAction(data) {
    return {
        type: GET_APP_SETTINGS_FAIL,
        payload: data
    }
}

export function emmitErrorAction(data) {
    console.log('[Error] - (!) - ', JSON.stringify(data));
    return {
        type: EMMIT_ERROR,
        payload: data
    }
}
export function hideErrorMessageAction(data) {
    return {
        type: HIDE_ERROR_MESSAGE,
        payload: data
    }
}
export function emmitCriticalErrorAction(error) {
    console.log('[Critical Error] - (!) - ', JSON.stringify(error));
    return {
        type: EMMIT_CRITICAL_ERROR,
        payload: error
    }
}
