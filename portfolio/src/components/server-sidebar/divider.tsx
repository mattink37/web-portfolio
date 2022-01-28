import { HslaColorObject } from "../../common/colors";

const Divider: React.FC<DividerProps> = ({ width, height, color, hsla }) => {
  const _hsla = `hsla(${hsla?.h},${hsla?.s},${hsla?.l},${hsla?.a})`;
  return (
    <hr
      style={{
        width: width,
        height: height,
        backgroundColor: _hsla ?? color,
        border: 'none',
        margin: 'auto',
      }}
    />
  );
};

interface DividerProps {
  width: number;
  height: number;
  color?: string;
  hsla?: HslaColorObject;
}

export default Divider;
