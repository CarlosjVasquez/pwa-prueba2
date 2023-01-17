import * as S from './DashboardStores.styles';
import { Swiper, SwiperSlide as Slide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { sizes } from '../../utils/style/Responsive';
import CardStore from './CardStore';

export const DashboardStores = () => {
  const swiperBreakpoints = {};

  swiperBreakpoints[sizes.phone] = {
    slidesPerView: 1,
    spaceBetween: 10,
  };
  swiperBreakpoints[sizes.tablet] = {
    slidesPerView: 3,
    spaceBetween: 20,
  };
  swiperBreakpoints[sizes.laptop] = {
    slidesPerView: 3,
    spaceBetween: 30,
  };

  return (
    <>
      <S.DivStore className="d-flex">
        <div className="w-100 d-flex pt-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
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
              <CardStore
                title="Frecuento"
                subtitle="4 meses sin intereses en tecnología"
                img="./img/Rectangle 24.png"
              />
            </Slide>
            <Slide>
              <CardStore
                title="Artefacta"
                subtitle="4 meses sin intereses en tecnología"
                img="./img/Rectangle 26.png"
              />
            </Slide>
            <Slide>
              <CardStore
                title="Frecuento"
                subtitle="4 meses sin intereses en tecnología"
                img="./img/Rectangle 24.png"
              />
            </Slide>
            <Slide>
              <CardStore
                title="Artefacta"
                subtitle="4 meses sin intereses en tecnología"
                img="./img/Rectangle 26.png"
              />
            </Slide>
            <Slide>
              <CardStore
                title="Frecuento"
                subtitle="4 meses sin intereses en tecnología"
                img="./img/Rectangle 24.png"
              />
            </Slide>
            <Slide>
              <CardStore
                title="Artefacta"
                subtitle="4 meses sin intereses en tecnología"
                img="./img/Rectangle 26.png"
              />
            </Slide>
          </Swiper>
        </div>
      </S.DivStore>
    </>
  );
};

export default DashboardStores;
