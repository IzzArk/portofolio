import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "./Data/experiences";
import StarBorder from "./StarBorder/StarBorder";

const Experience = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleExperiences = showAll ? experiences : experiences.slice(0, 4);

    return (
        <section id="experience" className="fade-in bg-gray-800 py-16">
            <div className="max-w-custom mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-indigo-500">Experience</span>
                </h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500 transform -translate-x-1/2" />

                    <div className="space-y-8 md:space-y-0">
                        <AnimatePresence initial={false}>
                            {visibleExperiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    exit={{ opacity: 0, filter: "blur(8px)", y: 40 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className={`group relative md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                                >
                                    <div className="bg-gray-900 p-8 rounded-lg hover:border-l-4 hover:border-indigo-500 transition-all duration-300">
                                        <h3 className="text-2xl font-bold text-indigo-400">{exp.role}</h3>
                                        <div className="flex items-center gap-2 mt-2 mb-4">
                                            <span className="font-medium">{exp.company}</span>
                                            <span className="text-gray-400 text-sm">{exp.duration}</span>
                                        </div>

                                        {/* ✅ Perbaikan untuk support list / string */}
                                        {Array.isArray(exp.description) ? (
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                {exp.description.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-300">{exp.description}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* View More button */}
                {experiences.length > 4 && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300"
                        >
                            {showAll ? "Show Less" : "View More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
