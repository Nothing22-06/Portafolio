import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Navbar from "@/app/(home)/components/Navbar";
import About from "@/app/(home)/components/About";
import Header from "@/app/(home)/components/Header";
import Contact from "@/app/(home)/components/Contact";
import Footer from "@/app/(home)/components/Footer";

const page = () => {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">

                <Navbar/>
                <Header/>


                <About/>
                <Skills/>
                <Projects/>


                <Contact/>
                <Footer/>
            </div>


        </main>
    )
}

export default page