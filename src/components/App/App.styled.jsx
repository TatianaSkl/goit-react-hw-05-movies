import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  &:after {
    display: block;
    content: '';

    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: ${props => props.theme.colors.dark};
  }
`;

export const Button = styled.div`
  padding: 6px;
  border-radius: 4px;
  width: 120px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.shadows.medium};
  color: ${props => props.theme.colors.white};
  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.blue};
  font-weight: 600;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  & svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.yellow};
    background-color: ${props => props.theme.colors.white};
  }
`;
