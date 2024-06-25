'use client'
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

  const { id } = useParams();
  const [userData ,setUserData] = useState(null);

  const fetchUserData = () => {
    axios.get('http://localhost:5000/user/getbyid/' + id)
      .then((result) => {
        console.log(result.status);
        console.log(result.data);

        setUserData(result.data);

      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  const submitForm = (values ) => {
    console.log(values );

    axios.put('http://localhost:5000/user/update/'+id, values)
    .then((result) => {
      if(result.status === 200)
        toast.success('User Update Successfully')
    }).catch((err) => {
      toast.err('Failed to Update user')
      console.log(err);
      
    });
  }


  return (
    <div className='max-w-md mx-auto py-5'>
      <h1 className='text-3xl text-center font-bold'>Update User</h1>

      <div className='border-2 rounded-xl p-6 mt-10'>

    { userData !== null ? 
        <Formik initialValues={userData} onSubmit = {submitForm}> 

        {
          (updateForm) => {
            return <form onSubmit={updateForm.handleSubmit}>
            <label htmlFor="name"> Name </label>
  
            <input type="text"
              id="name"                              //used for formik
              onChange={updateForm.handleChange}     // for fornik
              value={updateForm.values.name }
              className='border-2 bold w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />
  
            <label htmlFor="email"> Email Address </label>
  
            <input type="email"
              id="email"                              //used for formik
              onChange={updateForm.handleChange}     // for fornik
              value={updateForm.values.email }
              className='border-2 bold w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />
  
  
            <label htmlFor="password"> Password </label>
  
            <input type="password"
              id="password"                              //used for formik
              onChange={updateForm.handleChange}     // for fornik
              value={updateForm.values.password }
              className='border-2 bold w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />
       
       
        <label htmlFor="city"> City </label>
  
        <input type="text"
          id="city"                              //used for formik
          onChange={updateForm.handleChange}     // for fornik
          value={updateForm.values.city }
          className='border-2 bold w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />
  
         <div className='text-center'>
           <button type='submit' className='my-5 py-3 px-10 bg-blue-500  text-white rounded-lg'>Submit</button> 
           </div>
      </form>
          }
        }

        </Formik>
  
        : <p>Loading... Loading re BAWA  </p>}


        
        
      </div>
    </div>
  )
}

export default UpdateUser