import Button from './Button'
import QRCode from '../Images/QRCode.png';
import BarCode from '../Images/BarCode.png';

const Element =(props)=> {
    if(props.element==="Image")
    {
        return(
        <div className="row-span-2 border-2 rounded-xl p-2">
        {props.element}
        </div> 
        )
    }
    else{
        return(
        <div className="border-2 rounded-xl p-2">
        {props.element}
        </div>
        )
    }
    
}
const Image =(props)=> 
    <div className="row-span-2 p-2">
    <img src={props.image} alt=""/>
    </div>

function Palette(props)
{
    if(props.name==="Dragged item")
    {
        return(
            <div className="h-full border-2">
                <h1 className="text-left pl-5 p-1"><b>{props.name}</b></h1>
                <hr/>
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
            if(value===QRCode||value===BarCode){
                items.push(
                <Image key={index}
                image={value}/>)
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
                    <div className="grid grid-flow-row gap-4 grid-cols-2 p-5">
                    {items}
                    </div>
                </div>
            )
        
    }
        else{
        return(
            <div className="h-full border-2 rounded-xl ">
                <h1 className="bg-gray-200 text-left rounded-t-xl pl-5 p-1"><b>{props.name}</b></h1>
                <hr/>
            </div>
        )
        }
    }
}
export default Palette;