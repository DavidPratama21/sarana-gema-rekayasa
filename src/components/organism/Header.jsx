import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
    const [humMenu, setHumMenu] = useState(false);
    const handleHumMenu = () => {
        setHumMenu(!humMenu);
        console.log(humMenu);
    };
    return (
        <div className="flex items-center px-5 py-3 justify-between bg-dark-primary">
            <h1 className="text-sm text-primary font-monumment text-nowrap">
                SARANA GEMA REKAYASA
            </h1>
            {/* Hum menu */}
            <button onClick={handleHumMenu}>
                <Menu />
            </button>
            {/* Nav menu */}
            {humMenu && (
                <nav className="grid text-center p-3 gap-1 bg-dark-primary">
                    <span className="py-2 rounded text-sm font-semibold text-primary hover:bg-primary/3">Product</span>
                    <span className="py-2 rounded text-sm font-semibold text-primary hover:bg-primary/3">About Us</span>
                    <span className="py-2 rounded text-sm font-semibold text-primary hover:bg-primary/3">Contact Us</span>
                </nav>
            )}
        </div>
    );
};

export default Header;
