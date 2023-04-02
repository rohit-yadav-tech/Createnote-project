import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";


function App() {

  const [additem, setitem] =useState([])

  const addnote =(note)=>{
    setitem((prevalue)=>{
      return(
      [...prevalue,note]
      );
          })
      }

 const onDelete = (id)=>{
      setitem((olditms)=>{
        return(

          olditms.filter((currdata,index)=>{
            return(
              index !== id
            );
          })
        );
      })
 }

  return (<>
   
   <Header/>

   <CreateNote
   passnote={addnote}
   />
    
   <div className="note_container">
   {   additem.map((val,index)=>{
        return(
          <Note
          key={index}
          id={index}
          title ={val.title}
          content ={val.content}
          deleteitem ={onDelete}
          />
        );
      })}
      
      
      <Footer/>
      </div>
      
   </>
   
  );
}

export default App;


