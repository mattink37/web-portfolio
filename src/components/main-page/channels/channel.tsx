import { AboutMe, Projects, Experience } from '../../../common/enumerations/channels';

import AboutMeChannel from './AboutMe';
import ProjectsChannel from './Projects';
import ExperienceChannel from './Experience';

const Channel: React.FC<ChannelProps> = ({
  channelName,
}): JSX.Element => {
  switch (channelName) {
    case AboutMe:
      return <AboutMeChannel />
    case Projects:
      return <ProjectsChannel />
    case Experience:
      return <ExperienceChannel />
  }
  return <></>;
};

interface ChannelProps {
  channelName: string;
}

export default Channel;