import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue
    }
    return parasInt(param)
}

const useCustomMove = () => {

    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)

    // 이동하는 로직을 묶어서 구현
    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)

    // page=3&size=10
    const queryDefault = createSearchParams({page, size}).toString()

    const moveToList = (pageParam) => {

        let queryStr = ""

        if (pageParam) {

            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 10)

            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString()

        } else {
            queryStr = queryDefault
        }

        setRefresh(!refresh)

        navigate({pathname: '../list', search: queryStr})

        return {moveToList}

    }

    const moveToModify = (num) => {
        navigate({
            pathname: `../modify/${num}`,
            search: queryDefault
        })
    }

    // 변수를 tno 가 아닌 num 인 이유 어디서든 사용하게 하기 위해 통합적인 의미
    const moveToRead = (num) => {
        navigate({
            pathname: `../read/${num}`,
            search: queryDefault
        })
    }

    return {moveToList, moveToModify, moveToRead, page, size, refresh}


}

export default useCustomMove