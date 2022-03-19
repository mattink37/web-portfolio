import { Grid, styled, Typography, withStyles } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/channel-panel.css';
import { ReactComponent as WavyDude } from '../../common/images/wavyDude.svg';
import { ReactComponent as Projects } from '../../common/images/projects.svg';
import { ReactComponent as Experience } from '../../common/images/experience.svg';
import MattProfile from '../../common/images/mattProfile.jpg';

const GrayTypography = styled(Typography)({
  color: 'rgb(142, 146, 151)',
});

const WhiteTypography = styled(Typography)({
  color: 'white',
});

const ChannelPanel = () => {
  return (
    <Grid container direction='column' className='ChannelPanelContainer'>
      <Grid container direction='column' sx={{ flex: 1 }}>
        <Grid item className='ServerHeaderContainer'>
          <Grid container direction='row' className='ServerHeader'>
            <Grid item width='85%'>
              <WhiteTypography className='ServerHeaderLabel'>
                My Resume
              </WhiteTypography>
            </Grid>
            <Grid item>
              <ExpandMoreIcon className='Chevron' />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction='column' className='ChannelsContainer'>
          <Grid item sx={{ height: '33%' }}>
            <Grid container direction='row' className='ChannelItem'>
              <WavyDude className='ChannelIcon'/>
              <GrayTypography>About Me</GrayTypography>
            </Grid>
          </Grid>
          <Grid item sx={{ height: '33%' }}>
            <Grid container direction='row' className='ChannelItem'>
              <Projects className='ChannelIcon'/>
              <GrayTypography>Projects</GrayTypography>
            </Grid>
          </Grid>
          <Grid item sx={{ height: '33%' }}>
            <Grid container direction='row' className='ChannelItem'>
              <Experience className='ChannelIcon'/>
              <GrayTypography>Experience</GrayTypography>
            </Grid>
          </Grid>
          <Grid item sx={{height: ''}}></Grid>
        </Grid>
      </Grid>
      <Grid item className='UserPanel'>
        <Grid container direction='row' className='ChannelItem'>
          <img  src={MattProfile} className='ProfilePic' />
          <WhiteTypography>Matt Inkeles</WhiteTypography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChannelPanel;
