import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
  background-color: var(--color-primary);
  border-radius: 4px;
  padding: 0 22px;
  color: var(--grey-5);
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;

export const StyledButtonSecondary = styled.button`
  background-color: var(--grey-4);
  border-radius: 4px;
  padding: 0 22px;
  color: var(--grey-5);
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem;

  :hover {
    background-color: var(--grey-3);
  }
`;

export const StyledButtonTertiary = styled.button`
  background-color: var(--grey-2);
  border-radius: 4px;
  padding: 0 16px;
  height: 2.5rem;
  color: var(--grey-5);
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;

  :hover {
    background-color: var(--grey-3);
  }
`;

export const StyledButtonNewContact = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--grey-2);
  font-size: 21px;
  color: var(--white);
  text-align: center;

  :hover {
    background-color: var(--grey-3);
  }
`;
