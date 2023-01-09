import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 21rem;
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin: auto;
  border-radius: 23px;

  & video {
    height: auto;
    width: 470px;
    border-radius: 20px;
    position: absolute;
    -webkit-transform: scaleX(-1) translate(50%, 0%);
    transform: scaleX(-1) translate(50%, 0%);
  }

  .imgPreview {
    height: 100%;
    width: 100%;
    background-size: 620px;
    background-repeat: no-repeat;
    background-position-x: center;
    transform: scaleX(-1);


    /*transform: scale(1.1);*/
  }
`;
