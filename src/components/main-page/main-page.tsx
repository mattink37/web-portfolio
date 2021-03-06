import { Grid } from "@mui/material";
import { useState } from "react";
import ChannelPanel from "../channel-panel/channel-panel";
import TopBar from "../page-header/topbar";
import ServerSidebar from "../server-sidebar/server-side-bar";
import "./styles/main-page.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { AboutMe } from "../../common/enumerations/channels";
import Channel from "./channels/channel";
import FriendsPanel from "./friends-panel/friends-panel";
import { getFriends } from "./friends-panel/friends";

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
        <Grid
          container
          direction="column"
          sx={{ flex: "auto", flexDirection: "column", height: "100%" }}
        >
          <Grid container>
            <Grid item sx={{ width: "100%" }}>
              <TopBar headerText={selectedChannel} />
            </Grid>
          </Grid>
          <Grid container direction="row" sx={{ flexGrow: "inherit" }}>
            <Grid item sx={{ width: "0px", flex: "auto" }}>
              <Channel channelName={selectedChannel} />
            </Grid>
            <Grid item sx={{ paddingLeft: "40px" }}>
              <FriendsPanel friends={getFriends()} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPage;
