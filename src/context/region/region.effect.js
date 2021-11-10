import { emmitErrorAction } from "../app/app.actions";
import {
    getRegionSpainFailAction,
    getRegionSpainLoadedAction,
    getRegionSpainLoadingAction
} from "./region.actions";


// 
export function getRegionSpainList(dispatch) {
    dispatch(getRegionSpainLoadingAction());
    try {
        dispatch(getRegionSpainLoadedAction(json));
    } catch (err) {
        dispatch(emmitErrorAction({
            type: 'get prod list in',
            err: err,
            params: params
        }));
        dispatch(getRegionSpainFailAction());
    }
}
const json = 
{
    data:
    [
        {   title : 'spain',
            desc  : '', 
            latitude: 40.463667,
            longitude: -3.74922,
            latitudeDelta: 12,
            longitudeDelta: 12,
        }
    ]
}
