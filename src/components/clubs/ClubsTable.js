import {Component} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {getClubs} from "../../store/actions/getClubs";
import {connect} from "react-redux";

class ClubsTable extends Component{


    componentDidMount() {
        this.props.onGet()
    }

    render() {
        return(
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Coach</TableCell>
                            <TableCell>Owner</TableCell>
                            <TableCell>League</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Last position</TableCell>
                            <TableCell>Recent score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.clubs.map((row,i) => (
                                <TableRow key = {i}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.coachName}</TableCell>
                                    <TableCell>{row.ownerName}</TableCell>
                                    <TableCell>{row.leagueName}</TableCell>
                                    <TableCell>{row.country}</TableCell>
                                    <TableCell>{row.city}</TableCell>
                                    <TableCell>{row.lastPos}</TableCell>
                                    <TableCell>{row.recentScore}</TableCell>
                                </TableRow>
                                )

                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clubs: state.clubs.clubs
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onGet: () => dispatch(getClubs())
    }
}

export default connect(mapStateToProps, mapDispatchToState)(ClubsTable);