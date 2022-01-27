import { Button, Grid, Typography } from "@mui/material";
import './styles/channel-panel.css';

const ChannelPanel: React.FC<ChannelPanelProps> = ({}) => {
  return (
    <Grid container direction="column" className='ChannelPanelContainer'>
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
  );
};

interface ChannelPanelProps {

};

export default ChannelPanel;
