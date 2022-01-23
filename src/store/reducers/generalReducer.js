import {SET_PAGE} from "../types";

let initState = {
    page: 0
}

export const generalReducer = (state = initState, action) => {
    switch (action.type){
        case SET_PAGE:
            return {
                page: action.payload
            }
        default: return state
    }
}