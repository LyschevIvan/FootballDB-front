import {GET_PLAYERS, GET_PLAYERS_TO_ADD, SET_FILTER} from "../types";



const initState = {
    players : [],
    clubFilter: "",
    playersToAdd: [],
}

export function playerReducer(state = initState, action){
    switch (action.type){
        case GET_PLAYERS:
            return Object.assign({}, state, {
                players: action.payload
            })
        case SET_FILTER:
            return Object.assign({}, state, {
                clubFilter: action.payload
            })
        case GET_PLAYERS_TO_ADD:
            return Object.assign({}, state, {
                playersToAdd:  action.payload
            })
        default:
            return state
    }

}

export const setFilter = (club) => {
    return {
        type: SET_FILTER,
        payload: club
    }
}
