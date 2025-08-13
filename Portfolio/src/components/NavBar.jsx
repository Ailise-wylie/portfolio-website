import { useEffect } from "react"

export const NavBar = ({menuOpen, setMenuOpen}) =>{
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-bluur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                {/* this is where your logo should go */}
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    <span className="text-pink-500">AI</span>lise Wylie Tech</a>

                {/* mobile menu*/}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-pink-300 hove:text-white transition-colors">Home</a>
                    <a href="#about" className="text-pink-300 hove:text-white transition-colors">About</a>
                    <a href="#projects" className="text-pink-300 hove:text-white transition-colors">Projects</a>
                    <a href="#contact" className="text-pink-300 hove:text-white transition-colors">Contact</a>
                </div>

            </div>
        </div>
    </nav>
}