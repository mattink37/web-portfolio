import './styles/server-bubble.css';

const ServerBubble: React.FC<ServerBubbleProps> = ({
  imgSrc,
  onClick,
}) => {
  return (
    <img src={imgSrc} alt='' onClick={onClick ? onClick : () => {}} className='ServerBubble' />
  );
};

interface ServerBubbleProps {
  imgSrc: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export default ServerBubble;
