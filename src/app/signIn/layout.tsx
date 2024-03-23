
import Image from "next/image";

export default function SignUpLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // *******background*******
        <main className=" flex min-h-screen items-center justify-between px-80 bg-[#F1F1F1] relative">
            <div className="flex items-center gap-x-2 absolute top-8 left-48" >
                <Image width={40} height={20} src="/logo/logo blue.svg" alt="logo" />
                <h3 className="text-blue font-bold text-3xl">Certifigate</h3>
            </div >
            <Image width={800} height={100} className="absolute top-0 right-0 z-0" src='/vectors/Certifigate background vector.svg' alt="vector" />

            {children}

        </main >
    );
}
