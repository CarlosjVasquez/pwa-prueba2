import { sizes } from '../../utils/style/Responsive';
import { Swiper, SwiperSlide as Slide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import * as S from './DashboardCarrusel.styles';
import CardProduct from './CardProduct';

export const DashboardCarrusel = () => {
  const swiperBreakpoints = {};

  swiperBreakpoints[sizes.phone] = {
    slidesPerView: 1,
    spaceBetween: 10,
  };
  swiperBreakpoints[sizes.tablet] = {
    slidesPerView: 5,
    spaceBetween: 20,
  };
  swiperBreakpoints[sizes.laptop] = {
    slidesPerView: 5,
    spaceBetween: 30,
  };

  return (
    <>
      <S.DivCarrusel className="d-flex">
        <div className="d-flex w-100">
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
              <CardProduct
                title="Iphone 14 Pro Max"
                subtitle="4 meses sin intereses"
                img="./img/Group 111.png"
              />
            </Slide>
            <Slide>
              <CardProduct
                title="Indurama Refrigeradora"
                subtitle="4 meses sin intereses"
                img="./img/Group 1980.png"
              />
            </Slide>
            <Slide>
              <CardProduct
                title="Iphone 14 Pro Max"
                subtitle="4 meses sin intereses"
                img="./img/Group 111.png"
              />
            </Slide>
            <Slide>
              <CardProduct
                title="Indurama Refrigeradora"
                subtitle="4 meses sin intereses"
                img="./img/Group 1980.png"
              />
            </Slide>
            <Slide>
              <CardProduct
                title="Iphone 14 Pro Max"
                subtitle="4 meses sin intereses"
                img="./img/Group 111.png"
              />
            </Slide>
            <Slide>
              <CardProduct
                title="Indurama Refrigeradora"
                subtitle="4 meses sin intereses"
                img="./img/Group 1980.png"
              />
            </Slide>
          </Swiper>
        </div>
      </S.DivCarrusel>
    </>
  );
};

export default DashboardCarrusel;
