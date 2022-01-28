import { Button, Grid } from "@mui/material";
import { HslaColorObject } from "../../common/colors";
import ServerBubble from "../server-bubble/server-bubble";
import Divider from "./divider";
import './styles/server-sidebar.css';

const ServerSidebar = () => {
  const hsla: HslaColorObject = {
    h: '0',
    s: '0%',
    l: '100%',
    a: '0.06'
  };
  return (
    <Grid container direction="column" className='SidebarContainer'>
      <Grid item className='TopPadding'>
        <Grid item className='HomeBubble'>
          <ServerBubble imgSrc="./profile-pic" onClick={() => console.log('clicked!')} />
        </Grid>
        <Divider width={32} height={2} hsla={hsla} />
        <Grid item className='ServerContainer'>
          <Grid item className="ServerBubblePadding">
            <ServerBubble imgSrc="./profile-pic" onClick={() => console.log('clicked!')} />
          </Grid>
          <Grid item className="ServerBubblePadding">
            <ServerBubble imgSrc="./profile-pic" />
          </Grid>
          <Grid item className="ServerBubblePadding">
            <ServerBubble imgSrc="./profile-pic" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServerSidebar;
