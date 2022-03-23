import { Grid } from "@mui/material";
import moment from "moment";
import { DateTypography, WhiteTypography } from "../../common/TypographyStyles";
import MattProfile from "../../common/images/mattProfile.jpg";

const ChatMessage: React.FC<ChatMessageProps> = ({
  username,
  message,
  showAvatar,
  showUsername,
  showDate,
}) => {
  return (
    <Grid container direction='column' sx={{ flexFlow: 'nowrap' }}>
      <Grid container direction='row' className='MessageContainer'>
        <Grid item className='Avatar'>
          {showAvatar ? <img src={MattProfile} className="ProfilePicMain" /> : <div style={{ width: '40px' }}></div>}
        </Grid>
        <Grid item className='Username'>
          {showUsername && <Grid item>
            <WhiteTypography>{username}</WhiteTypography>
          </Grid>}
          {showDate && <Grid item>
            <DateTypography>Today at {moment().format('h:mm a')}</DateTypography>
          </Grid>}
          <WhiteTypography>
            {message}
          </WhiteTypography>
        </Grid>
      </Grid>
    </Grid>
  )
};

interface ChatMessageProps {
  username?: string;
  message?: string;
  showDate?: boolean;
  showAvatar?: boolean;
  showUsername?: boolean;
}

export default ChatMessage;