"use client"
import { useState} from 'react';

export const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);  
    const goTo = (elem: string) => {
        setIsNavOpen(false);
        const element = document.getElementById(elem);
        if(element) element.scrollIntoView();
    }
	return (
        <div className="flex justify-end py-8 w-full pr-10">
          <nav className="">
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2 cursor-pointer"
                onClick={() => setIsNavOpen((prev) => !prev)} 
              >
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              </div>
    
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-[#007b8b]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button className="cursor-pointer" onClick={() => goTo('start-journey')}>Start Your Journey</button>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button className="cursor-pointer" onClick={() => goTo('about')}>About</button>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button className="cursor-pointer" onClick={() => goTo('samples')}>Samples</button>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button className="cursor-pointer" onClick={() => goTo('process')}>6-Step Process</button>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button className="cursor-pointer" onClick={() => goTo('pricing')}>Pricing</button>
                  </li>
                </ul>
              </div>
            </section>
    
            {<ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-medium lg:items-center">

              <li>
                <button className="cursor-pointer hover:underline" onClick={() => goTo('about')}>About</button>
              </li>
              <li className="">
                <button className="cursor-pointer hover:underline" onClick={() => goTo('samples')}>Samples</button>
              </li>
              <li>
                <button className="cursor-pointer hover:underline" onClick={() => goTo('process')}>6-Step Process</button>
              </li>
              <li>
                <button className="cursor-pointer hover:underline" onClick={() => goTo('pricing')}>Pricing</button>
              </li>
              <li>
                <button className="cursor-pointer bg-white text-[#007b8b] px-2 py-2 rounded-md hover:bg-[#007b8b] hover:text-white border-2 border-white" style={{ fontWeight: 1000 }} onClick={() => goTo('start-your-journey')}>Start Your Journey</button>
              </li>
            </ul>}
          </nav>
          <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
          .active {
            text-decoration: underline;
          }
        `}</style>
      </div>
	);
};

export default Navigation;