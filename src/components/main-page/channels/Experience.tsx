import ChatMessage from '../chat-message';

const ExperienceChannel = (): JSX.Element => {
  return (
    <>
      <ChatMessage
        username="Matt Inkeles"
        message="Hi! I'm Matt. I'm a software engineer from Atlanta, Georgia and I love creating projects like the one you're looking at right now! Most of the components here are interactive so feel free to check them out."
        showAvatar
        showUsername
        showDate
      />
    </>
  );
};

export default ExperienceChannel;
