import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars4Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex items-center justify-between m-12 border rounded-lg border-blue-400 p-6'>
            <div>
            <h3 className='text-2xl font-semibold '>Quiz Arena</h3>
            </div>
           <div>
           <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden flex'>
            {
                open ? <XMarkIcon></XMarkIcon> : <Bars4Icon/>
            }
            </div>
            <ul className={`md:flex w-full md:static absolute duration-500 ease-in ${open ? 'top-15' : 'top-[-120px]'}`}>
                <li className='mr-6 hover:bg-blue-400 p-1 rounded-md hover:text-white'><Link to='/'>Topics</Link></li>
                <li className='mr-6  hover:bg-blue-400 p-1 rounded-md hover:text-white'><Link to='/statistics'>Statistics</Link></li>
                <li className='mr-6  hover:bg-blue-400 p-1 rounded-md hover:text-white'> <Link to='/blog'>Blog</Link></li>
            </ul>
           </div>
        </nav>
    );
};

export default Header;