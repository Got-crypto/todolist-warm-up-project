import { useState } from "react";
import ListItems from "./todo-list/listItems";
import TodoForm from "./todo-list/TodoForm";

export default function TodoList(){

    const [formItem, setFormItem] = useState("")
    const [todoList, setTodoList] = useState([])

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
    return (
        <div className="w-[30rem] h-auto">
            <TodoForm 
                formItem ={formItem}
                setFormItem={setFormItem}
                handleAddTodo={handleAddTodo}
            />
            <ListItems todoList={todoList} />
        </div>
    )
}