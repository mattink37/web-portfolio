import { Grid } from "@mui/material";
import ChannelPanel from "../channel-panel/channel-panel";
import TopBar from "../page-header/topbar";
import ServerSidebar from "../server-sidebar/server-side-bar";
import './styles/main-page.css';

const MainPage: React.FC<MainPageProps> = ({}) => {
  return (
    <Grid container className='MainPageContainer'>
      <Grid item>
        <ServerSidebar />
      </Grid>
      <Grid item>
        <ChannelPanel />
      </Grid>
      <Grid item>
        <TopBar />
      </Grid>  
    </Grid>
  );
};

interface MainPageProps {

};

export default MainPage;
