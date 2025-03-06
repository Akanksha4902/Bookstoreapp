import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  const loginModalRef = useRef(null);

  const openLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.showModal();
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box relative">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button navigates to home */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
        
          <h3 className="font-bold text-lg">Signup</h3>

          <div className="mt-4 space-y-2">
            <label className="block">Name</label>
            <input type="text" placeholder="Enter your fullname" className="w-80 px-3 py-1 rounded-md border outline-none"
             {...register("name", { required: true })} />
               <br />
               {errors.name && <span className=" text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mt-4 space-y-2">
            <label className="block">Email</label>
            <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 rounded-md border outline-none"
            {...register("email", { required: true })}  />
             <br />
             {errors.email && <span className=" text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mt-4 space-y-2">
            <label className="block">Password</label>
            <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 rounded-md border outline-none"
            {...register("password", { required: true })}  />
             <br />
             {errors.password && <span className=" text-sm text-red-500">This field is required</span>}
          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-700 duration-200">
              Signup
            </button>
            <p className="text-xl">
              Have an account?{" "}
              <button to="/" 
              className="underline text-blue-500 cursor-pointer"
              onClick={()=>
                document.getElementById("my_modal_3").showModal()
              }>
              Login
              </button>{" "}
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>

      {/* Login Modal */}
      { <dialog className="modal" ref={loginModalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <Login />
        </div>
      </dialog> }
    </div>
  );
}

export default Signup;
