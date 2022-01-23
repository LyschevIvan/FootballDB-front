import {GET_CLUBS,} from "../types";

let initState = {
    clubs : []
};

export const clubReducer = (state = initState, action) => {
    switch (action.type){
        case GET_CLUBS:
            return{
                clubs: action.payload
            }
        default:
            return state


    }
}