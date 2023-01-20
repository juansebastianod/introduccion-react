
import React from 'react';
import { TodoCounter} from './TodoCounter';
import { TodoSeach } from './TodoSeach';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
// import './App.css';
const todos=[{
text:"cortar cebollas",
completar:false
},
{
  text:"cortar zanahoria",
  completar:false

},

{
  text:"cortar remolacha",
  completar:false

},
]
function App() {
  return (
   <React.Fragment>

    {<TodoCounter/>}
   

    {<TodoSeach/>}


    {<TodoList>
    {todos.map(todo=>(

      <TodoItem key={todo.text} text={todo.text}/> 
   ))}

 

    </TodoList>}  
    {/* {<CreateTodoButton/>} */}

    <button>enviar</button>

    </React.Fragment>
  );
}

export default App;
