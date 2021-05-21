import React from "react";

function AddButton(props) {
  return(
      <button type="button" class="btn btn-primary" onClick={props.function}>Añadir</button>
  )
}

export default AddButton;