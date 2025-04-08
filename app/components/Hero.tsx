import Image from "next/image";

export function Hero() {
    return (
        <section className="mt-10 text-[43px] ">
            <h1 className="mx-5">Navigating the digital landscape for success</h1>
            <div className="flex justify-center mt-6 ">
                <div className="relative min-w-90 min-h-77 ">
                    <Image
                        src="/Illustration.svg"
                        alt="Logo"
                        fill
                    />
                </div>
            </div>
            <p className="text-[16px] mx-2.5">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            
            <button className="bg-dark rounded-2xl mt-5 mx-5 text-xl px-24 py-5 text-white">
                Book a consultation
            </button>
        </section>
    )
}