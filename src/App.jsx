/**
 * Node modules
 */
import Lenis from 'lenis'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Register Gsap Plugin
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achivement from './components/Achivement';

const App = () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        })
    })

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // tốc độ cuộn (mặc định 1.2s)
            smooth: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing
        });

        function raf(time) {
            lenis.raf(time); // cập nhật frame cho Lenis
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Project />
                <Achivement />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App;