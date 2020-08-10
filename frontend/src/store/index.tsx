import { combineReducers } from "redux";
import {systemReducer} from "./system/reducer";

export const rootReducer =  combineReducers({
    system: systemReducer,
})

export type RootState = ReturnType<typeof rootReducer>

