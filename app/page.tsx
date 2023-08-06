import {CertLink, ContactNowCircle, FacebookIcon, GithubIcon, InstagramIcon, LinkRef} from "@/app/components";
import React from "react";

export default function Home() {
    return (
        <>
            <div className="z-[9999] w-[100dvw] h-[100dvh] lg:hidden flex flex-col justify-center items-center px-12">
                <h1 className="text-7xl font-mono leading-relaxed">
                    Dear my friend,
                    <span className="text-3xl block">Your window is too small to display things here!</span>
                </h1>
                <a className="absolute bottom-[1%] font-mono" href="https://www.ttwrpz.xyz/" target="_blank">
                    &copy; {new Date(). getFullYear()} _ttwr.pz
                </a>
            </div>
            <main className="min-h-[100dvh] gap-12 hidden lg:flex flex-col">
                <nav
                    className="absolute top-[1%] flex flex-row justify-between content-center items-center gap-6 px-12 py-5 w-full">
                    <h1 className="text-2xl font-mono">
                        <span className="text-orange-400">_ttwr</span>.pz
                    </h1>
                    <div className="flex flex-row gap-12">
                        <LinkRef href="#about">
                            About
                        </LinkRef>
                        <LinkRef href="#education">
                            Education
                        </LinkRef>
                        <LinkRef href="#projects">
                            Projects & Certificates
                        </LinkRef>
                        <LinkRef href="#contact">
                            Contact
                        </LinkRef>
                    </div>
                    <div className="relative min-w-[5rem]">
                        <div className="absolute top-0 flex flex-col gap-6 bg-[#001b2a]/50 p-8">
                            <a className="text-gray-400 hover:text-gray-500" title="Facebook" target="_blank"
                               href="https://www.facebook.com/ttwr.pz/">
                                <FacebookIcon/>
                            </a>
                            <a className="text-gray-400 hover:text-gray-500" title="Instagram" target="_blank"
                               href="https://www.instagram.com/_ttwr.pz/">
                                <InstagramIcon/>
                            </a>
                            <a className="text-gray-400 hover:text-gray-500" title="Github" target="_blank"
                               href="https://github.com/ttwrpz">
                                <GithubIcon/>
                            </a>
                            <div className="relative min-h-[36px]">
                                <div
                                    className="absolute top-0 bg-orange-400 [writing-mode:vertical-rl] w-fit uppercase py-4 px-2 whitespace-nowrap select-none">
                                    Follow me
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <header id="header"
                        className="flex flex-col justify-center gap-12 pt-[8rem] p-12 bg-gradient-to-r from-[#001b2a] to-[#000f16] min-h-[60dvh]">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl leading-loose">
                            <span className="font-bold text-5xl">I am a </span>
                            <span className="inline-block">
                            <span
                                className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                                <pre>Website Developer</pre>
                            </span>
                        <span
                            className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
                    </span>
                        </h1>
                        <p className="text-xl font-light">
                            <q>Crafting Digital Experiences: Transforming Ideas into Seamless Websites. Your Vision, Our Code.</q>
                        </p>
                    </div>
                </header>
                <section id="about" className="flex flex-row px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 grid-rows-2 gap-10">
                        <div style={{gridArea: "1 / 1 / 3 / 2"}} className="z-10 mix-blend-exclusion">
                            <div className="flex flex-col justify-between h-full">
                                <h1 className="text-3xl text-gray-400 font-semibold">About Theerawat Patthawee</h1>
                                <ContactNowCircle/>
                            </div>
                        </div>
                        <div style={{gridArea: "1 / 1 / 3 / 2"}} className="justify-self-end">
                            <img alt="Theerawat Patthawee's Profile" src="/img/_ttwr.pz.jpg"
                                 className="max-h-[30dvw] rounded mt-5"/>
                        </div>
                        <div style={{gridArea: "1 / 2 / 3 / 3"}} className="self-end">
                            <div className="flex flex-col gap-6 leading-relaxed">
                                <p className="inline-block text-justify tracking-tighter first-letter:text-orange-400 first-letter:font-semibold first-letter:text-2xl first-letter:font-serif">
                                    Welcome to my corner of the web! I am a passionate and dedicated junior website
                                    developer,
                                    driven by the endless possibilities that code unlocks. With an insatiable curiosity
                                    and a knack for turning ideas into pixel-perfect realities,
                                </p>
                                <p className="inline-block text-justify tracking-tighter">
                                    I&apos;m on a mission to bring your online aspirations to life. Whether it&apos;s
                                    crafting captivating user interfaces, optimizing for seamless user experiences,
                                    or diving into the latest web technologies, I thrive on the thrill of
                                    problem-solving and the art of turning creativity into functional, elegant websites.
                                </p>
                                <p className="inline-block text-justify tracking-tighter">
                                    Join me on this coding journey, where innovation knows no bounds and every project
                                    is a chance to make the digital world a better, more beautiful place.
                                    Let&apos;s build the future of the web together!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="education" className="flex flex-col gap-24 px-12">
                    <div className="flex flex-row gap-12 items-end">
                        <div className="flex flex-col flex-1 gap-12">
                            <h1 className="text-5xl font-semibold tracking-widest text-white/70">Education</h1>
                            <p className="inline-block text-justify leading-relaxed self-end mr-20 max-w-2xl">
                                Every step of my educational expedition has equipped me with valuable skills, insights,
                                and perspectives that contribute to my holistic growth.
                                Join me in this exploration of knowledge as I present my educational narrative,
                                demonstrating my commitment to excellence and lifelong learning.
                            </p>
                        </div>
                        <div/>
                    </div>
                    <div className="flex flex-row justify-evenly">
                        <a className="flex flex-col justify-center items-center gap-6 transition-transform hover:scale-105"
                           href="https://www.swb.ac.th/swb/">
                            <img alt="Sarasas Witaed Bangbon School" src="/img/swb_logo.png"
                                 className="mx-auto max-w-[20dvw]"/>
                            <h2 className="text-xl text-center font-semibold leading-relaxed">
                                Sarasas Witaed Bangbon School
                                <span className="block text-gray-400 font-light">
                                (Nursery - Primary School)
                            </span>
                            </h2>
                        </a>
                        <a className="flex flex-col justify-center items-center gap-6 transition-transform hover:scale-105"
                           href="https://www.debsirin.ac.th/index.php">
                            <img alt="Sarasas Witaed Bangbon School" src="/img/debsirin_logo.png"
                                 className="mx-auto max-w-[20dvw]"/>
                            <h2 className="text-xl text-center font-semibold leading-relaxed">
                                Debsirin School
                                <span className="block text-gray-400 font-light">
                                (Secondary School)
                            </span>
                            </h2>
                        </a>
                    </div>
                </section>
                <section id="projects" className="flex flex-col gap-24 px-12">
                    <div className="flex flex-row gap-12 items-end">
                        <div className="flex flex-col flex-1 gap-12">
                            <h1 className="text-5xl font-semibold tracking-widest text-white/70">My Projects &
                                Certificates</h1>
                            <p className="inline-block text-justify leading-relaxed self-end mr-20 max-w-2xl">
                                Step into the world of innovation and creativity through my projects portfolio.
                                This section is a testament to my passion for bringing ideas to life and solving
                                real-world challenges.
                                Here, you&apos;ll discover a collection of projects that showcase my problem-solving
                                skills, technical expertise, and collaborative spirit.
                            </p>
                        </div>
                        <ContactNowCircle/>
                    </div>
                    <div className="flex flex-col xl:grid grid-cols-[repeat(3,_auto)] gap-6 max-w-xl xl:max-w-7xl mx-auto">
                        <CertLink order={1} name="Developer of Debsirin Mobile Cardstunt"
                                  href="https://play.google.com/store/apps/details?id=com.debsirin.mobilecardstunt"
                                  gridArea={"1 / 2 / 1 / 4"} isHrefSame={false}
                                  imageHref="/img/project/debsirin-mobile-cardstunt.png"/>
                        <CertLink order={2} name="งานศิลปหัตถกรรมนักเรียนครั้งที่ 70" href="/img/cert/Sillapa70.png"
                                  gridArea={"2 / 2 / 2 / 3"}/>
                        <CertLink order={3} name="KMiTL x 42Bangkok April Discovery Piscine 2023" href="/img/cert/42bangkok.png"
                                  gridArea={"2 / 3 / 2 / 4"}/>
                    </div>
                </section>
                <hr className="mx-12 border-gray-400/40 border-t-[5px] rounded"/>
                <section id="contact" className="px-12">
                    <a className="flex flex-row content-center gap-4 text-3xl text-gray-400 transition-all group hover:text-gray-400/80"
                       href="mailto:smrmakeyt@gmail.com">
                        smrmakeyt@gmail.com
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor"
                             className="w-8 -rotate-45 text-orange-400 duration-300 group-hover:text-orange-400/75 group-hover:scale-110">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </a>
                </section>
                <footer className="flex flex-row justify-between px-12 mb-4">
                    <div className="flex flex-row gap-8">
                        <LinkRef href="#about">
                            About
                        </LinkRef>
                        <LinkRef href="#education">
                            Education
                        </LinkRef>
                        <LinkRef href="#projects">
                            Projects & Certificates
                        </LinkRef>
                        <LinkRef href="#contact">
                            Contact
                        </LinkRef>
                        <LinkRef href="#">
                            Back to top
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6 inline">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"/>
                            </svg>
                        </LinkRef>
                    </div>
                    <a className="font-mono text-gray-300" href="https://www.ttwrpz.xyz/" target="_blank">
                        &copy; {new Date(). getFullYear()} _ttwr.pz
                    </a>
                </footer>
            </main>
        </>
    )
}
