import LogoLoop from './LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiKotlin, SiGithub } from 'react-icons/si';

const LoopLogo = () => {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiLaravel />, title: "Next.js", href: "https://laravel.com/" },
        { node: <SiKotlin />, title: "TypeScript", href: "https://kotlinlang.org/" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiGithub />, title: "Tailwind CSS", href: "https://github.com/IzzArk" },
    ];

    return (
        <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </div>
    );

};

export default LoopLogo;