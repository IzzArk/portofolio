import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo-iz.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center py-6">
                <img className="invert size-12" src={logo} alt="Logo" />

                <nav className="hidden md:flex gap-8">
                    {['Home', 'About', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-indigo-400 transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setIsOpen}
                        size={24}
                        color="#fff"
                        direction="right"
                        duration={0.4}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-gray-800/95"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-4 py-4">
                            {['Home', 'About', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="py-2 hover:text-indigo-400 transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
