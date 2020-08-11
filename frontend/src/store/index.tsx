import { combineReducers } from "redux";
import {systemReducer} from "./system/reducer";
import {threadReducer} from './threads/reducer';

export const rootReducer =  combineReducers({
    system: systemReducer,
    threads: threadReducer
})

export type RootState = ReturnType<typeof rootReducer>

