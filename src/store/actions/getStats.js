import store from "../store";
import axios from "axios";
import {GET_ERROR, GET_STATS} from "../types";

export const getStats = () =>  dispatch => {
    let teams = store.getState().teams.teams
    for(const team of teams){
        console.log(`http://localhost:8080/stats/`+ team.id)
        axios.get(`http://localhost:8080/stats/`+ team.id).then( (res) => {
                dispatch({
                    type: GET_STATS,
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