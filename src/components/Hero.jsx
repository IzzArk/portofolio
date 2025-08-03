import SplitText from "../assets/Other/SplitText";
import HyperSpeed from "../assets/Other/HyperSpeed";
import ShinyText from './ShinyText/ShinyText';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const Hero = () => {
    return (
        <section
            id="home"
            className="fade-in min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            <div className="absolute inset-0 -z-10">
                <HyperSpeed
                    lineColor="#003E8F"
                    backgroundColor="#0000"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
                />
            </div>

            {/* Main Content */}
            <div className="max-w-custom mx-auto px-4 sm:px-6 md:px-8 text-center text-white z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <SplitText
                        text="Hi, I'm Faiz Arkan"
                        className="text-4xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    <ShinyText
                        text="A passionate Frontend Developer specializing in Laravel with experience in building modern web applications."
                        disabled={false}
                        speed={3}
                        className="custom-class text-center"
                    />
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-indigo-600 hover:bg-white hover:text-black rounded-lg font-medium transition-colors duration-300"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-3 border border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 rounded-lg font-medium transition-colors duration-300"
                    >
                        View Projects
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Hero;
