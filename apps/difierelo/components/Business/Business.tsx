import BSRow from 'react-bootstrap/Row';
import BSCol from 'react-bootstrap/Col';
import * as S from './Business.styles';
import BusinessItem from './components/BusinessItem';
import { Swiper, SwiperSlide as Slide } from 'swiper/react';
import { Pagination } from 'swiper';
import { sizes } from '../../utils/style/Responsive';

const Business: React.FunctionComponent = () => {
  const swiperBreakpoints = {};

  swiperBreakpoints[sizes.phone] = {
    slidesPerView: 1,
    spaceBetween: 10,
  };
  swiperBreakpoints[sizes.tablet] = {
    slidesPerView: 2,
    spaceBetween: 20,
  };
  swiperBreakpoints[sizes.laptop] = {
    slidesPerView: 3,
    spaceBetween: 30,
  };

  return (
    <S.Container
      fluid
      className="d-flex flex-column justify-content-center m-0"
    >
      <BSRow className="m-0">
        <BSCol className="p-0">
          <h2>Negocios asociados</h2>
        </BSCol>
      </BSRow>
      <S.ListContainer className="m-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={swiperBreakpoints}
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
