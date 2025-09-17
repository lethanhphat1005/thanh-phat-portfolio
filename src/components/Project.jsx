/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const projects = [
    {
        imgSrc: 'images/project-1.png',
        title: 'Fullstack TradeUp App',
        tags: ['Flutter', 'MVC', 'Firebase'],
        projectLink: 'https://github.com/WhiteCornFour/TradeUpApp'
    },
    {
        imgSrc: 'images/no-image.jpg',
        title: 'Easy English',
        tags: ['Java', 'MVC', 'Firebase'],
        projectLink: 'https://github.com/lethanhphat1005/english-learning-app'
    },
    {
        imgSrc: 'images/no-image.jpg',
        title: 'Med Reminder App',
        tags: ['TailwindCss', 'Firebase', 'Nodejs', 'MVC'],
        projectLink: 'https://github.com/lethanhphat1005/med-reminder-app'
    },
    {
        imgSrc: 'images/no-image.jpg',
        title: 'eCommerce Furniture',
        tags: ['Web&App-design', 'Figma'],
        projectLink: 'https://www.figma.com/design/PpmxHRXxcgNparMp8afcqg/Nhom6_UXUI_Figma?node-id=0-1&t=6oTN9VAO0snqoMoD-1'
    },

];

const Project = () => {
    return (
        <section
            id="project"
            className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project