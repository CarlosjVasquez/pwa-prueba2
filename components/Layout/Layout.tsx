import Navbar from "../Navbar";
import Footer from "../Footer";
import * as S from "./Layout.styles";

const Layout: React.FunctionComponent<any> = ({ children }) => {
  return (
    <S.Layout className="p-0">
      <Navbar />
      <S.Container>{children}</S.Container>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
