import {Component} from "react";
import {IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TeamsTable from "./TeamsTable";
import AddTeamForm from "./AddTeamForm";

export class TeamPageContainer extends Component{



    render() {
        return (
            <div>
                <TeamsTable/>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <AddTeamForm/>
            </div>
        );
    }
}
