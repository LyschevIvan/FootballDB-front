import {SET_PAGE} from "../types";

export const setPage = (i) => {
    return{
        type: SET_PAGE,
        payload: i
    }
}