import { Grid } from "@mui/material";
import { useState } from "react";
import ChannelPanel from "../channel-panel/channel-panel";
import TopBar from "../page-header/topbar";
import ServerSidebar from "../server-sidebar/server-side-bar";
import "./styles/main-page.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import ChatMessage from "./chat-message";

const MainPage = () => {
  const [headerText, setHeaderText] = useState("About Me");
  return (
    <Grid container className="MainPageContainer">
      <RemoveScrollBar />
      <Grid item>
        <ServerSidebar />
      </Grid>
      <Grid item>
        <ChannelPanel setHeaderText={setHeaderText} />
      </Grid>
      <Grid item sx={{ flex: "1" }}>
        <TopBar headerText={headerText} />
        <ChatMessage
          username="Matt Inkeles"
          message="Hi! I'm Matt. I'm a software engineer from Atlanta, Georgia and I love creating projects like the one you're looking at right now! Most of the components here are interactive so feel free to check them out."
          showAvatar
          showUsername
          showDate
        />
        <ChatMessage
          showUsername={false}
          showDate={false}
          showAvatar={false}
          message="I grew up playing all sorts of video games and that sparked my interest in computer science."
        />
        <ChatMessage
          showUsername={false}
          showDate={false}
          showAvatar={false}
          message="So now, all these later I've pursued my dreams and I've made a career of my passion."
        />
      </Grid>
    </Grid>
  );
};

export default MainPage;
