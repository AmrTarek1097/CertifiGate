"use client";
import Link from "next/link";
import React, { useState } from 'react'
import styles from "../signIn/styles.module.css"
import { IoLogoLinkedin } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";


const SignIn = () => {
    const [showPass, setShowPass] = useState(true);

    const [rememberMe, setRememberMe] = useState(false);

    return (
        <>
            <div className='mx-auto z-10'>
                <div className="bg-white py-16 px-8 rounded-2xl w-[560px] shadow-md ">
                    <div className="flex flex-col gap-y-14 text-center">
                        <div className='mx-8'>
                            <p className="text-black text-2xl font-medium">Log in to issue credentials</p>
                        </div>
                        <div className="flex flex-col gap-6 text-left">
                            <div>
                                <label className='form_label' htmlFor="input-field">Email:</label>
                                <input id="input-field" type="text" className={`form_input focus:outline-none`} placeholder="enter your email" />
                            </div>
                            <div className="w-full relative">
                                <label className='form_label ' htmlFor="input-field">Password:</label>
                                <input id="input-field" type={showPass ? "password" : "text"} className={`form_input focus:outline-none`} placeholder="enter your password" />
                                <span className="eyeIcon absolute text-xl top-9 right-4 text-black cursor-pointer" onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </div>



                            <div className="flex flex-col gap-12 ">
                                <div className="flex justify-between text-sm font-medium">
                                    <div className="flex items-center gap-2 text-black">
                                        {rememberMe ? <MdCheckBox className="w-[24px] h-[24px] cursor-pointer" onClick={() => setRememberMe(!rememberMe)} /> :
                                            <MdCheckBoxOutlineBlank className="w-[24px] h-[24px] cursor-pointer" onClick={() => setRememberMe(!rememberMe)} />}
                                        <label>Remember me</label>
                                    </div>
                                    <Link className="text-[#002677]" href='/signIn/forgotPass'>Forgot password?</Link>
                                </div>

                                <button className="bg-[#002677] rounded-full w-full h-9 text-sm font-medium">Log in</button>
                                <div className="relative text-center">
                                    <p className={`${styles.signIn} text-[#656565] text-sm font-normal`}>or</p>
                                </div>
                                <button className="text-[#0077B5]  border border-[#0077B5] rounded-full w-full h-9 text-sm font-medium flex justify-center items-center gap-2">
                                    <IoLogoLinkedin className='w-[16px] h-[16px]' />
                                    <p>Log in with LinkedIn</p>
                                </button>
                            </div>
                        </div>
                        <p className="text-black text-sm font-medium">Don’t have an account? <Link className="text-[#002677]" href="/">Sign up now</Link> </p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;

