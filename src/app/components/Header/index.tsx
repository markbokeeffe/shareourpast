"use client"
import { PropsWithChildren } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';



export const Header = ({ children}: PropsWithChildren) => {
	return (
        <header className="z-50 h-[80px] font-extrabold bg-red fixed bg-[#007b8b] flex w-full lg:h-[70px] flex w-full justify-center border-b-[1px] border-[#95b3b8]">
            <div className="lg:px-4 flex items-center w-full text-white justify-between">
                <Logo/>
                <Navigation />
                {children}
            </div>
      </header>
	);
};

export default Header;