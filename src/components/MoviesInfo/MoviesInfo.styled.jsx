import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
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

export const Image = styled.img`
  width: 200px;
  border-radius: 8px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Wrapper = styled.div`
  padding-top: 20px;
  margin-left: 20px;
`;

export const ItemInfo = styled.li`
  display: inline-block;
  margin-right: 8px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
`;
