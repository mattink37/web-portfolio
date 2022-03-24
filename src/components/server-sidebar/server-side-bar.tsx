import { Grid, Tooltip, Zoom } from "@mui/material";
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
          <ServerBubble imgSrc="./discord.jpg" />
        </Grid>
        <Divider width={32} height={2} hsla={hsla} />
        <Grid item className='ServerContainer'>
          <Tooltip title='test' arrow placement="right" TransitionComponent={Zoom}>
            <Grid item className="ServerBubblePadding">
              <ServerBubble imgSrc="./code.jpg" />
            </Grid>
          </Tooltip>
          <Grid item className="ServerBubblePadding">
            <ServerBubble imgSrc="./hockey.jpg" />
          </Grid>
          <Grid item className="ServerBubblePadding">
            <ServerBubble imgSrc="./vidya.jpg" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServerSidebar;
