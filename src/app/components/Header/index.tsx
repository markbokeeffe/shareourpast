"use client"
import { PropsWithChildren } from 'react';
import Logo from '../Logo';



export const Header = ({ children}: PropsWithChildren) => {
    const goTo = (elem: string) => {
        const element = document.getElementById(elem);
        element && element.scrollIntoView();
    }
	return (
        <header className="z-50 h-[80px] font-extrabold bg-red fixed bg-[#007b8b] flex w-full lg:h-[70px] flex w-full justify-center">
            <div className="lg:px-4 flex items-center w-full text-white justify-between">
            <Logo/>
            <ul className="flex flex-row gap-4 mr-12">
                <li><button className="cursor-pointer" onClick={() => goTo('about')}>About</button></li>
                <li><button className="cursor-pointer" onClick={() => goTo('pricing')}>Pricing</button></li>
            </ul>
            {children}
            </div>
      </header>
	);
};

export default Header;