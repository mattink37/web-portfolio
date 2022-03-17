import { Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/channel-panel.css';
import { ReactComponent as WavyDude } from '../../common/images/wavyDude.svg';

const ChannelPanel = () => {
  return (
    <Grid container direction='column' className='ChannelPanelContainer'>
      <Grid container direction='column' sx={{ flex: 1 }}>
        <Grid item className='ServerHeaderContainer'>
          <Grid container direction='row' className='ServerHeader'>
            <Grid item width='85%'>
              <Typography className='ServerHeaderLabel'>
                Matt Inkeles
              </Typography>
            </Grid>
            <Grid item>
              <ExpandMoreIcon className='Chevron' />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction='column' className='ChannelsContainer'>
          <Grid item sx={{ height: '33%' }}>
            <Grid container direction='row'>
              <WavyDude />
              <Typography>About Me</Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ height: '33%' }}>
            <Typography>Projects</Typography>
          </Grid>
          <Grid item sx={{ height: '33%' }}>
            <Typography>Contact</Typography>
          </Grid>
          <Grid item sx={{height: ''}}></Grid>
        </Grid>
      </Grid>
      <Grid item className='UserPanel'>
      
      </Grid>
    </Grid>
  );
};

export default ChannelPanel;
