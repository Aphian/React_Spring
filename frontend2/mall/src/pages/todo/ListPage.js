import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ListComponent from '../../components/todo/ListComponent'

function ListPage() {

  // const [queryParams] = useSearchParams()

  // // queryString 처리
  // const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
  // const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

  return (
    <div className ="p-4 w-full bg-orange 200 ">
        <div className ="text-3xl font-extrabold">
            Todo List Page Component 
        </div>
        <ListComponent></ListComponent>
    </div>
  )
}

export default ListPage