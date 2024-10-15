import clsx from 'clsx';
import Image from "next/image";
import Header from './components/Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat ({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {
  return (
    <div className={clsx( montserrat.className, "font-sans flex min-h-screen flex-col items-center p-0")}>
      <Header />
      <div style={{ fontWeight: 1000 }} className="mt-[80px] bg-white z-40 text-xl lg:text-2xl w-full py-4 text-[#007b8b] px-4 lg:px-10 flex justify-center">
        <span className="block">Share the Human Stories From Your Family Tree</span>
      </div>
      <div className="home-image w-full px-4 lg:px-80 py-24 flex place-items-center text-center justify-center flex-col relative">
        <div className="absolute h-full w-full bg-[#007b8b] top-0 left-0 opacity-50" />
        <div className="flex justify-center flex-col z-40">        
          <span className="text-xl lg:text-2xl font-black text-white leading-8 lg:leading-10">Do you wish to be able to easily share what you have uncovered in your family history research with family and friends?</span>
          <a className="text-xl lg:text-2xl mt-12 text-[#007b8b] font-black bg-white px-6 py-8 rounded-2xl leading-8 lg:lleading-10">Create an easily shareable digital story of a branch or individual from your family tree.</a></div>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#007b8b] w-full text-white justify-center py-12 px-4 lg:px-16 gap-12 text-center lg:text-left">
        <div className="flex flex-col text-white gap-6 border-b-2 lg:border-b-0 pb-12 lg:pb-0" style={{flexGrow: 1}}>
          <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Share your family research with family &amp; friends</h2>
          <p>Share your exciting findings with family &amp; friends by collating your research into a beatifully presented digital format.</p>
        </div>
        <div className="flex flex-col text-white gap-6 border-b-2 lg:border-b-0 pb-12 lg:pb-0" style={{flexGrow: 1}}>
          <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Tell the human stories beyond the names, dates &amp; locations in your tree</h2>
          <p>Lift the veil on individuals in your family tree by telling their human stories and recounting their life experiences in a digital storybook.</p>
        </div>
        <div className="flex flex-col text-white gap-6" style={{flexGrow: 1}}>
          <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Provide historical context to your family&#39;s story</h2>
          <p>Share your family&#39;s story within the historical and social context in which they lived.</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center text-center lg:text-left py-12 px-4 lg:px-16 gap-6 bg-white">
          <Image
            src="/family.png"
            alt="Family"
            className="block lg:hidden mb-8"
            width="300"
            height="0"
            priority
          />
          <div className="flex flex-col gap-6">
            <div className="w-full text-[#007b8b] flex flex-col lg:flex-row items-center lg:items-start">
              <Image
                src="/genealogy.svg"
                alt="Genealoy"
                className="lg:mr-6 lg:mt-2"
                width="100"
                height="0"
                priority
              />
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Genealogy &amp; History at our Heart</h2>
                <h3>We are led by experienced &amp; enthusiastic family history researchers and qualified historians, with a passion for learning and sharing knowledge before it is lost to time.</h3>
              </div>
            </div>

            <div className="w-full text-[#007b8b] flex flex-col lg:flex-row items-center lg:items-start">
              <Image
                src="/respect.svg"
                alt="Respect"
                className="lg:mr-6 lg:mt-1"
                width="100"
                height="0"
                priority
              />
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Respecting Our Past</h2>
                <h3 className="">We have a core value of respect those ancestors whose stories are being told.  By sharing their experiences, their memory lives on. </h3>
              </div>
            </div>

            <div className="w-full text-[#007b8b] flex flex-col lg:flex-row items-center lg:items-start">
             <Image
                src="/process.svg"
                alt="Process"
                className="lg:mr-6 lg:mt-1"
                width="100"
                height="0"
                priority
              />
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Simple Process</h2>
                <h3 className="">The journey from initial engagement with us to being able to share your family&#39;s human stories with others is a simple four-step process.</h3>
              </div>
            </div>

            <div className="w-full text-[#007b8b] flex flex-col lg:flex-row items-center lg:items-start">
              <Image
                src="/responsive.svg"
                alt="Responsive"
                className="lg:mr-6 lg:mt-1"
                width="100"
                height="0"
                priority
              />
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Responsive Layouts</h2>
                <h3 className="">Your digital storybook will be fully responsive: meaning that it will work desktop, tablet and mobile devices.</h3>
              </div>
            </div>
          </div>
          <Image
            src="/greatGrandfather.png"
            alt="Great Grandfather"
            className="hidden lg:block"
            width="300"
            height="0"
            priority
          />
      </div>
      <div className="w-full">
        <h2>Pricing</h2>
      </div>
      <div className="w-full">
        <h2>Start the Journey</h2>
      </div>
      <div className="w-full">
        <h2>Make an Enquiry</h2>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span> &#169; Share Our Past 2024</span>
      </footer>
    </div>
  );
}
