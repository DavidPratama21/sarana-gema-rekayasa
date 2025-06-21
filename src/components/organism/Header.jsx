import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [humMenu, setHumMenu] = useState(false);
    const handleHumMenu = () => {
        setHumMenu(!humMenu);
    };
    return (
        <div
            className="fixed z-10 grid px-5 py-3 w-full bg-dark-secondary shadow-[0_4px_4px_0_rgba(0,180,216,.25)]
            sm:flex sm:justify-between sm:items-center sm:py-2 sm:px-16
        "
        >
            <div className="flex justify-between items-center">
                <h1 className="text-sm text-primary font-monument text-nowrap sm:text-4xl">
                    SARANA GEMA REKAYASA
                </h1>
                {/* Hum menu */}
                <button
                    onClick={handleHumMenu}
                    className="text-primary sm:hidden"
                >
                    {!humMenu ? <Menu /> : <X />}
                </button>
            </div>
            {/* Nav menu */}
            <nav
                className={`text-center z-9 p-3 pb-0 gap-1 text-sm text-primary bg-dark-secondary font-monument sm:flex sm:gap-5 sm:text-base sm:p-0 ${
                    humMenu ? "grid" : "hidden"
                }`}
            >
                <span className="py-2 rounded hover:bg-primary/10">
                    Product
                </span>
                <span className="py-2 rounded hover:bg-primary/10">
                    About Us
                </span>
                <span className="py-2 rounded hover:bg-primary/10">
                    Contact Us
                </span>
            </nav>
        </div>
    );
};

export default Header;
