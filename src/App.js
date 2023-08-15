import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import useState from "react";
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map(data) => data.orbitType())];
  const filterByType = (currentType) =>
  {
    const displaySats = satData.filter(newSatDisplay => newSatDisplay.orbitType === currentType);
    setSat(displaySats);
  };
  //variable uses Set method to create new array holding unique elements
  //used to create buttons
  //prevents dupe els: 3 orb types: low/med/high converts into buttons
  return (
    <div>
        <Banner />
        <Buttons
          filterByType={filterByType}
          setSat={setSat}
          displaySats={displaySats}
        />
        <Table sat={sat} />
    </div>
  );
}

export default App;
