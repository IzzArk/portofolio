import socials from "./Data/Social";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-custom mx-auto px-4 sm:px-6 md:px-8 py-8 text-center">
                <div className="flex justify-center gap-6 mb-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                        >
                            <img
                                src={social.icon}
                                alt={`${social.name} icon`}
                                className="w-5 h-5"
                            />
                        </a>
                    ))}
                </div>

                <p className="text-gray-400 mb-4">
                    Feel free to reach out to me through my social media links above
                </p>

                <p className="text-gray-500">
                    &copy; {currentYear} Faiz Arkan-Portofolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;