import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getMatches} from "../../store/actions/getMatches";

const MatchesTable = (props) => {

    useEffect(()=>{
        if (props.page === 3){
            props.getMatches()
        }

    }, [props.page])

    return(

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Team 1</TableCell>
                        <TableCell>Team 2</TableCell>
                        <TableCell>League</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Tour</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.matches.map((row,i) => (
                            <TableRow key={i} >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.team1_id}</TableCell>
                                <TableCell>{row.team2_id}</TableCell>
                                <TableCell>{row.league_name}</TableCell>
                                <TableCell>{row.score}</TableCell>
                                <TableCell>{row.tour}</TableCell>
                                <TableCell>{row.time}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = (state) => (
    {
        matches: state.matches.matches,
        page: state.general.page
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        getMatches: () => dispatch(getMatches())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(MatchesTable)