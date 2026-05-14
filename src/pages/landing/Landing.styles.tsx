import styled from 'styled-components'

export const LandingContainer = styled.div`
    width: 100%;
    background-color: white;
`;

interface ListButtonProps {
  bgColor?: string;
  width?: string;
  height?: string;
  border?: string;
}

export const ListButtons = styled.button<ListButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '50px'};
  background-color: ${({ bgColor }) => bgColor || 'black'};
  border: ${({ border }) => border || '1px solid black'};

  border-radius: 12px;
`;