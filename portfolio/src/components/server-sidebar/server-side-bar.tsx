import { Button, Grid } from "@mui/material";
import ServerBubble from "../server-bubble/server-bubble";
import './styles/server-sidebar.css';

const ServerSidebar = () => {
  return (
    <Grid container direction="column" className='SidebarContainer'>
      <Grid item>
        <ServerBubble imgSrc="./profile-pic" onClick={() => console.log('clicked!')} />
      </Grid>
      <Grid item>
        <ServerBubble imgSrc="./profile-pic" />
      </Grid>
      <Grid item>
        <ServerBubble imgSrc="./profile-pic" />
      </Grid>
    </Grid>
  );
};

export default ServerSidebar;
