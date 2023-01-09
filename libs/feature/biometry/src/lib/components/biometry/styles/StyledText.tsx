import styled from 'styled-components';

export const StyledText = styled.div`
  color: #1F3F4A;
  margin-top: 30px;
  & .title {
      font-weight: bold;
      font-size: 24px;
      margin: 15px;
  }
  & .subtitle {
      margin: 15px;
      & p {
          margin: 0;
      }
  }
}
`;
