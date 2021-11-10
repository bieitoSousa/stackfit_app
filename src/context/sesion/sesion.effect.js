import { SessionJson } from "../../constants/SesionsJson";
import { emmitErrorAction } from "../app/app.actions";
import {
    getSesionFailAction,
    getSesionLoadedAction,
    getSesionLoadingAction
} from "./sesion.actions";


// 
export function getSesionList(dispatch) {
    dispatch(getSesionLoadingAction());
    try {
        dispatch(getSesionLoadedAction(SessionJson));
    } catch (err) {
        dispatch(emmitErrorAction({
            type: 'get prod list in',
            err: err,
            params: params
        }));
        dispatch(getSesionFailAction());
    }
}

