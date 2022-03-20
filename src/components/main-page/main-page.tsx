import { Grid } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { DateTypography, WhiteTypography } from "../../common/TypographyStyles";
import ChannelPanel from "../channel-panel/channel-panel";
import TopBar from "../page-header/topbar";
import ServerSidebar from "../server-sidebar/server-side-bar";
import './styles/main-page.css';
import MattProfile from "../../common/images/mattProfile.jpg";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const MainPage = () => {
  const [headerText, setHeaderText] = useState('About Me');
  return (
    <Grid container className='MainPageContainer'>
      <RemoveScrollBar />
      <Grid item>
        <ServerSidebar />
      </Grid>
      <Grid item>
        <ChannelPanel setHeaderText={setHeaderText}/>
      </Grid>
      <Grid item sx={{ flex: '1' }}>
        <TopBar headerText={headerText}/>
        <Grid container direction='column'>
          <Grid container direction='row' className='MessageContainer'>
            <Grid item className='Avatar'>
              <img src={MattProfile} className="ProfilePicMain" />
            </Grid>
            <Grid item className='Username'>
              <Grid item>
                <WhiteTypography>Matt Inkeles</WhiteTypography>
              </Grid>
              <Grid item>
                <DateTypography>Today at {moment().format('h:mm a')}</DateTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>  
    </Grid>
  );
};

export default MainPage;
