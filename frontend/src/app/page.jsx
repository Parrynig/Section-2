import { Button } from '@mantine/core';
import React from 'react'

const Home = () => {

  let num = 324;

  return (
    <>
      <div>

        <Button> Mantine Button </Button>

        <h1 style={{ color: 'red', fontSize: '40px' }} >Using Inline CSS</h1>

        <input className='border-2' type="text" />

        <label htmlFor=""></label>

        <p>{num + 3478}</p>

      </div>
      <h1>dlsfkj</h1>
    </>
  )
}

export default Home;