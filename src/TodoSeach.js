import React from "react";
import './TodoSeach.css'

function TodoSeach({search,setSearch}){

    // const [search,setSearch]=React.useState('');

const onSearch=(e)=>{
   
console.log(e.target.value)
        // setSearch(e.target.value)
        setSearch(e.target.value)

}
    return(
<div className="container">

    
<input className="TodoSearch" placeholder="Cebolla"

onChange={
onSearch}/>

</div>
// ,<p> {search}</p>
    );
}

export  {TodoSeach};