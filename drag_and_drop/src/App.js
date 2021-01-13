import "./App.css";
import Button from "./Components/Button";
import Palette from "./Components/Palette";

function App() {
  return (
    <div className="App h-screen">
      <div className="Palette flex h-1/2 space-x-5 p-5">
        <div className="flex-auto w-2/3">
          <Palette primary name={"Drawing Palette"} />
        </div>
        <div className="flex-auto w-1/3">
          <Palette name={"Design Objects Palette"}/>
        </div>
      </div>
      <div className="flex justify-between pl-20 p-5 ">
      <div className=" w-1/3">
        <Palette name={"Dragged item"} />
      </div>
        <div className="space-x-2">
          <Button name={"Cancel"}/>
          <Button name={"Save"} color={"#00a8e7"} textColor={"white"} />
        </div>
      </div>
    </div>
  );
}

export default App;
