import BSRow from 'react-bootstrap/Row';
import BSCol from 'react-bootstrap/Col';
import * as S from './Business.styles';
import BusinessItem from './components/BusinessItem';
import { Swiper, SwiperSlide as Slide } from 'swiper/react';
import { Pagination } from 'swiper';

const Business: React.FunctionComponent = () => {
  return (
    <S.Container
      fluid
      className="d-flex flex-column justify-content-center m-0"
    >
      <BSRow className="m-0">
        <BSCol>
          <h2>Negocios asociados</h2>
        </BSCol>
      </BSRow>
      <S.ListContainer className="m-0">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          <Slide>
            <BusinessItem name="Frecuento" />
          </Slide>
          <Slide>
            <BusinessItem name="Artefacta" />
          </Slide>
          <Slide>
            <BusinessItem name="Think Ecuador" />
          </Slide>
          <Slide>
            <BusinessItem name="Negocio 4" />
          </Slide>
          <Slide>
            <BusinessItem name="Negocio 5" />
          </Slide>
          <Slide>
            <BusinessItem name="Negocio 6" />
          </Slide>
        </Swiper>
      </S.ListContainer>
    </S.Container>
  );
};

export default Business;
