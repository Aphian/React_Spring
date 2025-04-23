import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue
    }
    return parasInt(param)
}

const useCustomMove = () => {

    const navigate = useNavigate()

    // 이동하는 로직을 묶어서 구현
    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)

    // page=3&size=10
    const queryDefault = createSearchParams({page, size}).toString()

    const moveToList = () => {

        navigate({pathname:`../list`, search:queryDefault})

    }

    return {moveToList}


}

export default useCustomMove