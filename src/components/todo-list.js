import { useState } from "react";
import PromptScreen from "./prompt-screen";
import ListItems from "./todo-list/listItems";
import TodoForm from "./todo-list/TodoForm";

export default function TodoList(){

    const [formItem, setFormItem] = useState("")
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [] )
    const [prompt, setPrompt] = useState(false)

    const handleAddTodo = ()=>{
        const newTodoList = [
            ...todoList,
            {
                todo: formItem,
                complete: false,
                timeAdded: Date.now(),
                id: Math.floor(Math.random() * (80000 * 800000) )
            },
        ]

        newTodoList.sort( (a, b) => b.timeAdded - a.timeAdded )

        setTodoList(newTodoList)
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
        setFormItem("")
    }
    
    const clearTodoList = ()=>{
        setPrompt(true)
    }

    const deleteTodo = (todo) => {
        const newTodoList = todoList.filter( thisTodo => thisTodo.id !== todo )
        
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
        setTodoList(newTodoList)
    }
    return (
        <div className="w-[30rem] h-auto">
            <TodoForm 
                formItem ={formItem}
                setFormItem={setFormItem}
                handleAddTodo={handleAddTodo}
                clearTodoList={clearTodoList}
                todoListItems={todoList.length}
            />
            <ListItems todoList={todoList} deleteTodo={deleteTodo} setTodoList={setTodoList}/>
            <PromptScreen setPrompt={setPrompt} prompt={prompt} setTodoList={setTodoList} />
        </div>
    )
}