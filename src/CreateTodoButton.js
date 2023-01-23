import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {


  const click=(mensaje)=>{

    alert(mensaje)
  }
  return (
    <button 
    className="CreateTodoButton"
    onClick={()=>{

      click("la kago");
    }
  }
    >+</button>
  );
}

export { CreateTodoButton };