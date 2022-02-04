import { Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/channel-panel.css';

const ChannelPanel = () => {
  return (
    <Grid container direction="column" className='ChannelPanelContainer'>
      <Grid item className='ServerHeaderContainer'>
        <Grid container direction='row' className='ServerHeader'>
          <Grid item width='85%'>
            <Typography className='ServerHeaderLabel'>
              My Server
            </Typography>
          </Grid>
          <Grid item>
            <ExpandMoreIcon className='Chevron' />
          </Grid>
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
