import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit =async (data) => {
        const userInfo={
            email:data.email,
            password:data.password,
          }
          await axios.post("http://localhost:4001/user/login",userInfo)
          .then((res) => {
            console.log(res.data)
            if(res.data){

              toast.success("login successfully!!")
              document.getElementById("my_modal_3").close();
              setTimeout(() => {
                window.location.reload();
                localStorage.setItem("Users",JSON.stringify(res.data.user));
              }, 2000);
              
              
            }
            
          }).catch((err) => {
            if(err.response){
              console.log(err);
            toast.error("Error: " + err.response.data.massage)
            setTimeout(() => {
              
            }, 2000);
            }
            
          });
    };
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                         onClick={()=> document.getElementById("my_modal_3").close()}
                         >✕
                         </Link>

                    <h3 className="font-bold text-lg"> Login !</h3>
                    {/* email */}
                    <div className="mt-4 space-y-2">
                    <span>email</span>
                    <br />
                    <input type="email" 
                    placeholder="enter your email"  
                    className="w-80 px-3 py-1 border rounded-md outline-none" 
                    {...register("email", { required: true })} 
                    />
                    <br />
                    {errors.email && <span className="text-sm text-red-700">This field is required</span>}
                    </div>
                    {/* password */}
                    <div className="mt-4 space-y-2">
                    <span>password</span>
                    <br />
                    <input type="password" 
                    placeholder="enter your password"  
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })} 
                    />
                    <br />
                    {errors.password && <span className="text-sm text-red-700">This field is required</span>}
                    </div>
                    {/* button */}
                    <div className="flex justify-around mt-6">
                        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                        Login
                        </button>
                       <p>Not registerd?{" "}
                       <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                        Signup
                        </Link>{" "}
                       </p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login;