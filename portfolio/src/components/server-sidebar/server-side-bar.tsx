import { Button, Grid } from "@mui/material";
import './styles/server-sidebar.css';

const ServerSidebar: React.FC<ServerSidebarProps> = ({}) => {
  return (
    <Grid container direction="column" className='SidebarContainer'>
      <Grid item>
        <Button>A</Button>
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

interface ServerSidebarProps {

};

export default ServerSidebar;
