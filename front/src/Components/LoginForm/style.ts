import styled from "styled-components";

export const StyledDivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-width: 296px;
  background-color: var(--grey-2);
  border-radius: 4px;
  box-sizing: border-box;

  > div {
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1.0625rem 1.375rem;
    box-sizing: border-box;
    gap: 15px;
    margin-bottom: 15px;
  }
`;
