import React from 'react';
import * as S from './DashboardStores.styles';

interface CardStoreProps {
  title: string;
  subtitle: string;
  img: string;
}

export const CardStore = (props: CardStoreProps) => {
  return (
    <S.DivCardStore className="card w-50 border-0">
      <S.CardImg className="card-img-top" src={props.img} />
      <S.CardBody className="card-body p-0">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.subtitle}</p>
      </S.CardBody>
    </S.DivCardStore>
  );
};
export default CardStore;
