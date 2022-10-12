import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars4Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        // navbar
        <nav className='flex items-center justify-between m-12 border rounded-lg border-blue-400 p-6'>
            <div>
            <h3 className='text-2xl font-serif'>Quiz Arena</h3>
            </div>
           <div>
            
            {/* menubar */}
           <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden flex'>
            {
                open ? <XMarkIcon></XMarkIcon> : <Bars4Icon/>
            }
            </div>
            <ul className={`md:flex w-full md:bg-inherit bg-blue-400 text-center m-2 p-2 rounded-lg md:static absolute duration-500 ease-in ${open ? 'top-[130px] left-0' : 'top-[-170px]'}`}>
                <Link to='/'><li className='mr-6 p-1 rounded-md hover:bg-blue-400 hover:text-white'>Home</li></Link>
                <Link to='/topics'><li className='mr-6 hover:bg-blue-400 p-1 rounded-md hover:text-white'>Topics</li></Link>
                <Link to='/statistics'><li className='mr-6  hover:bg-blue-400 p-1 rounded-md hover:text-white'>Statistics</li></Link>
                <Link to='/blog'><li className='mr-6  hover:bg-blue-400 p-1 rounded-md hover:text-white'> Blog</li></Link>
            </ul>
           </div>
        </nav>
    );
};

export default Header;