import {Component} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {connect} from "react-redux";
import {getTeams} from "../../store/actions/getTeams";
import {getPlayer} from "../../utils/getPlayer";



class TeamsTable extends Component{
    componentDidMount() {
        this.props.getTeams()
        this.props.getCaptains()
    }

    render() {
        return(
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Captain</TableCell>
                            <TableCell>Stats</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.teams.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell></TableCell>
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
        teams: state.teams.teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTeams: () => dispatch(getTeams()),
        getCaptains: () => dispatch(getCaptains())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsTable)

