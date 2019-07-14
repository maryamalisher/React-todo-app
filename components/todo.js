import React, {Component} from 'react';
let getid;
export class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:"",
            todoItems:[]
        }
        this.delete=this.delete.bind(this);
        this.edit=this.edit.bind(this);
        this.Add=this.Add.bind(this);
        this.inputHandler=this.inputHandler.bind(this);
        this.update=this.update.bind(this);
    }



inputHandler=(e)=>{
    let newTodo=e.target.value;
    this.setState({
        items:newTodo
    })
 
}
Add(){
let renderTodo=this.state.todoItems;

renderTodo.push(this.state.items);
this.setState({
    todoItems:renderTodo,
    items:""
})

}

delete(e){
    let id=e.target.id;
    
    let iteminstance=this.state.todoItems;
    iteminstance.splice(id,1);
    this.setState({
        todoItems:iteminstance
    })

}
edit=(e)=>{
    getid=e.target.id;
    this.setState({
        items:this.state.todoItems[e.target.id]
    })
    document.getElementById("additem").style.display="none";
    document.getElementById("update").style.display="block";
    e.target.parentNode.style.borderBottom="2px solid red";
    e.target.style.display="none";
    
    

}
update(e){
    let updateitem=this.state.todoItems;
    updateitem[getid]=this.state.items;
    this.setState({
      todoItems:updateitem,
      items:""
})
document.getElementById("additem").style.display="block";
document.getElementById("update").style.display="none";


let item=document.getElementsByClassName("edititem")
for(let i=0 ; i< item.length ; i++)
{
    item[i].style.display="block";
    item[i].parentNode.style.borderBottom="none";
}


}


    render(){
        let newTodo=this.state.todoItems.map((e,i)=>{
            return(
                
                    <li key={i}>{e} 
                    <button onClick={this.delete} id={i}>X</button>
                    <button onClick={this.edit} className="edititem" id={i}>Edit</button>

                    </li>
                
            )

        })
        
        return(
            <div>
                <div className="header">
                    <h2>React TO-DO-LIST</h2>
                
                </div>
                <div className="body">
                    <ul>
                        {newTodo}

                    </ul>
                </div>
                <div className="footer">
                <input type="text" onChange={this.inputHandler} value={this.state.items}></input>
                <button id="additem" onClick={this.Add}>+</button>
                <button id="update" onClick={this.update} >Update</button>
                </div>
            </div>
        )
    }
}
