import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--grey-1);
  border-radius: 4px;
  padding: 13px 22px;
  box-sizing: border-box;
  height: 49px;

  :hover {
    background-color: var(--grey-3);
  }

  div {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  img {
    width: 14px;
    height: 14px;
  }
`;
