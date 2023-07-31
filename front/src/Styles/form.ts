import styled from "styled-components";
export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  padding: 1.0625rem 1.375rem;
  box-sizing: border-box;
  margin-bottom: 15px;

  label {
    color: var(--grey-5);
    font-size: 0.75rem;
    font-weight: 400;
  }

  input,
  select {
    width: 100%;
    padding: 0.625rem 1rem;
    border-radius: 4px;
    border: 1.2192px solid var(--grey-3);
    background-color: var(--grey-3);
    box-sizing: border-box;
    color: var(--grey-4);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    ::placeholder {
      color: var(--grey-4);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.625rem;
    }
  }

  select {
    appearance: none;
    background: url(../../public/vector-select.png) 97% 50% no-repeat;
  }
`;
