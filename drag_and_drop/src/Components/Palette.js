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
        return(
            <div className="h-full border-2 rounded-xl ">
                <h1 className="bg-gray-200 text-left rounded-t-xl pl-5 p-1"><b>{props.name}</b></h1>
                <hr/>
            </div>
        )
    }
}
export default Palette;