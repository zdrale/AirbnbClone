import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";
import Home from "./Home";
import { getExploreData, getCardsData } from "@/lib/api";
export default function Index({ exploreData, cardData }) {
  return <Home exploreData={exploreData} cardData={cardData} />;
}

export async function getStaticProps() {
  const exploreData = await getExploreData();
  const cardData = await getCardsData();
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
