import axios from "axios";
import {GET_ERROR, GET_PLAYERS} from "../types";

export const getPlayers = () =>  dispatch => {

    axios.get(`http://localhost:8080/players?clubName=Wolves`).then( (res) =>
        dispatch({
            type: GET_PLAYERS,
            payload: res.data
        })
    ).catch((e) => {
        dispatch({
            type: GET_ERROR,
            payload: console.log(e),
        })
    })
}
