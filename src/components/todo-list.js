import { useState } from "react";
import PromptScreen from "./prompt-screen";
import ListItems from "./todo-list/listItems";
import TodoForm from "./todo-list/TodoForm";

export default function TodoList(){

    const [formItem, setFormItem] = useState("")
    const [todoList, setTodoList] = useState([])
    const [prompt, setPrompt] = useState(false)

    const handleAddTodo = ()=>{
        const newTodoList = [
            ...todoList,
            {
                todo: formItem,
                timeAdded: Date.now()
            }
        ]

        setTodoList(newTodoList)
        setFormItem("")
    }

    const clearTodoList = ()=>{
        setPrompt(true)
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
            <ListItems todoList={todoList} />
            <PromptScreen setPrompt={setPrompt} prompt={prompt} setTodoList={setTodoList} />
        </div>
    )
}