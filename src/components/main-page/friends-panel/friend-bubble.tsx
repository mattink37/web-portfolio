import './styles/friend-bubble.css';

const FriendBubble: React.FC<FriendBubbleProps> = ({
  imgSrc,
  onClick,
}) => {
  return (
    <img src={imgSrc} alt='' onClick={onClick ? onClick : () => {}} className='FriendBubble' />
  );
};

interface FriendBubbleProps {
  imgSrc: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export default FriendBubble;
