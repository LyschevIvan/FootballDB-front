import './App.css';
import TestTable from "./components/testTable";
import {AppBar, Button, Toolbar} from "@mui/material";
import ClubsTable from "./components/clubs/ClubsTable";
import {setPage} from "./store/actions/setPage";
import {connect} from "react-redux";
import {useEffect} from "react";
import TeamsTable from "./components/teams/TeamsTable";
import PlayerContainer from "./components/Players/PlayerContainer";
import {TeamPageContainer} from "./components/teams/TeamPageContainer";

function App(props) {
    useEffect(()=>{
        // props.setPage(0)
    })
  return (
    <div>
        <AppBar position={"static"} color={"primary"}>
            <Toolbar >
                <Button className={"menu-button"} onClick={() => props.setPage(0)}><label>Clubs</label></Button>
                <Button className={"menu-button"} onClick={() =>props.setPage(1)}>Teams</Button>
                <Button className={"menu-button"} onClick={() =>props.setPage(2)}>Players</Button>
                <Button className={"menu-button"} onClick={() =>props.setPage(3)}>Matches</Button>
            </Toolbar>

        </AppBar>


        {/*{props.page === 0 && <TestTable/>}*/}
        {props.page === 0 && <ClubsTable/>}
        {props.page === 1 && <TeamPageContainer/>}
        {props.page === 2 && <PlayerContainer/>}
        </div>
  );
}
const mapStateToProps = (state) => {
    return{
        page: state.general.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setPage: (i) => dispatch(setPage(i))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
