import {GET_PLAYERS} from "../types";

const initState = {
    players : []
}

export default function (state = initState, action){
    switch (action.type){
        case GET_PLAYERS:
            return Object.assign(state, {players: action.payload})
        default:
            return state
    }

}
