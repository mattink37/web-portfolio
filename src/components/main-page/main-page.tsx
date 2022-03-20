import { Grid } from "@mui/material";
import ChannelPanel from "../channel-panel/channel-panel";
import TopBar from "../page-header/topbar";
import ServerSidebar from "../server-sidebar/server-side-bar";
import './styles/main-page.css';

const MainPage = () => {
  return (
    <Grid container className='MainPageContainer'>
      <Grid item>
        <ServerSidebar />
      </Grid>
      <Grid item>
        <ChannelPanel />
      </Grid>
      <Grid item sx={{ flex: '1' }}>
        <TopBar />
      </Grid>  
    </Grid>
  );
};

export default MainPage;
