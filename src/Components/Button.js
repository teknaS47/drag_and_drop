function Button(props) {
  if (props.name === "CANCEL") {
    return (
      <input
        onClick={cancel}
        type="Submit"
        defaultValue={props.name}
        style={{ backgroundColor: props.color, color: props.textColor }}
        className="rounded-3xl py-2 px-5"
      />
    );
  } else {
    return (
      <input
        type="Submit"
        defaultValue={props.name}
        style={{ backgroundColor: props.color, color: props.textColor }}
        className="rounded-3xl py-2 px-5"
      />
    );
  }
}
function cancel(e) {
  e.preventDefault();
  console.log("Cancel!.");
  window.location.reload();
}

export default Button;
