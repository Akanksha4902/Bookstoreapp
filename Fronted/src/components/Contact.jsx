import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
   <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
        <div className="modal-box relative">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <div className='mt-28 '>
        
        <h3 className="font-bold text-lg">Contact us</h3>
        <br />
        <div>
        <span>Name</span>
                    <br />
                    <input
                      type="Name"
                      placeholder='Enter your name'
                      className='w-80 px-3 py-1 border rounded-md outline-none'
                      {...register("name", { required: true })} 
                      />
                      <br />
                      {errors.name && <span className=" text-sm text-red-500">This field is required</span>}
        </div>
                     <div>
                     <span>Email</span>
                      <br />
                      <input
                      type="email"
                      placeholder='Email address'
                      className='w-80 px-3 py-1 border rounded-md outline-none'
                      {...register("email", { required: true })} 
                      />
                      <br /> {errors.email && <span className=" text-sm text-red-500">This field is required</span>}
                     </div>
                     <div>
                     <span>Message</span>
                      <br />
                      <input
                      type="Message"
                      placeholder='Type your message'
                      className='w-80 px-3 py-1 border rounded-md outline-none'
                      {...register("message", { required: true })} 
                      
                      />
                      <br />
        
                     
                     {errors.message && <span className=" text-sm text-red-500">This field is required</span>}
                     </div>
                     <div>
                        <br />
                        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  submit
                </button>
                     </div>
        
        
        </div>

            </form>
        </div>
    </div>
   

   </div>
    </>
  )
}

export default Contact