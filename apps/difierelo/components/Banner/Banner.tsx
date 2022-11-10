import Row from 'react-bootstrap/Row';
import * as S from './Banner.styles';

import styled from 'styled-components';
import Badge from '../core/Badge/Badge';

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

            <S.BadgesContainer>
              <Badge icon="🙅" title="Sin Garantes" />
              <Badge icon="📄" title="Sin Papelos" />
              <Badge icon="💸" title="Pagos Flexibles" />
              <Badge icon="🔗" title="100% en línea" />
            </S.BadgesContainer>
          </S.Col>
        </Row>
      </S.TextContainer>
      <p>Miles de personas en Ecuador estan comprando con Difierelo</p>
    </S.BannerContainer>
  );
};

export default Banner;
