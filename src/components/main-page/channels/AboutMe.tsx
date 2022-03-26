import ChatMessage from '../chat-message';

const AboutMeChannel = (): JSX.Element => {
  return (
    <>
      <ChatMessage
        username="Matt Inkeles"
        message="Hi! I'm Matt. I'm a software engineer from Atlanta, Georgia and I love creating projects like the one you're looking at right now! I grew up playing all sorts of video games and that sparked my interest in computer science. So now, all these later I've pursued my dreams and I've made a career of my passion. I graduated from Kennesaw State University and I currently work as a frontend developer at NCR. I’m developing a next-generation point-of-sale software solution for retail stores. I’m proud of the work I do and I’m always looking to improve my code, educate myself, and become a better person in the process."
        showAvatar
        showUsername
        showDate
      />
      <ChatMessage
        username='Matt Inkeles'
        message='Whew, that got real formal, real fast. Anyways, I hope you like what you see here, so feel free to click around and learn more about me and my goals.'
        showAvatar
        showUsername
        showDate
      />
      <ChatMessage
        showAvatar={false}
        showDate={false}
        showUsername={false}
        message='Enjoy!'
      />
    </>
  );
};

export default AboutMeChannel;
