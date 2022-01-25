import './App.css';
import {AppBar, Button, Container, IconButton, Toolbar} from "@mui/material";
import ClubsTable from "./components/clubs/ClubsTable";
import {setPage} from "./store/actions/setPage";
import {connect} from "react-redux";
import {useEffect} from "react";
import CalculateIcon from '@mui/icons-material/Calculate';
import PlayerContainer from "./components/Players/PlayerContainer";
import {TeamPageContainer} from "./components/teams/TeamPageContainer";
import MatchesPageContainer from "./components/matches/MatchesPageContainer";
import {CalcPageContainer} from "./components/calc/CalcPageContainer";

function App(props) {
    useEffect(()=>{
        // props.setPage(0)
    })
  return (
    <div>

        <AppBar position={"static"} color={"primary"}>
            <Container>
                <Toolbar >
                    <Button className={"menu-button"} onClick={() => props.setPage(0)}><label>Clubs</label></Button>
                    <Button className={"menu-button"} onClick={() =>props.setPage(1)}>Teams</Button>
                    <Button className={"menu-button"} onClick={() =>props.setPage(2)}>Players</Button>
                    <Button className={"menu-button"} onClick={() =>props.setPage(3)}>Matches</Button>
                    <IconButton className={"menu-button"} onClick={() =>props.setPage(4)}>
                        <CalculateIcon/>
                    </IconButton>
                </Toolbar>
            </Container>

        </AppBar>



        {props.page === 0 && <ClubsTable/>}
        {props.page === 1 && <TeamPageContainer/>}
        {props.page === 2 && <PlayerContainer/>}
        {props.page === 3 && <MatchesPageContainer/>}
        {props.page === 4 && <CalcPageContainer/>}
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
