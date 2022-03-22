import ChatMessage from "../chat-message";

const ProjectsChannel = (): JSX.Element => {
  return (
    <>
      <ChatMessage
        username="Matt Inkeles"
        message="My most recent project, is the one you're looking at right now! I've always wanted to make an interactive resume and why not do it and make it look like my favorite chat app?"
        showAvatar
        showUsername
        showDate
      />

      <ChatMessage
        message="I made it using TypeScript with React."
        showAvatar={false}
        showUsername={false}
        showDate={false}
      />
    </>
  );
};

export default ProjectsChannel;
