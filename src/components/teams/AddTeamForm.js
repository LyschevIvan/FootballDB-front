import {
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table, TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getPlayersToAdd} from "../../store/actions/getPlayers";
import axios from "axios";
import {getTeams} from "../../store/actions/getTeams";


const AddTeamForm = (props) =>{

    const [club, setClub] = useState("")
    const [captain, setCaptain] = useState(0)
    const [main, setMain] = useState([])
    const [sub, setSub] = useState([])

    const onClubChange = (event) => {
        setClub(event.target.value)
    }

    const onCaptainChange = (event) => {
        setCaptain(event.target.value)
    }

    const chooseMainToggle = (event) => {
        let value = Number(event.target.value)
        let index = main.indexOf(value)
        let newMainState = [...main];

        if(index === -1) {
            setMain([...main, value])
        } else {
            newMainState.splice(index, 1)
            setMain(newMainState)
        }
    }

    const chooseSubToggle = (event) => {
        let value = Number(event.target.value)
        let index = sub.indexOf(value)
        let newSubState = [...sub];

        if(index === -1) {
            setSub([...sub, value])
        } else {
            newSubState.splice(index, 1)
            setSub(newSubState)
        }
    }

    const submit = (event) =>{
        event.preventDefault()

        axios({
            method: "post",
            url: "http://localhost:8080/teams",
            data:{
                clubName: club.toString(),
                captain: captain.toString()
            }
        }).then( res => {
                axios({
                    method: "post",
                    url: "http://localhost:8080/teamsMain",
                    data:{
                        teamId: res.data.toString(),
                        teamMainPlayerDtos: main.map(r =>({
                            playerId: r.toString()
                        }
                        ))
                    }             }).then(res => {
                    props.getTeams()
                    setClub("")
                }).catch(err => console.log(err))
            }

        ).catch(err => console.log(err))

    }

    useEffect(() => {
        props.getPlayersToAdd(club)
        setCaptain(0)
        setMain([])
        setSub([])
    }, [club])

    useEffect(() => {
        setMain([captain])
        setSub([])
        console.log(captain)
    }, [captain])

    return(
        <form onSubmit={submit}>
            <FormControl fullWidth>
                <InputLabel id={"select-club-label"}>Choose Club</InputLabel>
                <Select
                    value={club}
                    label={""}
                    labelId={"select-club-label"}

                onChange={onClubChange}>
                    {
                        props.clubs.map((row,i) => (
                            <MenuItem key={i} value={row.name}>{row.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            {
                club!=="" &&
                <FormControl fullWidth>
                    <InputLabel id={"select-team-captain"}>Choose Captain</InputLabel>
                    <Select
                        value={captain}
                        label={""}
                        labelId={"select-team-captain"}
                        onChange={onCaptainChange}>

                    {
                        props.players.map((row, i) => (
                            <MenuItem key={i} value={row.id}>{row.playerName + " "+ row.playerSurname}</MenuItem>
                        ))
                    }
                    </Select>
                </FormControl>

            }
            {
                captain!==0 &&
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{main.length}/11</TableCell>
                                <TableCell>name</TableCell>
                                <TableCell>surname</TableCell>
                                <TableCell>nationality</TableCell>
                                <TableCell>pace</TableCell>
                                <TableCell>shooting</TableCell>
                                <TableCell>pass</TableCell>
                                <TableCell>dribbling</TableCell>
                                <TableCell>defending</TableCell>
                                <TableCell>physicality</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.players.map((row, i) => {
                                    if (row.id === captain){
                                        return (
                                            <TableRow key={i} >
                                                <TableCell> {<Checkbox checked disabled/>} </TableCell>
                                                <TableCell>{row.playerName}</TableCell>
                                                <TableCell>{row.playerSurname}</TableCell>
                                                <TableCell>{row.nationality}</TableCell>
                                                <TableCell>{row.pace}</TableCell>
                                                <TableCell>{row.shooting}</TableCell>
                                                <TableCell>{row.pass}</TableCell>
                                                <TableCell>{row.dribbling}</TableCell>
                                                <TableCell>{row.defending}</TableCell>
                                                <TableCell>{row.physicality}</TableCell>
                                                <TableCell>{row.price}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                    return (
                                        <TableRow key={i} >
                                            <TableCell> {<Checkbox checked = {main.indexOf(row.id) !== -1} value={row.id} onClick={chooseMainToggle} disabled={main.length === 11 && main.indexOf(row.id) === -1}/>} </TableCell>
                                            <TableCell>{row.playerName}</TableCell>
                                            <TableCell>{row.playerSurname}</TableCell>
                                            <TableCell>{row.nationality}</TableCell>
                                            <TableCell>{row.pace}</TableCell>
                                            <TableCell>{row.shooting}</TableCell>
                                            <TableCell>{row.pass}</TableCell>
                                            <TableCell>{row.dribbling}</TableCell>
                                            <TableCell>{row.defending}</TableCell>
                                            <TableCell>{row.physicality}</TableCell>
                                            <TableCell>{row.price}</TableCell>
                                        </TableRow>
                                    )
                                }
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {
                main.length === 11 &&
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{sub.length}/7</TableCell>
                                <TableCell>name</TableCell>
                                <TableCell>surname</TableCell>
                                <TableCell>nationality</TableCell>
                                <TableCell>pace</TableCell>
                                <TableCell>shooting</TableCell>
                                <TableCell>pass</TableCell>
                                <TableCell>dribbling</TableCell>
                                <TableCell>defending</TableCell>
                                <TableCell>physicality</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.players.map((row, i) => {
                                        if (main.indexOf(row.id) === -1){
                                            return (
                                                <TableRow key={i} >
                                                    <TableCell> {<Checkbox checked={sub.indexOf(row.id) !== -1} value={row.id} onClick={chooseSubToggle} disabled={sub.length === 7 && sub.indexOf(row.id) === -1}/>} </TableCell>
                                                    <TableCell>{row.playerName}</TableCell>
                                                    <TableCell>{row.playerSurname}</TableCell>
                                                    <TableCell>{row.nationality}</TableCell>
                                                    <TableCell>{row.pace}</TableCell>
                                                    <TableCell>{row.shooting}</TableCell>
                                                    <TableCell>{row.pass}</TableCell>
                                                    <TableCell>{row.dribbling}</TableCell>
                                                    <TableCell>{row.defending}</TableCell>
                                                    <TableCell>{row.physicality}</TableCell>
                                                    <TableCell>{row.price}</TableCell>
                                                </TableRow>
                                            )
                                        }

                                    }
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {
                main.length === 11 && <Button type={"submit"}>Add</Button>
            }

        </form>
    )
}
const mapStateToProps = (state) => {
    return{
        clubs: state.clubs.clubs,
        players: state.players.playersToAdd
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getPlayersToAdd: (club) => dispatch(getPlayersToAdd(club)),
        getTeams: () => dispatch(getTeams())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm)
