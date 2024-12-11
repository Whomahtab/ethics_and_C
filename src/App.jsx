import "./App.css";
import LocalNav from "./Components/LocalNav";
import EthicsIntro from "./Components/EthicsItro";
import Card from "./Components/Card";

const cardData = [
  {
    id: 0,
    title: "Our Business Conduct Policy ",
    image:
      "https://www.apple.com/compliance/images/tile/business-conduct-tile/business-conduct-tile_small_2x.jpg",
    content: "Honesty, Respect, Confidentiality, and Compliance",
  },

  {
    id: 1,
    title: "Compliance At Apple",
    image:
      "https://www.apple.com/compliance/images/tile/compliance-org-icon-tile/compliance-org-icon-tile_small_2x.jpg",
    content: "Honesty, Respect, Confidentiality, and Compliance",
  },

  {
    id: 2,
    title: "Bringing Policy to Life",
    image:
      "https://www.apple.com/compliance/images/tile/tile-5a/tile-5a_small_2x.jpg",
    content: "Honesty, Respect, Confidentiality, and Compliance",
  },
  {
    title: "Being Accountable",
    image:
      "https://www.apple.com/compliance/images/tile/accountable-tile/accountable-tile_small_2x.jpg",
    content: "Honesty, Respect, Confidentiality, and Compliance",
  },
];

function App() {
  return (
    <>
      <div className="ethicsAndCompliance">
        <div className="mobile-Nav-gradient lg:bg-custom-gradient">
          <LocalNav />
          <EthicsIntro />
        </div>

        <div className="cardWrapper bg-white  flex flex-col gap-10 pt-20 ">
          {cardData &&
            cardData.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
