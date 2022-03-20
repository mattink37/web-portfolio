import { Grid } from "@mui/material";
import "./styles/topbar.css";
import { ReactComponent as Hashtag } from "../../common/images/hashtag.svg";
import { WhiteTypography } from "../../common/TypographyStyles";

const TopBar: React.FC<TopBarProps> = ({
  headerText,
}) => {
  return (
    <Grid container direction='row' className='ServerHeaderContainer2'>
      <Grid item sx={{ marginRight: '8px' }}>
        <Hashtag style={{ color: '72767d', alignItems: 'center' }} />
      </Grid>
      <Grid item>
        <WhiteTypography>{headerText}</WhiteTypography>
      </Grid>
    </Grid>
  );
};

interface TopBarProps {
  headerText: string;
}

export default TopBar;
