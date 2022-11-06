import Banner from "../components/Banner";
import Business from "../components/Business/Business";
import Layout from "../components/Layout";
import BannerTwo from "../components/BannerTwo";
import BannerBuy from "../components/BannerBuy";
import BannerBuyEasy from "../components/BannerBuyEasy";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Business />
      <BannerTwo />
      <BannerBuy />
      <BannerBuyEasy />
    </Layout>
  );
}
