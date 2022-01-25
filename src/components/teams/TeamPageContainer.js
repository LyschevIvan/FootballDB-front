import {Container, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TeamsTable from "./TeamsTable";
import AddTeamForm from "./AddTeamForm";
import {useState} from "react";

export const TeamPageContainer = () => {
    const [add, setAdd] = useState(false)
    return (
        <div>
            <Container>
                {   !add &&
                    <>
                        <TeamsTable/>
                        <IconButton onClick={() => setAdd(true)}>
                            <AddIcon/>
                        </IconButton>
                    </>

                }
                {
                    add && <AddTeamForm setAdd={(v)=>setAdd(v)}/>
                }

            </Container>

        </div>
    );

}
