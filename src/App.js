import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import useState from "react";
import satData from "./components/satData";


function App() {
  const [ sat, setSat ] = useState( satData );//sat used to compare changes in state. setStat is function will be passed

  //both used in other components
  const displaySats = [ ...new Set( satData.map( ( data ) => data.orbitType ) ) ];
  //variable uses Set method to create new array holding unique elements
  //used to create buttons
  //prevents dupe els: 3 orb types: low/med/high converts into buttons
  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;
