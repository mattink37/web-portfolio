import './styles/server-bubble.css';

const ServerBubble: React.FC<ServerBubbleProps> = ({
  imgSrc
}) => {
  return (
    <img src={imgSrc} alt='' className='ServerBubble' />
  );
};

interface ServerBubbleProps {
  imgSrc: string;
}

export default ServerBubble;
