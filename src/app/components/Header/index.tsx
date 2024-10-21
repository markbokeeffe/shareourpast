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
                <ul className="flex flex-row gap-4 mr-4 lg:mr-12 justify-center items-center">
                    <li><button className="cursor-pointer" onClick={() => goTo('about')}>About</button></li>
                    <li><button className="cursor-pointer" onClick={() => goTo('pricing')}>Pricing</button></li>
                    <li><button className="cursor-pointer bg-white text-[#007b8b] px-2 py-2 rounded-md" onClick={() => goTo('start-journey')}>Start Your Journey</button></li>
                </ul>
                {children}
            </div>
      </header>
	);
};

export default Header;