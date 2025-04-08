import Image from "next/image";

export function Sponsor() {
    const sponsors = [
        { logo: "/logo6.svg", alt: "Amazon logo" },
        { logo: "/logo5.svg", alt: "Dribble logo" },
        { logo: "/logo4.svg", alt: "HubSpot logo" },
        { logo: "/logo3.svg", alt: "Notion logo" },
        { logo: "/logo2.svg", alt: "Netflix logo" },
        { logo: "/logo1.svg", alt: "Zoom logo" },
    ];

    return (
        <section className="py-8">
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center"
                        >
                            <Image
                                src={sponsor.logo}
                                alt={sponsor.alt}
                                width={100}
                                height={48}
                                className="h-12 w-auto"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
