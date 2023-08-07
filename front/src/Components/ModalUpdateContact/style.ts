import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--grey-opacity);
  display: flex;
  align-items: center;
  justify-content: center;

  div:nth-child(1) {
    background-color: var(--grey-2);
    width: 30%;
    min-width: 296px;
    border-radius: 4px;

    > div {
      box-sizing: border-box;
      background-color: var(--grey-3);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;

      button {
        font-size: 16px;
        font-weight: 600;
        color: var(--grey-4);
      }
    }
  }

  .div-buttons {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
  }
`;
