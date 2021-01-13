function Button(props)
{
    return(
        <input type="Submit" value={props.name} style={{backgroundColor: props.color, color:props.textColor}} className="rounded-3xl py-2 px-5"/>
    )
}
export default Button;