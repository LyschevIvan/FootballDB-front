import {GET_CAPTAINS, GET_TEAMS} from "../types";

const initState = {
    teams: [],
    teams_loaded : false,
    captains: [],
    captains_loaded: false
}

export const teamsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TEAMS:
            return {
                teams: action.payload,
                teams_loaded: true,
                captains: []
            }


        case GET_CAPTAINS:
            return Object.assign({}, state,{
                captains: [...state.captains, action.payload],
                captains_loaded: true
            })
        default: return state
    }
}

