import Link from "next/link";

export function Navbar() {
    return (
        <nav className="w-full bg-white shadow-md fixed top-0">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center">
                    <img className="w-10 h-10 mr-2" alt="Group" src="/images/icon.svg"/>
                    <span className="text-primary font-bold text-lg">Primed E-Health</span>
                </div>
                <ul className="flex space-x-6">
                    <li className="text-secondary hover:text-primary">
                        <Link href="/home">Home</Link>
                    </li>
                    <li className="text-secondary hover:text-primary">
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className="text-secondary hover:text-primary">
                        <Link href="/solutions">Solutions</Link>
                    </li>
                    <li className="text-secondary hover:text-primary">
                        <Link href="/products">Products</Link>
                    </li>
                    <li className="text-secondary hover:text-primary">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="text-secondary hover:text-primary">
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
