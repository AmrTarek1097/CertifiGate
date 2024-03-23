"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'
import styles from "../../(SignUp)/styles.module.css"
import OrgTypeDD from "../SharedComponents/OrgTypeDD";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

// import { useForm } from "react-hook-form";


const SignUpForm = () => {

    const [selectedOrg, setSelectedOrg] = useState("Please Select");
    const [showPass, setShowPass] = useState(true);
    const [showConfirmPass, setShowConfirmPass] = useState(true);

    // const form = useForm();
    // const { register, control, handleSubmit, formState, setValue } = form;
    // const { errors } = formState;

    // const handleSetValue = (option: string) => {
    //     setValue("service", option, {
    //         shouldDirty: true,
    //         shouldTouch: true,
    //         shouldValidate: true,
    //     });



    return (

        <>
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
            <div className="flex flex-col text-center">
                <div className="bg-white pb-16 pt-8 px-8 rounded-2xl w-[562px] shadow-md z-10">
                    <div className="flex flex-col gap-y-6">
                        <div className="text-left">
                            <label className={styles.form_label} htmlFor="input-field">Email </label><span className="text-[#ed4141]">*</span>

                            <input id="input-field" type="text" className={`${styles.form_input} focus:outline-none`} placeholder="enter your email" />
                            <div className="flex gap-6">
                                <div>
                                    <label className={styles.form_label} htmlFor="input-field">First Name</label> <span className="text-[#ed4141]">*</span>
                                    <input id="input-field" type="text" className={`${styles.form_input} focus:outline-none`} placeholder="enter your first name" />
                                </div>
                                <div>
                                    <label className={styles.form_label} htmlFor="input-field">Last Name</label> <span className="text-[#ed4141]">*</span>
                                    <input id="input-field" type="text" className={`${styles.form_input} focus:outline-none`} placeholder="enter your last name" />
                                </div>
                            </div>
                            <label className={styles.form_label} htmlFor="input-field">Phone number</label> <span className="text-[#ed4141]">*</span>
                            <input id="input-field" type="text" className={`${styles.form_input} focus:outline-none`} placeholder="enter your phone number" />

                            <div className="w-full relative">
                                <label className={styles.form_label} htmlFor="input-field">Password</label> <span className="text-[#ed4141]">*</span>
                                <input id="input-field" type={showPass ? "password" : "text"} className={`${styles.form_input} focus:outline-none`} placeholder="enter your password" />
                                <span className="eyeIcon absolute text-xl top-11 right-4 text-black cursor-pointer" onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </div>
                            <div className="w-full relative">
                                <label className={styles.form_label} htmlFor="input-field">Confirm password</label> <span className="text-[#ed4141]">*</span>
                                <input id="input-field" type={showConfirmPass ? "password" : "text"}
                                    className={`${styles.form_input} focus:outline-none`} placeholder="enter password again" />
                                <span className="eyeIcon absolute text-xl top-11 right-4 text-black cursor-pointer" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                    {showConfirmPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </div>
                            <label className={styles.form_label} htmlFor="input-field">Organization name</label> <span className="text-[#ed4141]">*</span>
                            <input id="input-field" type="text" className={`${styles.form_input} focus:outline-none`} placeholder="enter organization name" />

                            <OrgTypeDD
                                selectedOrg={selectedOrg}
                                setSelectedOrg={setSelectedOrg}
                            // handleSetValue={handleSetValue}
                            // displayCountryError={displayCountryError}
                            // setDisplayCountryError={setDisplayCountryError}
                            />
                        </div>



                        <Link href="/verifyEmail" ><button className="bg-[#002677] rounded-full w-full h-9 text-sm font-medium">Continue</button></Link>
                        <p className="text-black text-sm font-medium">Already have an account? <a className="text-[#002677]" href="/signIn">Sign in</a> </p>

                    </div>
                </div>
                <p className="text-black text-xs font-light mt-5">By signing up, you agree to our <a className="underline" href="">Terms & Conditions</a> and <a className="underline" href="">Privacy Policy</a>, including Cookie Use</p>
            </div >
        </>
    )
}

export default SignUpForm;