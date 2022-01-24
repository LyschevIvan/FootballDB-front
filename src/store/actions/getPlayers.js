import axios from "axios";
import {GET_ERROR, GET_PLAYERS, GET_PLAYERS_TO_ADD} from "../types";

export const getPlayers = (club) =>  dispatch => {
    console.log(`http://localhost:8080/players?clubName=`+club)
    axios.get(`http://localhost:8080/players?clubName=`+club).then( (res) =>{
        console.log(res)
        dispatch({
            type: GET_PLAYERS,
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

export const getPlayersToAdd = (club) =>  dispatch => {
    console.log(`http://localhost:8080/players?clubName=`+club)
    axios.get(`http://localhost:8080/players?clubName=`+club).then( (res) =>{
            console.log(res)
            dispatch({
                type: GET_PLAYERS_TO_ADD,
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
