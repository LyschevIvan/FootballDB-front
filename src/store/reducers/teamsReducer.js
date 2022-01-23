import {GET_CAPTAINS, GET_TEAMS} from "../types";

const initState = {
    teams: [],
    captains: []
}

export const teamsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TEAMS:
            return {
                teams: action.payload
            }


        case GET_CAPTAINS:
            return Object.assign(state, {
                captains: state.captains + action.payload
            })
        default: return state
    }
}