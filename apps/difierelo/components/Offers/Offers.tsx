import BSRow from 'react-bootstrap/Row';
import BSCol from 'react-bootstrap/Col';
import * as S from './Offers.styles';
import { Swiper, SwiperSlide as Slide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { sizes } from '../../utils/style/Responsive';
import OffersItem from './components/OffersItem';

const Offers: React.FunctionComponent = () => {
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
    slidesPerView: 4,
    spaceBetween: 30,
  };

  return (
    <S.Container
      fluid
      className="d-flex flex-column justify-content-center m-0"
    >
      <BSRow className="m-0">
        <BSCol className="p-0">
          <h2>Las mejores ofertas</h2>
        </BSCol>
      </BSRow>
      <S.ListContainer className="m-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={swiperBreakpoints}
          modules={[Pagination, Autoplay]}
        >
          <Slide>
            <OffersItem
              title="Iphone 14 Pro Max"
              subtitle="4 meses sin intereses "
              img="./img/Group 111.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Think"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Indurama Refrigeradora"
              subtitle="4 meses sin intereses "
              img="./img/Group 1980.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Artefacta"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="TV LG 55” - XOELED"
              subtitle="4 meses sin intereses "
              img="./img/Group 117.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Think"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Apple Watch"
              subtitle="4 meses sin intereses "
              img="./img/Group 116.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Artefacta"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Iphone 14 Pro Max"
              subtitle="4 meses sin intereses "
              img="./img/Group 111.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Think"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Indurama Refrigeradora"
              subtitle="4 meses sin intereses "
              img="./img/Group 1980.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Artefacta"
            />
          </Slide>
        </Swiper>
      </S.ListContainer>
      <S.ListContainer className="m-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={swiperBreakpoints}
          modules={[Pagination, Autoplay]}
        >
          <Slide>
            <OffersItem
              title="Iphone 14 Pro Max"
              subtitle="4 meses sin intereses "
              img="./img/Group 111.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Think"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Indurama Refrigeradora"
              subtitle="4 meses sin intereses "
              img="./img/Group 1980.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Artefacta"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="TV LG 55” - XOELED"
              subtitle="4 meses sin intereses "
              img="./img/Group 117.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Think"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Apple Watch"
              subtitle="4 meses sin intereses "
              img="./img/Group 116.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Artefacta"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Iphone 14 Pro Max"
              subtitle="4 meses sin intereses "
              img="./img/Group 111.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Think"
            />
          </Slide>
          <Slide>
            <OffersItem
              title="Indurama Refrigeradora"
              subtitle="4 meses sin intereses "
              img="./img/Group 1980.png"
              information={[
                { q: 'Pagos quincenales de', m: '$120' },
                { q: 'Pagos mensuales de', m: '$240' },
              ]}
              link="Ver más productos de Artefacta"
            />
          </Slide>
        </Swiper>
      </S.ListContainer>
    </S.Container>
  );
};

export default Offers;
