import {Component} from "react";
import PlayersTable from "./PlayersTable";
import {setFilter} from "../../store/reducers/playerReducer";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {connect} from "react-redux";

class PlayerContainer extends Component{


    constructor(props) {
        super(props);
        this.state = {
            club: ""
        }
    }

    onFilterChange = (event) => {
        console.log(event.target.value)
        this.setState({
            club: event.target.value
        })
        this.props.setFilter(event.target.value)
    }



    render() {
        return(
            <>
                <FormControl fullWidth margin={'normal'} sx={{width:"51%"}}>
                    <InputLabel id={"select-label"}>Choose Club</InputLabel>
                    <Select onChange={this.onFilterChange}
                            value={this.state.club}
                            label={"Choose Club"}
                            labelId={"select-label"} >
                        {this.props.clubs.map((row,i) => (
                            <MenuItem key={i} value={row.name}>{row.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <PlayersTable/>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        clubs: state.clubs.clubs
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setFilter : (club) => dispatch(setFilter(club)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
