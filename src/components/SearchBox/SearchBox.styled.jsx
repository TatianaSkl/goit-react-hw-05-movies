import styled from '@emotion/styled';

export const ButtonForm = styled.button`
  margin-left: 10px;
  padding: 6px;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadows.medium};
  color: ${props => props.theme.colors.white};
  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.blue};
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.yellow};
    background-color: ${props => props.theme.colors.white};
  }
`;

export const InputForm = styled.input`
  display: inline-block;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 4px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 6px;
  box-shadow: ${props => props.theme.shadows.medium};

  &::placeholder {
    font: inherit;
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;
