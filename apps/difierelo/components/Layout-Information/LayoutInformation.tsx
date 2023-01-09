import * as S from './LayoutInformation.styles';

const LayoutInformation: React.FunctionComponent<any> = ({ children }) => {
  return (
    <S.Layout className="p-0">
      <S.Container className="d-flex w-100 justify-content-center">
        {children}
      </S.Container>
    </S.Layout>
  );
};

export default LayoutInformation;
