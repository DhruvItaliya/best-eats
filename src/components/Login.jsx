import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
    const [credential, setCredential] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch('/api/auth/login', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: credential.email, password: credential.password })
        // });
        // const json = await response.json();
        // if (json.success) {
        //     // if user valid then store token and redirect
        //     localStorage.setItem('token', json.token);
        //     localStorage.setItem('name', json.name);
        //     localStorage.setItem('email', json.email);
        //     props.showAlert("Logged in Successfully", "success");
        // }
        // else {
        //     props.showAlert("Invalid Credentials", "danger");
        // }
        navigate("/");
        props.setIsLoginCliked(!props.isLoginCliked);
    }

    const handleChange = (e) => {
        setCredential((prevCredential) => ({ ...prevCredential, [e.target.name]: e.target.value }));
    }
    return (
        <>
            {props.isLoginCliked && <div className=' flex justify-center items-center w-screen h-screen bg-black/60 fixed top-0 left-0 z-10'>
                <div className=" bg-white w-[80%] h-[400px] md:w-[500px] md:h-[400px] rounded-2xl">
                    <div className='m-4'>
                        <div className='relative' >
                            <h1 className='py-3 text-3xl text-red'>Login</h1>
                            <AiOutlineClose className='absolute right-2 top-2' size={30} onClick={() => props.setIsLoginCliked(!props.isLoginCliked)} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <form onSubmit={handleSubmit} className='w-[80%]'>
                                <div className="my-3 flex flex-col">
                                    <label htmlFor="email" className="my-1 text-lg">Phone</label>
                                    <input type="email" className=" w-full text-lg border-2 p-1 border-gray-500 focus:outline-orange-400 rounded-md" value={credential.email} onChange={handleChange} name="phone" id="phone" placeholder='Phone' />
                                    <div id="emailHelp" className="text-gray-500 w-full">We'll never share your Phone number with anyone else.</div>
                                </div>
                                <div className="my-3 flex flex-col">
                                    <label htmlFor="password" className="my-1 text-lg">Password</label>
                                    <input type="password" className=" w-full text-lg border-2 p-1 border-gray-500 focus:outline-orange-400 rounded-md" value={credential.password} onChange={handleChange} id="password" name="password" placeholder='Password' />
                                </div>
                                <button type="submit" className=" text-lg outline-none border-none bg-orange-400 active:bg-orange-500 active:scale-105">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Login