import React, { useEffect, useState } from 'react'
import ResultModal from '../common/ResultModal'
import useCustomMove from '../../hooks/useCustomMove';
import { postAdd } from '../../api/todoApi'

const initState = {
  title: '',
  content: '',
  dueDate: '',
}

function AddComponent() {

  const [todo, setTodo] = useState({...initState})

  const [result, setResult] = useState(null)

  const {moveToList} = useCustomMove()

  const handleChangeTodo = (e) => {

    console.log(todo[e.target.name] = e.target.value)

    todo[e.target.name] = e.target.value
    setTodo({...todo})

  }

  const handleClickAdd = () => {
    // console.log(todo)
    postAdd(todo).then(result => {
      // {TNO : 33}
      setResult(result.TNO)
      setTodo({...initState})
    })
  }

  const closeModal = () => {
    setResult(null)
    moveToList()
  }

  return (
    <div className='border-2 border-sky-200 mt-10 p-4'>
      <div className='flex justify-center'>
        <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
          <div className='w-1/5 p-6 text-right font-bold'>TITLE</div>
          <input className='w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md'
                name='title' type={'text'} value={todo.title} onChange={handleChangeTodo}
          >
          </input>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
          <div className='w-1/5 p-6 text-right font-bold'>CONTENT</div>
          <input className='w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md'
                name='content' type={'text'} value={todo.content} onChange={handleChangeTodo}
          >
          </input>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
          <div className='w-1/5 p-6 text-right font-bold'>
            DUEDATE
          </div>
          <input className='w-4/5 p-6 rounded-r border-solid border-neutral-500 shadow-md'
                name='dueDate' type={'date'} value={todo.dueDate} onChange={handleChangeTodo}>
          </input>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='relative mb-4 flex p-4 flex-wrap items-stretch'>
          <button type='button' onClick={handleClickAdd} className='rounded p-4 w-36 bg-blue-500 text-xl text-white'>
            ADD
          </button>
        </div>
      </div>

      {result ? 
        <ResultModal
            title={'Add Result'}
            content={`New ${result} Added`}
            callbackFn={closeModal}
        >
        </ResultModal> 
      : 
      <></>}
      
    </div>
  )
}

export default AddComponent