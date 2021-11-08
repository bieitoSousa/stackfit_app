import { appState } from "./app/app.state";
import { marketState } from "./marker/market.state";
import { regionState } from "./region/region.state";

export const initialState = {
    ...appState,
    ...marketState,
    ...regionState,
    
}

