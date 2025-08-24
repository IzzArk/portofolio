import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "./Data/DataCertificates";

const Certificates = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    // ✅ Update itemsPerSlide berdasarkan width
    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 640) {
                setItemsPerSlide(1); // mobile
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2); // tablet
            } else {
                setItemsPerSlide(3); // desktop
            }
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const totalSlides = Math.ceil(certificates.length / itemsPerSlide);

    const goToPrev = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(goToNext, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentSlide]);

    const getVisibleCertificates = () => {
        const startIndex = currentSlide * itemsPerSlide;
        const endIndex = startIndex + itemsPerSlide;
        return certificates.slice(startIndex, endIndex);
    };

    return (
        <section id="certificates" className="fade-in py-20 bg-gray-900">
            <div className="max-w-custom mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-indigo-500">Certificates</span>
                </h2>

                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="w-full overflow-hidden relative h-[500px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentSlide}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 absolute w-full"
                                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {getVisibleCertificates().map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
                                    >
                                        <div className="relative overflow-hidden h-80">
                                            <img
                                                src={
                                                    typeof cert.image === "string"
                                                        ? cert.image
                                                        : cert.image?.default
                                                }
                                                alt={`Certificate for ${cert.title} from ${cert.issuer}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80" />
                                            <div className="absolute bottom-0 left-0 p-4">
                                                <span className="px-3 py-1 bg-indigo-600/80 text-white rounded-full text-sm">
                                                    {cert.issuer}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                                                {cert.title}
                                            </h3>
                                            <p className="text-gray-300 mb-4 text-sm">
                                                {cert.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-400 text-sm">
                                                    {cert.date}
                                                </span>
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center transition-colors duration-300"
                                                >
                                                    View
                                                    <svg
                                                        className="w-4 h-4 ml-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg"
                    >
                        <FaChevronLeft className="text-white text-xl" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg"
                    >
                        <FaChevronRight className="text-white text-xl" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (index !== currentSlide) {
                                    setDirection(index > currentSlide ? 1 : -1);
                                    setCurrentSlide(index);
                                }
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-indigo-500" : "bg-gray-600"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
