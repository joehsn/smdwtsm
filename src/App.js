import Blocks from "./components/blocks";
import Header from "./components/Header";
import SmallBlocks from "./components/smallBlocks";

function App() {
  return (
    <div className="main">
      <div className="content">
        <Header />
        <div className="content__container">
          <Blocks />
          <SmallBlocks />
        </div>
      </div>
      <div className="attribution">
        Coded by <a href="https://linktr.ee/joe_hsn">@Joe_Hsn</a>
      </div>
    </div>
  );
}

export default App;
