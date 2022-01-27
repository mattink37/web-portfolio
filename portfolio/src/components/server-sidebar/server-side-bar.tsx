import { Button, Grid } from "@mui/material";
import ServerBubble from "../server-bubble/server-bubble";
import './styles/server-sidebar.css';

const ServerSidebar = () => {
  return (
    <Grid container direction="column" className='SidebarContainer'>
      <Grid item>
        <ServerBubble imgSrc="" />
      </Grid>
      <Grid item>
        <Button>B</Button>
      </Grid>
      <Grid item>
        <Button>C</Button>
      </Grid>
    </Grid>
  );
};

export default ServerSidebar;
