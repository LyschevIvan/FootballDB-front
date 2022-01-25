import {getTeams} from "../../store/actions/getTeams";
import {getMatches} from "../../store/actions/getMatches";
import {connect} from "react-redux";
import {Box, Container, FormControl, IconButton, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import axios from "axios";

const CalcForm = (props) => {

    const [team1, setTeam1] = useState(-1)
    const [team2, setTeam2] = useState(-1)
    const [teamsLoaded, setTeamsLoaded] = useState(false)
    const [result, setResult] = useState(null)


    useEffect(() => {
        if (!teamsLoaded){
            props.getTeams()
            setTeamsLoaded(true)
        }

    }, [props.teams, teamsLoaded])

    const handleTeam1Change = (event) =>{
        setTeam1(event.target.value)
    }

    const handleTeam2Change = (event) =>{
        setTeam2(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            method:'post',
            url: 'http://localhost:8080/probability',
            data:{
                team1: team1.toString(),
                team2: team2.toString()
            }
        }).then(res => {
            setResult(res.data)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <Container sx={
                {display: 'flex', justifyContent: "space-evenly"}
            }>
                <FormControl margin={'normal'}
                             sx={{width:'40%'}}>
                    <InputLabel id={"select-team-1-label"}>Select Team 1</InputLabel>
                    <Select
                        labelId={"select-team-1-label"}
                        label={"Select Team 1"}
                        value={team1}
                        onChange={handleTeam1Change}>
                        {props.teams.map((row, i) => {
                            if(row.id !== team2){
                                return(
                                    <MenuItem value={row.id} key={i}>{row.clubName} - {row.id} </MenuItem>
                                )
                            }
                        })}




                    </Select>
                </FormControl>
                <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                    <IconButton disabled={team1===-1 || team2===-1} type={'submit'}>
                        <CompareArrowsIcon/>
                    </IconButton>

                </Box>

                <FormControl fullWidth margin={'normal'} sx={{width:'40%'}}>
                    <InputLabel  id={"select-team-2-label"}>Select Team 2</InputLabel>
                    <Select
                        labelId={"select-team-2-label"}
                        label={"Select Team 2"}
                        value={team2}
                        onChange={handleTeam2Change}>
                        {props.teams.map((row, i) => {
                            if(row.id !== team1){
                                return(
                                    <MenuItem value={row.id} key={i}>{row.clubName} - {row.id} </MenuItem>
                                )
                            }
                        })}
                    </Select>
                </FormControl>

            </Container>
            <Container sx={
                {display: 'flex', justifyContent: "space-evenly"}
            }>
                <Typography variant={"h4"}>{result}</Typography>
            </Container>
        </form>

    )
}
const mapStateToProps = (state) => {
    return({
        teams: state.teams.teams
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        getTeams: () => dispatch(getTeams()),
        getMatches: () => dispatch(getMatches())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(CalcForm)