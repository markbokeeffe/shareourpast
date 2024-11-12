"use client"
import Image from "next/image";


export const Christmas = () => {

    const goTo = () => {
        const element = document.getElementById('start-journey');
        if(element) element.scrollIntoView();
    }

	return (
        <button 
        onClick={() => goTo()} >
        <Image
            src="/ChristmasOffer.png"
            alt="Christmas Offer"
            className="lg:block lg:absolute lg:right-10 lg:top-10 lg:cursor-pointer"
            style={{ margin: '0 auto', marginBottom: 20 }}
            width="200"
            height="0"
            priority
        /> 
      </button>
	);
};

export default Christmas;