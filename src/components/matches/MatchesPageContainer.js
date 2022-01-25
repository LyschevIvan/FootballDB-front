import {getTeams} from "../../store/actions/getTeams";
import {connect} from "react-redux";
import AddMatchForm from "./AddMatchForm";
import MatchesTable from "./MatchesTable";

const MatchesPageContainer = () => {
    return(
        <>
            <MatchesTable/>
            <AddMatchForm/>
        </>

    )

}

const mapStateToProps = (state) => {
    return({
        teams: state.teams.teams
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        getTeams: () => dispatch(getTeams())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchesPageContainer)