
import React from 'react';
import { TodoCounter} from './TodoCounter';
import { TodoSeach } from './TodoSeach';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';
const defaultodos=[{
text:"cortar cebollas",
completed:false
},
{
  text:"cortar zanahoria",
  completed:false

},

{
  text:"cortar remolacha",
  completed:false

},
{
  text:"correr",
  completed:true

}
]
function App() {


  const [todos,setTodo]=React.useState(defaultodos);

  const [search,setSearch]=React.useState("");

  const completedTodos=todos.filter(todos=>todos.completed).length

  const totalTodos=todos.length;

  let array=[];

  if(search.length<=1){

    array=todos;

    console.log(search.length)
  }else{

    
    array=todos.filter(todo=>{

      const todoText=todo.text.toLowerCase().includes(search.toLocaleLowerCase())
      return todoText
    })

    
  }
  return (
   <React.Fragment>

    {<TodoCounter
    
    total={totalTodos}
    completed={completedTodos}
    />}
   

    {<TodoSeach
  search={search}
  setSearch={setSearch}
    
    />}


    {<TodoList>
    {array.map(array=>(

      <TodoItem 
      key={array.text}
     
      text={array.text}
      
      completed={array.completed}/> 
   ))}

 

    </TodoList>}  
    {/* {<CreateTodoButton/>} */}

    <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
