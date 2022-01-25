import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {clubReducer} from "./clubsReducer";
import {generalReducer} from "./generalReducer";
import {teamsReducer} from "./teamsReducer";
import {matchesReducer} from "./matchesReducer";

export default combineReducers({
    general: generalReducer,
    players: playerReducer,
    clubs: clubReducer,
    teams: teamsReducer,
    matches: matchesReducer
})
