import React from 'react';

const Navbar = () => {
    return ( 
        <div className='flex justify-center mt-5 px-5 text-3xl'>
            <ul className='flex space-x-5'>
                <li>Home</li>
                <li>Namer</li>
                <li>Contact Us</li>
                <li>Help</li>
            </ul>
        </div>
     );
}
 
export default Navbar;