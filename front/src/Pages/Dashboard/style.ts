import styled from "styled-components";

export const StyledDivClient = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 45px 0;
  border-bottom: 1px solid var(--grey-4);
`;

export const StyledDivHeaderContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 11px;
`;

export const StyledUl = styled.ul`
  margin-top: 21px;
  width: 90%;
  min-width: 296px;
  background-color: var(--grey-2);
  padding: 23px 22px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
