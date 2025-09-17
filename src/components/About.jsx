const aboutItems = [
    {
        label: 'Project done',
        number: 4
    },
    // {
    //     label: 'Years of experience',
    //     number: 10
    // }
];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Highly responsible and self-driven Mobile Developer 
                    with a quite well understanding and hands-on experience 
                    in Flutter, specializing in building Android applications. 
                    I’m looking forward to join your company to contribute to developing 
                    high-quality mobile apps, enhancing user experiences, 
                    and supporting the company’s growth through innovative and efficient solutions.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img
                            src="images/logo.svg"
                            alt="Logo"
                            height={30}
                            width={30}
                            className="ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About