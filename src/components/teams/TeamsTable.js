import {Component} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {connect} from "react-redux";
import {getTeams} from "../../store/actions/getTeams";
import {getCaptains} from "../../store/actions/getCaptains";



class TeamsTable extends Component{
    componentDidMount() {

        this.props.teams_loaded === false && this.props.getTeams()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teams_loaded === false && prevProps.teams_loaded !== this.props.teams_loaded){
            this.props.getCaptains()
        }
    }

    render() {
        return(
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Club</TableCell>
                            <TableCell>Captain</TableCell>
                            <TableCell>Stats</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.teams.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.clubName}</TableCell>
                                    <TableCell>{this.props.captains_loaded === true && this.props.captains[i].playerName}</TableCell>
                                    <TableCell>100</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        teams: state.teams.teams,
        captains: state.teams.captains,
        teams_loaded: state.teams.teams_loaded,
        captains_loaded: state.teams.captains_loaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTeams: () => dispatch(getTeams()),
        getCaptains: () => dispatch(getCaptains())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsTable)

