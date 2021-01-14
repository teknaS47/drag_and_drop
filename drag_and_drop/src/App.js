import "./App.css";
import Button from "./Components/Button";
import Palette from "./Components/Palette";
// https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F14964035%2Fhow-to-export-javascript-array-info-to-csv-on-client-side
function App() {
  function clearPage()
  {
    // document.getElementById("Dragged").innerText=""
    // document.getElementById("Drawing").innerText=""
    // // document.getElementById("default").innerText=""
    // document.getElementById("default").innerHTML=<Palette name={"Design Objects Palette"}/>
    // console.log("CLEAR!")
    window.location.reload()
  }

  return (
    <div className="App h-screen">
      <div className="Palette flex h-3/4 space-x-5 pt-5 p-2">
        <div  className="flex-auto w-2/3">
          <Palette primary name={"Drawing Palette"} />
        </div>
        <div id="default" className="flex-auto w-1/3">
          <Palette name={"Design Objects Palette"}/>
        </div>
      </div>
      <div className="flex justify-between pl-20 p-5 ">
      <div className=" w-1/3">
        <Palette name={"Dragged item"} />
      </div>
        <div className="space-x-2">
          <button onClick={clearPage} className="rounded-3xl py-2 px-5">CANCEL</button>
          {/* <Button name={"CANCEL"}/> */}
          <Button name={"SAVE"} color={"#00a8e7"} textColor={"white"} />
        </div>
      </div>
    </div>
  );
}

export default App;
