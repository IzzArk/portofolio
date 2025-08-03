import mypict from './ProfileCard/ProPict.png';
import ProfileCard from './ProfileCard/ProfileCard';
import ShinyText from './ShinyText/ShinyText';

const About = () => {
    const skills = ['Laravel', 'Kotlin', 'React', 'JavaScript', 'Node.js', 'Tailwind', 'CSS', 'HTML', 'Git'];

    return (
        <section id="about" className="fade-in text-white py-20">
            <div className="max-w-custom mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-indigo-500">Me</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Profile Card */}
                    <div className="md:w-1/3 w-full flex justify-center">
                        <div className="relative group">
                            <ProfileCard
                                name="Faiz Arkan"
                                title="Software Engineer"
                                handle="faizarkan_24"
                                status="Online"
                                contactText="CV"
                                avatarUrl={mypict}
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={false}
                            />
                        </div>
                    </div>

                    {/* Text & Skills */}
                    <div className="md:w-2/3 w-full">
                        <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                        <ShinyText
                            text="My name is Faiz Arkan, Strong focus on Web and Mobile Development. I specialize in using Laravel for building robust web applications and well-structured APIs. While I have some experience with React JS, my main strength lies in mobile app development using Kotlin, where I have built several stable and user-friendly Android applications. I am passionate about learning new technologies, open to challenges, and committed to delivering clean, efficient, and scalable solutions."
                            disabled={false}
                            speed={3}
                            className="custom-class"
                        />

                        <h3 className="text-2xl font-semibold mt-10 mb-4">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors duration-300 text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
