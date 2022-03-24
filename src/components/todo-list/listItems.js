import { formatDistance } from "date-fns"

export default function ListItems({todoList}){
    return (
        <div className="">
            {
                todoList.map((todoItem, index)=>{
                    return <div key={index}>
                        <p>
                            {
                                todoItem.todo
                            }
                        </p>
                        <p>
                            {
                                formatDistance( todoItem.timeAdded, new Date())
                            }
                        </p>
                    </div>
                })
            }
        </div>
    )
}