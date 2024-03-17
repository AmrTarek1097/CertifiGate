import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-[#F1F1F1]">

      <div>
        <div className="flex">
          <Image src="" alt="logo" />
          <h3 className="text-blue">Certifigate</h3>
        </div>
        <div>
          <h6 className="text-blue">Security</h6>
          <p className="text-black">We prioritize the security and integrity of your credentials.</p>
        </div>
        <div>
          <h6 className="text-blue">Efficiency</h6>
          <p className="text-black">Our platform streamlines the credential issuance process, saving time and resources for organizations.</p>
        </div>
        <div>
          <h6 className="text-blue">Customization</h6>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-black">Tailor your credentials to match your organization's branding and requirements.</p>
        </div>
        <div>
          <h6 className="text-blue">Verification</h6>
          <p className="text-black">Verifying credentials is simple and reliable with our platform.</p>
        </div>
      </div>
      <div className="bg-white py-16 px-8 rounded-2xl">
        <div>
          <p className="text-black text-2xl font-medium	">Create Certifigate account</p>
          <p className="text-black text-sx font-normal">create an account now and issue credentials. </p>
        </div>
      </div>
    </main>
  );
}
