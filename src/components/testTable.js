import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {connect} from "react-redux";
import {Component} from "react";
import {getPlayers} from "../store/actions/getPlayers";

class TestTable extends Component {

    componentDidMount() {
        this.props.onGet()
    }

    render() {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
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
                            this.props.players.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell>{row.id}</TableCell>
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
                            ))
                        }
                    </TableBody>
                </Table>

            </TableContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        players: state.players.players
    }
}

const mapDispatchToState = (dispatch) =>{
    return{
        onGet : () => dispatch(getPlayers())
    }
}
export default connect(mapStateToProps, mapDispatchToState )(TestTable)

