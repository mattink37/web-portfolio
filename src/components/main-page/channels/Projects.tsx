import ChatMessage from "../chat-message";

const ProjectsChannel = (): JSX.Element => {
  return (
    <>
      <ChatMessage
        username="Discord Themed Interactive Portfolio"
        message="My most recent project is the one you're looking at right now! I've always wanted to make an interactive resume and why not do it and make it look like my favorite chat app? Since graduating college I’ve worked as a software engineer at NCR working on a project that uses TypeScript with React. I wanted to refine my skills as a frontend developer so I decided to create this (and it’s been a lot of fun!)"
        customDate="Personal Project | TypeScript + React"
        showAvatar={false}
        showUsername
        showDate
      />
      <ChatMessage
        username='Kahua Health Check Web App'
        message="For my senior project at Kennesaw State University, my team and I worked with a construction management software company called Kahua. They contracted my team to make a health check dashboard that leveraged the company’s analytics API. It was designed to show what parts of their software suite was being used the most (and the least). We created this dashboard using React and several libraries for displaying analytics."
        showAvatar={false}
        showUsername
        showDate
        customDate="Senior Project @ Kennsaw State University | JavaScript + React"
      />
    </>
  );
};

export default ProjectsChannel;
