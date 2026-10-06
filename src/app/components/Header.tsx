
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <Image width={50} height={50} src="/logo.webp" alt="Logo" />
        </div>
    );
};

export default Header;