import axios from "axios";
import {ADD_MATCHES, GET_ERROR} from "../types";

export const getMatches = () =>  dispatch => {
    axios.get(`http://localhost:8080/matches`).then( (res) => {
            dispatch({
                type: ADD_MATCHES,
                payload: res.data
            })
        }
    ).catch((e) => {
        dispatch({
            type: GET_ERROR,
            payload: console.log(e),
        })
    })
}