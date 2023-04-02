import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';



const Note = (props) =>{

  const  deleteNote = ()=>{
        props. deleteitem(props.id);
  }

    return(
<div className="note">
    <h1>{props.title}</h1>
    <br/>
    <p>{props.content}</p>
    <button class="delete-button" onClick={deleteNote}>
    <DeleteIcon class="icon"></DeleteIcon>
    </button>
</div>
    );
}


export default Note;