import {GET_CAPTAINS, GET_STATS, GET_TEAMS} from "../types";

const initState = {
    teams: [],
    teams_loaded : false,
    captains: [],
    captains_loaded: false,
    stats: []
}

export const teamsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TEAMS:
            return {
                teams: action.payload,
                teams_loaded: true,
                captains_loaded: false,
                captains: [],
                stats: []

            }


        case GET_CAPTAINS:
            return Object.assign({}, state,{
                captains: [...state.captains, action.payload],
                captains_loaded: true
            })
        case GET_STATS:
            return Object.assign({}, state, {
                stats: [...state.stats, action.payload]
            })
        default: return state
    }
}

