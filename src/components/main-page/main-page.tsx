import { Grid } from "@mui/material";
import { useState } from "react";
import ChannelPanel from "../channel-panel/channel-panel";
import TopBar from "../page-header/topbar";
import ServerSidebar from "../server-sidebar/server-side-bar";
import "./styles/main-page.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import AboutMeChannel from "./channels/AboutMe";
import { AboutMe } from "../../common/enumerations/channels";
import Channel from './channels/channel';

const MainPage = () => {
  const [selectedChannel, setSelectedChannel] = useState(AboutMe);
  return (
    <Grid container className="MainPageContainer">
      <RemoveScrollBar />
      <Grid item>
        <ServerSidebar />
      </Grid>
      <Grid item>
        <ChannelPanel setSelectedChannel={setSelectedChannel} />
      </Grid>
      <Grid item sx={{ flex: "1" }}>
        <TopBar headerText={selectedChannel} />
        <Channel channelName={selectedChannel} />
      </Grid>
      <Grid item sx={{ width: '232px' }}></Grid> {/* Todo userpanel */}
    </Grid>
  );
};

export default MainPage;
