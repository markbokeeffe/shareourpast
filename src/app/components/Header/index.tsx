"use client"
import { PropsWithChildren } from 'react';
import Logo from '../Logo';

type HeaderProps = {
    isHome?: boolean;
};


export const Header = ({ children, isHome = false}: PropsWithChildren<HeaderProps> ) => {

	return (
        <header className="z-50 h-[70px] font-extrabold bg-red fixed bg-[#007b8b] flex w-full lg:h-[70px] flex w-full justify-center">
            <div className="px-4 flex items-center w-full text-white">
            <Logo isHome={isHome}/>
            {children}
            </div>
      </header>
	);
};

export default Header;