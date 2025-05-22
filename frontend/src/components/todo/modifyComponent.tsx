import { ChangeEvent, useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
 
const initState = {  tno:0, title:'', writer: '', dueDate: null, complete: false }
 
const ModifyComponent = ({tno}:{tno:number}) => { 

    const [todo, setTodo] = useState({...initState})

    const [result, setResult] = useState<string | null > (null)

    useEffect(() => {
        getOne(tno).then(data => setTodo(data))
    },[tno])

    const handleChangeTodo = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setTodo((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleChangeTodoComplete = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        todo.complete = (value === 'Y')

        setTodo({...todo})
    }

    return ( 
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4"> 
            <div className="flex justify-end p-4">
                <button type="button" 
                        className="inline-block rounded p-4 m-2 text-xl w-32  text-white bg-red-500" >    
                    Delete 
                </button>
                <button type="button" 
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500" >
                    Modify
                </button>  
            </div>
        </div>
    );
} 
export default ModifyComponent;
