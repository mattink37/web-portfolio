import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { GrayTypography } from "../../../common/TypographyStyles";
import "./styles/friends-panel.css";

const FriendsPanel: React.FC<FriendsPanelProps> = ({
  friends,
}): JSX.Element => {
  const roles = [...new Set(friends.map((friend) => friend.role))];

  return (
    <Grid
      item
      sx={{ width: "238px", height: "100%", backgroundColor: "#2f3136" }}
    >
      <Grid container direction="column" className="OuterFriendGrid">
        {roles.map((role) => (
          <Grid container direction="column" className="**RoleContainer">
            <Grid item>
              <GrayTypography>{`${role.toUpperCase()} - 0`}</GrayTypography>
            </Grid>
            {friends
              .filter((friend) => friend.role === role)
              .map((friend) => (
                <Grid container direction="row">
                  <Grid item className="**FriendAvatar">
                    <img
                      src={friend.avatar}
                      style={{ width: "24px", height: "24px" }}
                    />
                  </Grid>
                  <Grid item className="FriendUsername">
                    {friend.username}
                  </Grid>
                </Grid>
              ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

interface FriendsPanelProps {
  friends: Friend[];
}

export interface Friend {
  username: string;
  avatar: string;
  status: string;
  role: string;
}

export default FriendsPanel;
