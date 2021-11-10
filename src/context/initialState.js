import { appState } from "./app/app.state";
import { exerciseState } from "./exercise/exercise.state";
import { marketState } from "./marker/market.state";
import { regionState } from "./region/region.state";
import { sesionState } from "./sesion/sesion.state";

export const initialState = {
    ...appState,
    ...marketState,
    ...regionState,
    ...sesionState,
    ...exerciseState,

}

