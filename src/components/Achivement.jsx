const Achivement = () => {
  return (
    <section
      id="achivement"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 reveal-up">My Achievements</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          A quick overview of my academic journey and current progress
          since I started university in 2021.
        </p>

        <div className="space-y-6">
          {/* Education */}
          <div className="p-6 bg-zinc-800 rounded-2xl ring-1 ring-zinc-50/5 reveal-up">
            <h3 className="title-1 mb-2">Education</h3>
            <p className="text-zinc-300">
              Studying <span className="font-medium">Computer Science</span> at
              <span className="font-medium"> Van Lang University</span> (2021 – present).
            </p>
          </div>

          {/* Major */}
          <div className="p-6 bg-zinc-800 rounded-2xl ring-1 ring-zinc-50/5 reveal-up">
            <h3 className="title-1 mb-2">Major</h3>
            <p className="text-zinc-300">
              Specialized in <span className="font-medium">Software Engineering </span>
              and <span className="font-medium">Mobile Development</span>.
            </p>
          </div>

          {/* GPA / Current grade */}
          <div className="p-6 bg-zinc-800 rounded-2xl ring-1 ring-zinc-50/5 reveal-up">
            <h3 className="title-1 mb-2">Current GPA</h3>
            <p className="text-zinc-300">
              Current GPA: <span className="font-medium">3.31 / 4.0 </span>
              (updating as of 2025).
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Achivement
