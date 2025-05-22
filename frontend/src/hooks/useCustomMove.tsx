import { useCallback, useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router"

const useCustomMove = () => {

    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const pageStr: string | null  = queryParams.get('page') 
    const sizeStr: string | null  = queryParams.get('size')
    const page: number = pageStr ? Number(pageStr) : 1
    const size: number = sizeStr ? Number(sizeStr) : 10
    const queryDefault = createSearchParams({
        page: String(page),
        size: String(size),
    }).toString()

    const [refresh, setRefresh] = useState<boolean>(false)

    const moveToList = (pageParam?: PageParam ) => {
        let queryStr = ''
        if (pageParam) {
            const pageNum = Number(pageParam.page) || 1
            const sizeNum = Number(pageParam.size) || 10 
            queryStr = createSearchParams({
                page: String(pageNum),
                size: String(sizeNum),
            }).toString()

            if(queryStr === queryDefault) {
                setRefresh(!refresh)
            }

        } else {
            queryStr = queryDefault
        }
        navigate({ pathname: `../list`, search: queryStr })
    }

    const moveToModify = useCallback((num:number) => {

        console.log(queryDefault)
        navigate({ pathname: `../modify/${num}`, search: queryDefault })
    },[page,size])

    const moveToRead = (tno:number) => {

        navigate({ pathname: `../read/${tno}`, search: queryDefault})

    }

    return {page,size, moveToList, moveToModify, moveToRead, refresh}
}

export default useCustomMove