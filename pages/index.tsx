import Navbar from "../components/Navbar";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Container = styled.div`
  margin-top: 90px;
`;

export default function Home() {
  return (
    <div className="p-0">
      <Navbar />
      <Container>
        <Banner />
      </Container>
      <Footer />
    </div>
  );
}
