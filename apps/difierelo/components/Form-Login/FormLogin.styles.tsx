import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const Container = styled.div`
  width: 23.82vw;

  ${Responsive.SM} {
    width: 90vw;
  }
`;

export const DivTitle = styled.div`
  width: 23.82vw;
  min-height: 2.71vw;
  margin-top: 22.08vw;

  ${Responsive.SM} {
    width: 90vw;
  }
`;

export const TextTitle = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.94vw;
  line-height: 2.71vw;
  letter-spacing: -0.02em;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 4.86vw;
    line-height: 6.77vw;
  }
`;

export const DivPhone = styled.div`
  width: 21.74vw;
  min-height: 4.93vw;
  margin-top: 3.96vw;

  .form-control {
    border-bottom: 1px solid #11171d;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    font-family: Eina 02;
    font-style: normal;
    font-weight: 600;
    color: #444c47;
    font-size: 1.39vw;
    line-height: 1.67vw;
  }

  .flag-dropdown {
    border-bottom: 1px solid #11171d;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }

  ${Responsive.SM} {
    width: 90vw;
    margin-top: 9.9vw;

    .form-control {
      font-size: 5.33vw;
      line-height: 6.4vw;
    }
  }
`;

export const TextPhone = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  line-height: 1.25vw;
  padding-bottom: 1.39vw;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 2.57vw;
    line-height: 3.13vw;
    padding-bottom: 3.47vw;
  }
`;

export const DivConditions = styled.div`
  width: 22.29vw;
  min-height: 3.33vw;
  margin-top: 4.03vw;
  align-items: center;

  ${Responsive.SM} {
    width: 90vw;
    margin-top: 10.07vw;
  }
`;

export const InputConditions = styled.input`
  width: 1.25vw;
  min-height: 1.25vw;

  ${Responsive.SM} {
    width: 3.13vw;
    min-height: 3.13vw;
  }
`;

export const TextConditions = styled.p`
  width: 19.38vw;
  height: 3.33vw;
  padding-left: 1.46vw;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;

  a {
    text-decoration: none;
    color: #4544ed;
  }

  ${Responsive.SM} {
    width: 70vw;
    font-size: 2.26vw;
    line-height: 2.78vw;
    padding-left: 3.65vw;
  }
`;

export const DivButton = styled.div`
  width: 23.82vw;
  margin-top: 1.67vw;

  ${Responsive.SM} {
    width: 90vw;
    margin-top: 8.17vw;
  }
`;

export const DivAccount = styled.div`
  margin-top: 11.94vw;

  ${Responsive.SM} {
    width: 90vw;
    margin-top: 29.51vw;
  }
`;

export const TextAccount = styled.a`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.11vw;
  line-height: 1.53vw;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: #4544ed;

  ${Responsive.SM} {
    font-size: 2.78vw;
    line-height: 3.82vw;
  }
`;
