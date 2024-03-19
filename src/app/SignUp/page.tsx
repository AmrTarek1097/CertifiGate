import Image from "next/image";
import React, { ReactNode } from 'react'
import styles from "../SignUp/styles.module.css"
import { IoLogoLinkedin } from "react-icons/io5";

type Props = {
    children: ReactNode;
};

const SignUp: React.FC<Props> = ({ children }) => {
    return (
        // *******background*******
        <main className=" flex min-h-screen items-center justify-between px-80 bg-[#F1F1F1] relative">
            <Image width={800} height={100} className="absolute top-0 right-0 z-0" src='/vectors/Certifigate background vector.svg' alt="vector" />

            {/* *******Left Section******* */}
            <div className="flex flex-col gap-y-16 w-[496px]">
                <div className="flex items-center gap-x-2" >
                    <Image width={40} height={20} src="/logo/logo blue.svg" alt="logo" />
                    <h3 className="text-blue font-bold text-3xl">Certifigate</h3>
                </div >
                <div>
                    <h6 className="text-blue font-semibold">Security</h6>
                    <p className="text-black font-light text-sm ">We prioritize the security and integrity of your credentials.</p>
                </div>
                <div>
                    <h6 className="text-blue font-semibold">Efficiency</h6>
                    <p className="text-black font-light text-sm">Our platform streamlines the credential issuance process, saving time and resources for organizations.</p>
                </div>
                <div>
                    <h6 className="text-blue font-semibold">Customization</h6>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-black font-light text-sm">Tailor your credentials to match your organization's branding and requirements.</p>
                </div>
                <div>
                    <h6 className="text-blue font-semibold">Verification</h6>
                    <p className="text-black font-light text-sm">Verifying credentials is simple and reliable with our platform.</p>
                </div>
            </div >

            {/* *******Right Section******* */}
            <div className="bg-white py-16 px-8 rounded-2xl w-[562px] shadow-md z-10">
                <div className="flex flex-col gap-y-16 text-center">
                    <div>
                        <p className="text-black text-2xl font-medium	">Create Certifigate account</p>
                        <p className="text-black text-sm font-normal">create an account now and issue credentials. </p>
                    </div>
                    <button className="bg-[#0077B5] text-white rounded-full w-full h-9 text-sm font-medium flex justify-center items-center gap-2">
                        <IoLogoLinkedin className='w-[16px] h-[16px]' />
                        <p> Sign up with LinkedIn</p>
                    </button>
                    <div className="relative">

                        <p className={`${styles.signUpEmail} text-[#656565] text-sm font-normal`}>or sign up with email</p>
                    </div>
                    <div className="mb-4 text-left">
                        <label className="text-sm font-medium text-black " htmlFor="input-field">Email</label>
                        <input id="input-field" type="text" className="w-full mt-2 mb-4 px-3 py-2 border border-[#757682] text-black rounded-lg  focus:outline-none " placeholder="enter your email" />
                        <button className="bg-[#F1F1F1] rounded-full w-full h-9 text-[#002677] text-sm font-medium">Continue</button>
                    </div>
                    <p className="text-black text-sm font-medium">Already have an account? <a className="text-[#002677]" href="">Sign in</a> </p>
                    <p className="text-black text-xs font-light">By signing up, you agree to our <a className="underline" href="">Terms & Conditions</a> and <a className="underline" href="">Privacy Policy</a>, including Cookie Use</p>
                </div>
            </div>

        </main >
    );
}

export default SignUp;

