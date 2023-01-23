import React from 'react';
import './TodoItem.css';

function TodoItem(props) {


    const complete=()=>{

        alert('se completo el todo '+props.text)
    }

    const delet=()=>{

        alert('borraste  '+props.text)
    }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={complete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      
      onClick={delet}
      >

      
      
        X
      </span>
    </li>
  );
}

export { TodoItem };