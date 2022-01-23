import {GET_PLAYERS} from "../types";



const initState = {
    players : []
}

export function playerReducer(state = initState, action){
    switch (action.type){
        case GET_PLAYERS:
            return {
                players: action.payload
            }
        default:
            return state
    }

}
