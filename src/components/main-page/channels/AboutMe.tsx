import ChatMessage from '../chat-message';

const AboutMeChannel = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default AboutMeChannel;
