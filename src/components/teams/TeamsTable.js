import {Component} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {connect} from "react-redux";
import {getTeams} from "../../store/actions/getTeams";
import {getCaptains} from "../../store/actions/getCaptains";
import {getStats} from "../../store/actions/getStats";



class TeamsTable extends Component{
    componentDidMount() {

        this.props.teams_loaded === false && this.props.getTeams()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teams_loaded === false && prevProps.teams_loaded !== this.props.teams_loaded){
            this.props.getCaptains()
            this.props.getStats()
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
                                    <TableCell>{this.props.captains[i] !== undefined && this.props.captains[i].playerName}</TableCell>
                                    <TableCell>{this.props.stats[i] !== undefined && this.props.stats[i]}</TableCell>
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
        captains_loaded: state.teams.captains_loaded,
        stats: state.teams.stats
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTeams: () => dispatch(getTeams()),
        getCaptains: () => dispatch(getCaptains()),
        getStats: () => dispatch(getStats())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsTable)

