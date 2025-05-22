interface Todo {
    tno: number
    title: string
    content: string
    dueDate: string | null
    complete: boolean
}

interface TodoAdd {
    title: string,
    content: string,
    dueDate: string
}