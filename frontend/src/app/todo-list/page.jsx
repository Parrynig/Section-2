'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [taskArray, setTaskArray] = useState([]);

    const addTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            const obj = { task: e.target.value, completed: false };
            setTaskArray([obj, ...taskArray])

            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        console.log(index);
        const temp = taskArray;
        temp.splice(index, 1);
        setTaskArray([...temp]);
    }

    return (
        <div className='max-w-[90rem] mx-auto'>
            <h1 className='text-center my-5 font-bold text-4xl'>TodoList</h1>

            <div className='border-2 rounded-md shadow-lg mt-5 p-5'>

                <input onKeyDown={addTask} type="text" className='border-2 p-2 w-full' />

                <div>

                    {
                        taskArray.map((obj, index) => {
                            return (<div className='flex justify-between p-2'>
                                <div className='flex items-center gap-4'>
                                    <input type="checkbox" />
                                    <p>{obj.task}</p>
                                </div>
                                <button onClick={ () => { deleteTask(index) } } className='p-3 rounded-md bg-red-500 text-white'>Delete</button>
                            </div>)
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default TodoList