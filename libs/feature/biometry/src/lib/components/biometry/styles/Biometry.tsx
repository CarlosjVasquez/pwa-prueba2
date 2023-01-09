import styled from 'styled-components';

export interface MessageProps {
  type: string;
}
export const StyledBiometry = styled.div`
  width: auto;
  margin: auto;
  margin-top: 0;
  text-align: center;
`;

export const StyleSpinner = styled.div`
  color: #152738;
  font-size: 1rem;
`;

export const MessageBiometry = styled.div<MessageProps>`
  background: ${(props) => (props.type === 'bad' ? '#f84646' : '#22D16B')};
  padding: 20px;
  visibility: ${(props) => (props.type === '' ? 'hidden' : 'visible')};
  border-radius: 20px;
  color: #fff;
`;
export const StyledEllipseSVG = styled.div<MessageProps>`
  position: absolute;
  display: inline-block;
  z-index: 1;
  height: 100%;
  width: 100%;
  left: 0;
  .cls-1 {
    padding: 0px;
    margin: 0px;
    width: 130%;
    height: auto;
    fill: ${(props) => (props.type === 'ok' ? '#22D16B' : '#f84646')};
    opacity: 0.45;
  }
  .cls-2 {
    padding: 80px;
    width: 50%;
    height: auto;
    fill: none;
    stroke: ${(props) => (props.type === 'ok' ? '#22D16B' : '#f84646')};
    stroke-miterlimit: 10;
    stroke-width: 15px;
    opacity: 0.43;
  }
`;
// .biometry {
//   width: 500px;
//   margin: auto;
//   margin-top: 80px;
//   .wrapper {
//       height: 400px;
//       width: 400px;
//       text-align: center;
//       overflow: hidden;
//       position: relative;
//       margin: auto;
//       border-radius: 23px;
//       & video {
//           height: auto;
//           width: 720px;
//           border-radius: 20px;
//           position: absolute;
//           left: -160px;
//       }
//   }
// }

// .biometry-buttons {
//   & .btn {
//       background: #F8F8F7;
//       border-radius: 100px;
//       color: #152738;
//       padding: 12px 24px;
//       border: none;
//       font-weight: bold;
//       margin: 20px;
//       &.active {
//           background: #22D16B;
//       }
//   }
// }

// .biometry-text {
//   color: #1F3F4A;
//   margin-top: 30px;
//   & .title {
//       font-weight: bold;
//       font-size: 24px;
//       margin: 15px;
//   }
//   & .subtitle {
//       margin: 15px;
//       & p {
//           margin: 0;
//       }
//   }
// }

// .biometry-messages {
//   padding: 20px;
//   display: none;
//   border-radius: 20px;
//   color: #fff;
//   &.bad {
//       background: #f84646;
//       display: inline-block;
//   }
//   &.ok {
//       background: #22D16B;
//       display: inline-block;
//   }
// }
