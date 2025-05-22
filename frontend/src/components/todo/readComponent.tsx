import { useEffect, useState } from "react"
import { getOne } from "../../api/todoApi"

const initState : Todo = {tno:0, title:'', content:'', dueDate: null,  complete: false }
const ReadComponent = ({tno}: {tno:number}) => {
    const [todo, setTodo] = useState<Todo>(initState) //아직 todo는 사용하지 않음 
    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data)
            setTodo(data)
        })  
    }, [tno])
    return ( 
        <div></div>
    )
}

export default ReadComponent