import { initialState } from "../initialState";
import { AppSettingsModel,  ErrorInfo,  } from "./app.models";
import {
    EMMIT_CRITICAL_ERROR,
    EMMIT_ERROR,
    GET_APP_SETTINGS_FAIL,
    GET_APP_SETTINGS_LOADED,
    GET_APP_SETTINGS_LOADING,
    HIDE_ERROR_MESSAGE,
} from "./app.types";

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APP_SETTINGS_LOADING:
            return {
                ...state,
                getAppSettingsLoading: true,
                getAppSettingsLoaded: false,
                getAppSettingsFail: false,
                getAppSettingsData: null,
            }
        case GET_APP_SETTINGS_LOADED:
            let settings = null;
            if (action.payload && action.payload.settings) {
                settings = new AppSettingsModel(action.payload.settings);
            }

            return {
                ...state,
                getAppSettingsLoading: false,
                getAppSettingsLoaded: true,
                getAppSettingsFail: false,
                getAppSettingsData: settings,
                // currentCurrency: settings && settings.iso_code_currency ? settings.iso_code_currency : '',
                // currentCurrencySymbol: settings && settings.symbol_currency ? settings.symbol_currency :  settings.isocode
            }
        case GET_APP_SETTINGS_FAIL:
            return {
                ...state,
                getAppSettingsLoading: false,
                getAppSettingsLoaded: false,
                getAppSettingsFail: true,
                getAppSettingsData: null,
            }

        case EMMIT_ERROR:
            const errCol = [].concat(state.errorsState);
            if (action.payload) {
                errCol.push(new ErrorInfo(action.payload));
            }

            return {
                ...state,
                errorsState: errCol
            }
        case HIDE_ERROR_MESSAGE:
            let errData = [].concat(state.errorsState);
            if (action.payload && action.payload.id) {
                // const hideEl = errData.find(el => el.id === action.payload.id);
                // hideEl.isActive = false;
                errData = errData.filter(el => el.id !== action.payload.id);
            }
            return {
                ...state,
                errorsState: errData
            }

        case EMMIT_CRITICAL_ERROR:
            return {
                ...state,
                criticalErrorData: action.payload
            }

       
        
        default:
            return {
                ...state
            }
    }
}