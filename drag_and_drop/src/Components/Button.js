function Button(props)
{
    if(props.name==="Cancel"){
        return(
            <input onClick={Clear} type="Submit" defaultValue={props.name} style={{backgroundColor: props.color, color:props.textColor}} className="rounded-3xl py-2 px-5"/>
        ) 
    }
    else{
        return(
            <input type="Submit" defaultValue={props.name} style={{backgroundColor: props.color, color:props.textColor}} className="rounded-3xl py-2 px-5"/>
        ) 
    }
      
}

function Clear()
{ 
    document.getElementById("Dragged").innerText=""
    console.log("CLEAR!")

}
export default Button;