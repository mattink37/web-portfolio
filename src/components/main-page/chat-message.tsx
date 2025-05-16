import { Grid } from '@mui/material';
import moment from 'moment';
import { DateTypography, WhiteTypography } from '../../common/TypographyStyles';
import MattProfile from '../../common/images/mattProfile.jpg';

const ChatMessage: React.FC<ChatMessageProps> = ({
  username,
  message,
  imgSrc,
  showAvatar,
  showUsername,
  showDate,
  customDate,
}) => {
  return (
    <Grid container direction="column" sx={{ flexFlow: 'nowrap' }}>
      <Grid container direction="row" className="MessageContainer">
        <Grid item className="Avatar">
          {showAvatar ? (
            <img src={MattProfile} className="ProfilePicMain" alt="" />
          ) : (
            <div style={{ width: '40px' }}></div>
          )}
        </Grid>
        <Grid item className="Username">
          {showUsername && (
            <Grid item>
              <WhiteTypography>{username}</WhiteTypography>
            </Grid>
          )}
          {showDate && (
            <Grid item>
              <DateTypography>
                {customDate ?? `Today at ${moment().format('h:mm a')}`}
              </DateTypography>
            </Grid>
          )}
          {message && <WhiteTypography>{message}</WhiteTypography>}
          {imgSrc && <img src={imgSrc} alt="" style={{ maxWidth: '100%' }} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

interface ChatMessageProps {
  username?: string;
  message?: string;
  imgSrc?: string;
  showDate?: boolean;
  customDate?: string;
  showAvatar?: boolean;
  showUsername?: boolean;
}

export default ChatMessage;
