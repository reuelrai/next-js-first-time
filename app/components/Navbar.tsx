'use client';


import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    return (
        <header className="shadow-lg sticky top-0 z-50 transition-colors duration-300">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="font-bold text-lg">
                    REUEL RAI
                </Link>
                <ul className="flex items-center space-x-6 font-medium gap-2">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><ThemeToggle /></li>
                </ul>
            </nav>
        </header>
    );
}
