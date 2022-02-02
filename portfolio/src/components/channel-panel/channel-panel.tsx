import { Grid, Typography } from "@mui/material";
import './styles/channel-panel.css';

const ChannelPanel = () => {
  return (
    <Grid container direction="column" className='ChannelPanelContainer'>
      <Grid item className='ServerHeaderContainer'>
        <Grid item className='ServerHeader'>
          <Typography className='ServerHeaderLabel'>
            My Server
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" className='ChannelsContainer'>
        <Grid item xs={4}>
          <Typography>Channel 1</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Channel 2</Typography>
        </Grid>
        <Grid item xs={4}>
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
