import Button from './Button'
import QRCode from '../Images/QRCode.png';
import BarCode from '../Images/BarCode.png';

const Element =(props)=> {
    if(props.element==="Image")
    {
        return(
        <div id={props.element} className="h-ful object-contain align-middle h-28 w-52 0 m-2 row-span-2 border-2 rounded-xl p-10" draggable="true" onDragStart={drag}>
        <h3 className="h-full align-middle">{props.element}</h3>
        </div> 
        )
    }
    else{
        return(
        <div id={props.element} className="border-2 object-contain align-middle w-52 h-10 m-2 rounded-xl p-2" draggable="true" onDragStart={drag}>
        <h3>{props.element}</h3>
        </div>
        )
    }
    
}
const Image =(props)=>
    // <div id={props.id} className="row-span-2 h-10 p-2" draggable="true" onDragStart={drag} role="img" alt="QR Code">
    <img  src={props.image} id={props.id} className="row-span-2 h-20 p-2"  draggable="true" onDragStart={drag} alt=""/>
    // </div>

function Palette(props)
{
    if(props.name==="Dragged item")
    {
        return(
            <div className="h-full border-2">
                <h1 className="text-left pl-5 p-1"><b>{props.name}</b></h1>
                <hr/>
                <div id="Dragged" className="grid grid-cols-3 gap-4" ></div>
            </div>
        )
    }
    else{
        if(props.name==="Design Objects Palette")
        {
            const elements = [
            "Image",
            "Price",
            "Text",
            QRCode,
            "Source Code",
            "Expiration Date",
            BarCode,
          ];
          const items = [];
          for (const [index, value] of elements.entries()) {
              
            if(value===QRCode){
                items.push(
                <Image key={index}
                image={value}
                id="QR Code"/>)
            }
            else if(value===BarCode){
                items.push(
                <Image key={index}
                image={value}
                id="Bar Code"/>)
            }
            else{
                items.push(
                <Element key={index}
                element={value}
                />
            );
          }
          }
            return(
                <div className="h-full border-2 rounded-xl ">
                    <h1 className="bg-gray-200 text-left rounded-t-xl pl-5 p-1"><b>{props.name}</b></h1>
                    <hr/>
                    <div id="Design" className="grid grid-flow-row gap-4 grid-cols-2 p-5">
                    {items}
                    </div>
                </div>
            )
        
    }
        else{
            function allowDrop(ev) {
                ev.preventDefault();
              }
          
              function drag(ev) {
                ev.dataTransfer.setData("text", ev.target.id);
              }
          
              function drop(ev) {
                ev.preventDefault();
                try{
                var data = ev.dataTransfer.getData("text/plain");
                var ele = document.getElementById(data);
                ev.target.appendChild(ele)
                ele.setAttribute("draggable","false");
                console.log(data,ele.id)
                document.getElementById("Dragged").innerHTML += "<div className='border-2' draggable='false'> "+ele.id+" </div>";
                }
                catch(err){
                  console.log(err);
                }
            }
        return(
            <div className="h-full border-2 rounded-xl ">
                <h1 className="flex-none bg-gray-200 text-left rounded-t-xl pl-5 p-1"><b>{props.name}</b></h1>
                <hr/>
                <div id="Drawing" className="flex flex-wrap h-full p-5"
                onDrop={drop}
                onDragOver={allowDrop}
                />
            </div>
        )
        }
    }
}

function Add()
{
    
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
export default Palette;