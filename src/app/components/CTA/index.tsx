"use client"


export const CTA = () => {

    const goTo = () => {
        const element = document.getElementById('start-journey');
        if(element) element.scrollIntoView();
    }

	return (
        <button 
            onClick={() => goTo()} 
            className="flex flex-col justify-center border-[2px] border-white hover:border-[#007b8b] hover:bg-[#007b8b] hover:text-white lg:text-xl mt-12 text-[#007b8b] font-black bg-white px-6 py-4 rounded-2xl leading-8 lg:lleading-10">
                <span className="w-full text-lg mb-4 border-b-2 pb-2" style={{ fontWeight: 1000 }}>Start Your Journey Now</span> 
                <span className="w-full text-lg">Create an easily shareable digital story of a branch or individual from your family tree.</span>
        </button>
	);
};

export default CTA;