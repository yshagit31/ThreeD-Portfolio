import React, {useState} from 'react'
import { navLinks } from '../constants/index';
import { div } from 'three/webgpu';

const NavItems= ()=>{
    return(
        <ul className='nav-ul'>

            {navLinks.map((item)=> 
            (
                <li key={item.id} className='nav-li'>
                    <a href={item.href} className='nav-li_a' onClick={()=>{ }}>
                        {item.name}
                    </a>
                </li>
            ))};
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const Toggle=() =>{
            setIsOpen( (prevIsOpen)=>
                !prevIsOpen);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">\
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-color">
                        Shashank
                    </a>
                    <button onClick={Toggle} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="h-6 w-6" />
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems/>
                    </nav>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0' }`}>
                    <nav className='p-5'>
                        <NavItems></NavItems>
                    </nav>
                </div>
            </div>


        </header>
    )
}
export default Navbar
