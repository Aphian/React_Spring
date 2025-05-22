import { useEffect, useState } from "react"
import { getList } from "../../api/todoApi"
import useCustomMove from "../../hooks/useCustomMove"
const initState: PageResponseDTO<Todo> = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}
const ListComponent = () => {
    const { page, size, moveToRead, moveToList }:UseCustomMoveReturn = useCustomMove()
    //serverData는 나중에 사용
    const [serverData, setServerData] = useState(initState)
    useEffect(() => {
        getList({page,size}).then(data => {
            console.log(data)
            setServerData(data)
        })
    }, [page,size])
    return (
        <div> Todo List Component </div>
    )
}
export default ListComponent