import axios from "axios";

export const getPlayer = (id) => {
    return axios.get(`http://localhost:8080/player/`+ id)
}