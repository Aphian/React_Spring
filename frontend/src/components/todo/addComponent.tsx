import { ChangeEvent, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/resultModal";

const initState:TodoAdd = {
    title: '',
    content: '',
    dueDate: ''
}

function AddComponent() {

    const [todo, setTodo] = useState<TodoAdd>({...initState})

    const {moveToList}: UseCustomMoveReturn = useCustomMove()

    const [result, setResult] = useState<number | null > (null)

    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;
        setTodo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleClickAdd =(): void => {
        postAdd(todo).then(result => {
            console.log(result)
            setResult(result.tno)
            setTodo({...initState})
        }).catch(e => {
            console.error(e)
        })
    }

    const closeModal = () : void => {
        setResult(null)
        moveToList()
    }

    return (
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4">
            {/* Modal 처리 */}
            {result && <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal} />}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                            name="title"
                            type={'text'} 
                            value={todo.title}
                            onChange={handleChangeTodo}>
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">CONTENT</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                            name="content"
                            type={'text'} 
                            value={todo.content}
                            onChange={handleChangeTodo}>
                    </input>
                </div>  
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                            name="dueDate"
                            type={'date'} 
                            value={todo.dueDate}
                            onChange={handleChangeTodo}>
                    </input>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button" 
                            className="rounded p-4 w-36 bg-blue-500 text-xl  text-white "
                            onClick={handleClickAdd}>ADD
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddComponent;