"use client";
import React, { useState } from 'react'
import styles from "../../signIn/styles.module.css"



const ForgotPass = () => {

    const [alert, setalert] = useState(false)

    const alertShow = () => {
        setalert(true)
        setTimeout(() => {
            setalert(false)
        }, 3000);
    }

    return (
        <>
            <div className='flex flex-col mx-auto z-10 '>

                <div className="bg-white mt-60 py-16 px-8 rounded-2xl w-[560px] shadow-md relative">

                    <div className="flex flex-col gap-y-16 text-center">

                        <div className='mx-8'>
                            <p className="text-black text-2xl font-medium">Change password</p>
                        </div>


                        <div className="text-left">
                            <label className={styles.form_label} htmlFor="input-field">Email:</label>
                            <input id="input-field" type="text" className={`${styles.form_input} focus:outline-none`} placeholder="enter your email" />
                        </div>

                        <button className="bg-[#002677] rounded-full w-full h-9 text-sm font-medium" onClick={alertShow}>Reset password</button>

                    </div>
                </div>

                <div className={`${alert ? 'visible' : 'invisible'} transition-opacity bg-white w-[444px] py-11 px-4 rounded-2xl shadow-md text-center text-black font-medium mt-14 mx-auto`}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>We've sent you an email with instructions to reset your password</p>
                </div>
            </div>
        </>
    );
}

export default ForgotPass;

