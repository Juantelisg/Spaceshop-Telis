import React from 'react';

function DeleteItem(props) {
  return (
    <button type="button" class="btn btn-danger" onClick={props.function}>
      Quitar
    </button>
  );
}

export default DeleteItem;