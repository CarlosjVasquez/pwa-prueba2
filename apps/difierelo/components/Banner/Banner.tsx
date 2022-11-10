import Row from 'react-bootstrap/Row';
import * as S from './Banner.styles';

import styled from 'styled-components';

const Banner: React.FunctionComponent = () => {
  return (
    <S.BannerContainer>
      <S.ImgBg />
      <S.TextContainer fluid>
        <Row className="mx-0">
          <S.Col md="6">
            <h1>
              Disfruta tu dí
              <span className="decoration">
                a
                <S.ImgDecoration
                  alt="banner decoration"
                  src="/icons/banner-decoration.svg"
                  width={100}
                  height={100}
                />
              </span>
              comprando
            </h1>

            <p>
              Compra Ahora y <span className="highlight">Paga después</span> con
              Difierelo
            </p>
          </S.Col>
        </Row>
      </S.TextContainer>
      <p>Miles de personas en Ecuador estan comprando con Difierelo</p>
    </S.BannerContainer>
  );
};

export default Banner;
