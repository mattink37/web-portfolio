import { Badge, Grid, styled } from "@mui/material";
import "./styles/friend-bubble.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 2,
    top: 8,
    border: `3px solid #2f3136`,
    padding: '0 4px',
  },
}));

const FriendBubble: React.FC<FriendBubbleProps> = ({ imgSrc, onClick }) => {
  return (
    <Grid item sx={{ paddingRight: '15px' }}>
      <StyledBadge
        color="success"
        badgeContent=""
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <img
          src={imgSrc}
          alt=""
          onClick={onClick ? onClick : () => {}}
          className="FriendBubble"
        />
      </StyledBadge>
    </Grid>
  );
};

interface FriendBubbleProps {
  imgSrc: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export default FriendBubble;
