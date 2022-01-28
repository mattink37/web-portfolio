import { Grid, Typography } from "@mui/material";
import './styles/channel-panel.css';

const ChannelPanel = () => {
  return (
    <Grid container direction="column" className='ChannelPanelContainer'>
      <Grid item className='ChannelsContainer'>
        <Grid item>
          <Typography>Channel 1</Typography>
        </Grid>
        <Grid item>
          <Typography>Channel 2</Typography>
        </Grid>
        <Grid item>
          <Typography>Channel 3</Typography>
        </Grid>
      </Grid>
      <Grid item className='UserPanelContainer'>
        <Grid item className='UserPanel'>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChannelPanel;
