import axios from "axios";
import {GET_CLUBS, GET_ERROR} from "../types";


export const getClubs = () =>  dispatch => {
    axios.get(`http://localhost:8080/clubs`).then( (res) => {
            dispatch({
                type: GET_CLUBS,
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
