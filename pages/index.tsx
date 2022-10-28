import Navbar from "../components/Navbar";
import styled from "styled-components";
import Banner from "../components/Banner";

const Container = styled.div`
  margin-top: 90px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
`;

export default function Home() {
  return (
    <div className="p-0">
      <Navbar />
      <Container>
        <Banner />
      </Container>
      <Footer className="py-3 text-white text-center w-100 bg-dark">
        <p>A PWA Web App built on Next.js</p>
      </Footer>
    </div>
  );
}
