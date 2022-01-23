import axios from "axios";
import {GET_ERROR, GET_TEAMS} from "../types";

export const getTeams = () =>  dispatch => {
    axios.get(`http://localhost:8080/teams`).then( (res) => {
            dispatch({
                type: GET_TEAMS,
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