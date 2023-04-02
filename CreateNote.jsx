import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';





const CreateNote = (props) =>{

const [expand,setExpand] =useState(false);
console.log(expand);

const [note , setnote] =useState({

    title:"",
    content:""
});

const inputEvnet = (event)=>{
  let {name,value} = event.target;
  setnote((prevalue)=>{
    return({
      ...prevalue,
      [name] :value,
    });
  });
  
}

const addEvent = () =>{
props.passnote(note);
setnote({
  title:"",
  content:""
})
};

const expandIt = () => {                 //ye text area ke liye function hai

  setExpand(true);              //ise true kar dene se input field dikhai dega
}       

const backtonormal = () =>{
  setExpand(false);             //double click par tirnarry operator ki value ko false kiya ja raha hai
}

    return(<>
       <div className="main_note"> 
       <form action="">
{expand ?
        <input type="text"              
         placeholder="Title"
         maxlength="7"
         name="title"                 //ye turnury operator hai yadi value true hogi to statement dikhegi yani ki input field dikhega
         onChange={inputEvnet}
        value={note.title}            
          autoComplete="off"/> :null}
          

       <textarea  cols="" rows=""
        placeholder="write a note"
        name="content"
        onChange={inputEvnet}   //is par onclick karke mujhe input field dikhana hai aur me setexpand me true pass kar dunga 
        value={note.content}
        onClick ={expandIt}
        onDoubleClick={backtonormal}

                               />
    

     {expand ?  <Button class="button" onClick={addEvent}>
         <AddIcon/>
       </Button> :null}
       </form>
       </div>
   </> );
}

export default CreateNote;