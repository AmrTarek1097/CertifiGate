import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // *******background*******

        <main className=" flex min-h-screen items-center justify-between px-80 bg-[#F1F1F1] relative">
            <Image width={800} height={100} className="absolute top-0 right-0 z-0" src='/vectors/Certifigate background vector.svg' alt="vector" />
            {children}
        </main>

    );
}
