import styled from '@emotion/styled';

export const Item = styled.li`
  width: max-content;
  font-style: italic;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  color: ${props => props.theme.colors.blue};
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.yellow};
  }
`;
