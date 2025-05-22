interface PageParam {
    page?: string | number
    size?: string | number
}

interface UseCustomMoveReturn {
    moveToList: (pageParam?: PageParam) => void
    page: number
    size: number
}