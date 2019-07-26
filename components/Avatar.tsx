import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const Avatar = styled(animated.img)`
  margin-top: 40px;
`;

interface IProps {
  avatarImageUrl: string;
}

export default (props: IProps) => {
  const styles = useSpring({
    config: { duration: 800 },
    from: { opacity: 0, transform: "scale(1.2)" },
    opacity: 1,
    transform: "scale(1)",
  });
  return (
    <Avatar src={props.avatarImageUrl} style={styles} />
  );
};
