import {ADD_MATCHES} from "../types";

const initState = {
    matches: []
}

export const matchesReducer = (state = initState, action) => {
    switch (action.type){
        case ADD_MATCHES:
            return Object.assign({}, state, {
                matches: action.payload
            })
        default:
            return state
    }
}
