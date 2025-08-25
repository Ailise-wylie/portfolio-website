import { RevealOnScroll } from "../RevealOnScroll"
export const About = () => {

    const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Angular"]
    const backendSkills = ["Python", ".Net", "Azure", "SQL"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
        
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Passionate developer with expertise in building web applications and creating solutions.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key)=>(
                            <span key={key} className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key)=>(
                            <span key={key} className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>BEnG Software Engineering</strong> - Queen's University Belfast (2019-2023)
                    </li>
                    <li>First Class Honours</li>
                    <li>
                        Modules: Cloud Computing, Design Patterns, Data Structures
                    </li>
                </ul>
            </div>
                 <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">Software Engineer at PwC (2019-Present)</h4>
                        <p>Developed application which ranged from salesforce, to AI based solutions for PwC colleagues, and admin applications.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </RevealOnScroll>
    </section>
}