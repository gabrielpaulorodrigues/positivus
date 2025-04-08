import { AlignJustify } from "lucide-react";
import Image from "next/image";

export function Header() {
    return (
        <header className="mt-7 mx-5">
            <nav className="flex justify-between">
                <div className="relative w-36 h-6">
                    <Image
                        src="/LogoHeader.svg"
                        alt="Logo"
                        fill
                    />
                </div>
                <div>
                    <button><AlignJustify/> </button>
                </div>
            </nav>
        </header>
    )
}