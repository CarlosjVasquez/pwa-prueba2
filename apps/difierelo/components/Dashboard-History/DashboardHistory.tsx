import * as S from './DashboardHistory.styles';

export const DashboardHistory = () => {
  return (
    <>
      <S.InfoPay>
        <div className="card border-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <div className="w-50">
                <div>
                  <S.TextUlAmount>$100.50</S.TextUlAmount>
                </div>
                <div>
                  <S.TextUlDate>12 Oct</S.TextUlDate>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-around align-items-center">
                <div className="d-flex">
                  <img src="./icons/Ellipse149.svg" />{' '}
                  <S.TextUlPayment className="px-1">PAGADO</S.TextUlPayment>
                </div>
                <div>
                  <img src="./icons/Payment.svg" />
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div className="w-50">
                <div>
                  <S.TextUlAmount>$230.50</S.TextUlAmount>
                </div>
                <div>
                  <S.TextUlDate>13 Oct</S.TextUlDate>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-around align-items-center">
                <div className="d-flex">
                  <img src="./icons/Ellipse149.svg" />{' '}
                  <S.TextUlPayment className="px-1">PAGADO</S.TextUlPayment>
                </div>
                <div>
                  <img src="./icons/Payment.svg" />
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div className="w-50">
                <div>
                  <S.TextUlAmount>$195.00</S.TextUlAmount>
                </div>
                <div>
                  <S.TextUlDate>17 Oct</S.TextUlDate>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-around align-items-center">
                <div className="d-flex">
                  <img src="./icons/Ellipse148.svg" />{' '}
                  <S.TextUlPayment className="px-1">PENDIENTE</S.TextUlPayment>
                </div>
                <div>
                  <img src="./icons/Payment.svg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </S.InfoPay>
    </>
  );
};

export default DashboardHistory;
