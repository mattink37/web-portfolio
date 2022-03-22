import { Box, Divider, Grid, Grow, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles/channel-panel.css";
import { ReactComponent as WavyDudeImg } from "../../common/images/wavyDude.svg";
import { ReactComponent as ProjectsImg } from "../../common/images/projects.svg";
import { ReactComponent as ExperienceImg } from "../../common/images/experience.svg";
import MattProfile from "../../common/images/mattProfile.jpg";
import { useState } from "react";
import {
  GraySubTextTypography,
  GrayTypography,
  WhiteTypography,
} from "../../common/TypographyStyles";
import { AboutMe, Projects, Experience } from "../../common/enumerations/channels";

const ChannelPanel: React.FC<ChannelPanelProps> = ({
  setSelectedChannel,
}): JSX.Element => {
  const [isDropdownEnabled, setDropdownStatus] = useState(false);
  const handleChange = () => {
    setDropdownStatus(!isDropdownEnabled);
  };

  return (
    <Grid container direction="column" className="ChannelPanelContainer">
      <Grid container direction="column" sx={{ flex: 1 }}>
        <Grid item className="ServerHeaderContainer">
          <Grid container direction="row" className="ServerHeader">
            <Grid item width="85%">
              <WhiteTypography className="ServerHeaderLabel">
                My Resume
              </WhiteTypography>
            </Grid>
            <Grid item>
              <div onClick={handleChange}>
                {!isDropdownEnabled ? (
                  <>
                    <ExpandMoreIcon className="Chevron" />
                  </>
                ) : (
                  <ExpandMoreIcon
                    className="Chevron"
                    sx={{ transform: "rotate(180deg)" }}
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
        {isDropdownEnabled && <FadeInModal checked={isDropdownEnabled} />}
        <Grid container direction="column" className="ChannelsContainer">
          <Grid item sx={{ height: "33%" }}>
            <Grid
              container
              direction="row"
              className="ChannelItem"
              onClick={() => setSelectedChannel(AboutMe)}
            >
              <WavyDudeImg className="ChannelIcon" />
              <GrayTypography>About Me</GrayTypography>
            </Grid>
          </Grid>
          <Grid item sx={{ height: "33%" }}>
            <Grid
              container
              direction="row"
              className="ChannelItem"
              onClick={() => setSelectedChannel(Projects)}
            >
              <ProjectsImg className="ChannelIcon" />
              <GrayTypography>Projects</GrayTypography>
            </Grid>
          </Grid>
          <Grid item sx={{ height: "33%" }}>
            <Grid
              container
              direction="row"
              className="ChannelItem"
              onClick={() => setSelectedChannel(Experience)}
            >
              <ExperienceImg className="ChannelIcon" />
              <GrayTypography>Experience</GrayTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="UserPanel">
        <Grid container direction="row" className="ChannelItem">
          <Grid item className='UserPanelAvatar'>
            <img src={MattProfile} className="ProfilePic" />
          </Grid>
          <Grid item>
            <WhiteTypography>Matt Inkeles</WhiteTypography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface ChannelPanelProps {
  setSelectedChannel: Function;
}

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box className="ChannelPanelDropdown">
      <Grid container direction="column" className="InfoPopupContainer">
        <Grid container className="InfoPopupItem">
          <Grid item className="InfoPopupTitle">
            <WhiteTypography>Matt Inkeles</WhiteTypography>
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: "white", margin: "5px 10px 0px 10px" }}
        />
        <Grid item className="InfoPopupSubText">
          <GraySubTextTypography>Software Engineer</GraySubTextTypography>
        </Grid>
        <Grid item className="InfoPopupSubText">
          <GraySubTextTypography>770-689-7917</GraySubTextTypography>
        </Grid>
        <Grid item className="InfoPopupSubText">
          <GraySubTextTypography>mattinkeles37@gmail.com</GraySubTextTypography>
        </Grid>
      </Grid>
    </Box>
  </Paper>
);

const FadeInModal: React.FC<FadeInModalProps> = ({ checked }) => {
  return (
    <Box sx={{ display: "flex", position: "absolute", top: "50px" }}>
      <Grow in={checked}>{icon}</Grow>
    </Box>
  );
};

interface FadeInModalProps {
  checked: boolean;
}

export default ChannelPanel;
