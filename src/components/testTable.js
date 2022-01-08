import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getPlayers} from "../store/actions/getPlayers";

const TestTable = (props) =>{
    useEffect(() => {
        props.getPlayers()
    })
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>club</TableCell>
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
                        props.players.map( row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.clubName}</TableCell>
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

const mapStateToProps = (state) => ({
    players: state.players.players
})

export default connect(mapStateToProps, {getPlayers})(TestTable)

