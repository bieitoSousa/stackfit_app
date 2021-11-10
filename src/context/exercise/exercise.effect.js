import { ExerciseJson} from "../../constants/ExerciseJson";
import { emmitErrorAction } from "../app/app.actions";
import {
    getExerciseFailAction,
    getExerciseLoadedAction,
    getExerciseLoadingAction
} from "./exercise.actions";


// 
export function getExerciseList(dispatch) {
    dispatch(getExerciseLoadingAction());
    try {

        dispatch(getExerciseLoadedAction(ExerciseJson));
    } catch (err) {
        dispatch(emmitErrorAction({
            
            type: 'get prod list in',
            err: err,
            params: ''
        }));
        dispatch(getExerciseFailAction());
    }
}

