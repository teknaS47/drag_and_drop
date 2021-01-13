import "./App.css";
import Button from "./Components/Button";
import Palette from "./Components/Palette";

function App() {
  return (
    <div className="App h-screen">
      <div className="Palette flex h-1/2">
        <div className="flex-auto">
          <Palette name={"Drawing"} />
        </div>
        <div className="flex-auto">
        <Palette name={"Design Objects"}/>
        </div>
      </div>
      <div >
      <Button name={"Save"} style={{backgroundColor:"red"}} />
      <Button name={"Cancel"} />
      </div>
      
    </div>
  );
}

export default App;
