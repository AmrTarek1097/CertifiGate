/* eslint-disable react/no-unescaped-entities */
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
};

const VerifyEmail = () => {
    return (
        <div className='mx-auto z-10'>  {/* *******Right Section******* */}
            <div className="bg-white py-28 px-8 rounded-2xl w-[560px] shadow-md ">
                <div className="flex flex-col gap-y-16 text-center">
                    <div className='mx-8'>
                        <p className="text-black text-2xl font-semibold mb-4">Check your email</p>
                        <p className="text-black text-xs font-normal mx-8"> <span className='font-bold'>We've sent you an email</span> with a link that you will need to click to verify your email. You might need to check your spam folder if you don't see it. Please verify by clicking the link on your most recent verification email. This link will expire in 12 hours.</p>
                    </div>
                    <div className="mb-4 text-left">
                        <label className="text-sm font-medium text-black " htmlFor="input-field">Email</label>
                        <input id="input-field" type="text" className="w-full mt-2 mb-8 px-3 py-2 border border-[#757682] text-black rounded-lg  focus:outline-none " placeholder="enter your email" />
                        <button className="bg-[#002677] rounded-full w-full h-9 text-sm font-medium">Resend email</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyEmail;

