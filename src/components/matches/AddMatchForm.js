import {getTeams} from "../../store/actions/getTeams";
import {connect} from "react-redux";
import {Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import axios from "axios";
import {format} from "date-fns";
import {getMatches} from "../../store/actions/getMatches";

const AddMatchForm = (props) => {

    const [team1, setTeam1] = useState(-1)
    const [team2, setTeam2] = useState(-1)
    const [teamsLoaded, setTeamsLoaded] = useState(false)
    const [points, setPoints] = useState(0)
    const [tour, setTour] = useState(1)
    const [date, setDate] = useState(null)


    useEffect(() => {
        if (!teamsLoaded){
            props.getTeams()
            setTeamsLoaded(true)
        }
        if (props.teams.length >=2){
            setTeam1(props.teams[0])
            setTeam2(props.teams[1])
        }

    }, [props.teams])

    const handleTeam1Change = (event) =>{
        setTeam1(event.target.value)
    }

    const handleTeam2Change = (event) =>{
        setTeam2(event.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: "http://localhost:8080/matches",
            data:{
                team1_id: team1.toString(),
                team2_id: team2.toString(),
                league_name: "Premier League",
                score: points.toString(),
                tour: tour.toString(),
                time: format(date, 'dd.MM.yyyy')
            }
        }).then(res => props.getMatches())
    }


    return(
        <form onSubmit={submit}>
            {props.teams.length >= 2 &&
                <>
                    <Container sx={
                                    {display: 'flex', justifyContent: "space-evenly"}
                                }>
                                <FormControl margin={'normal'}
                                    sx={{width:'40%'}}>
                                <InputLabel id={"select-team-1-label"}>Select Winner Team</InputLabel>
                                    <Select
                                        labelId={"select-team-1-label"}
                                        label={"Select Winner Team"}
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

                        <FormControl fullWidth margin={'normal'} sx={{width:'40%'}}>
                            <InputLabel  id={"select-team-2-label"}>Select Looser Team</InputLabel>
                            <Select
                                labelId={"select-team-2-label"}
                                label={"Select Looser Team"}
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
                    {/*<Box sx={*/}
                    {/*    {display: 'flex', justifyContent: "space-evenly"}*/}
                    {/*}>*/}
                    {/*    <KeyboardDoubleArrowDown/>*/}
                    {/*</Box>*/}
                    <Container sx={{display:"flex", justifyContent: "space-evenly"}}>
                        <TextField variant={"outlined"} label={"point for winner team"} margin={"normal"} sx={{width:"20%"}} onChange={(value) => setPoints(Number(value.target.value))}/>
                        <TextField variant={"outlined"} label={"tour"} margin={"normal"} sx={{width:"20%"}} onChange={(value) => setTour(Number(value.target.value))}/>
                        <Box  sx={{width:"20%", display:"flex", alignItems:"center", paddingTop:"8px"}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                <DatePicker  onChange={value => setDate(value)} value={date} mask={"__.__.____"}  renderInput={(params) => <TextField {...params}/> }  />
                            </LocalizationProvider>
                        </Box>

                    </Container>
                    <Container sx={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
                        <Button variant={"outlined"} size={"large"} type={"submit"}>Add</Button>
                    </Container>
                </>





            }
            {/*{*/}
            {/*    props.teams.length < 2 &&*/}
            {/*    <Label>Not enough teams</Label>*/}
            {/*}*/}

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

export default connect(mapStateToProps, mapDispatchToProps)(AddMatchForm)