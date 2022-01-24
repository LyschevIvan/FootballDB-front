import axios from "axios";
import {GET_CAPTAINS, GET_ERROR} from "../types";
import store from "../store";

export const getCaptains = () =>  dispatch => {
    let teams = store.getState().teams.teams
    for(const team of teams){
        console.log(`http://localhost:8080/player/`+ team.captain)
        axios.get(`http://localhost:8080/player/`+ team.captain).then( (res) => {
            console.log(res)
                dispatch({
                    type: GET_CAPTAINS,
                    payload: res.data
                })
            }
        ).catch((e) => {
            console.log(team.captain)
            dispatch({
                type: GET_ERROR,
                payload: console.log(e),
            })
        })
    }
}