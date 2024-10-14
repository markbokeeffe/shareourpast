import clsx from 'clsx';
import Header from './components/Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat ({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {
  return (
    <div className={clsx( montserrat.className, "font-sans flex min-h-screen flex-col items-center text-center p-0")}>
      <Header />
      <div style={{ fontWeight: 1000 }} className="mt-[70px] bg-white z-40 text-2xl w-full py-4 text-[#007b8b]">
        Share the Human Stories In Your Family Tree
      </div>
      <div className="home-image w-full px-10 lg:px-80 py-24 flex place-items-center justify-center flex-col relative">
        <div className="absolute h-full w-full bg-[#007b8b] top-0 left-0 opacity-50" />
        <div className="flex justify-center flex-col z-40">        
          <span className="text-2xl font-black text-white leading-10">Do you wish to be able to easily share what you have uncovered in your family history research with family and friends?</span>
          <a className="text-2xl mt-12 text-[#007b8b] font-black bg-white px-6 py-8 rounded-2xl leading-10">Create an easily shareable digital story of a branch or individual from your family tree.</a></div>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#007b8b] w-full text-white justify-center py-12 px-16 gap-12">
        <div className="flex flex-col text-white gap-6" style={{flexGrow: 1}}>
          <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Share your family research with family &amp; friends</h2>
          <p>Share your exciting findings with family &amp; friends by collating your research into a beatifully presented digital format.</p>
        </div>
        <div className="flex flex-col text-white gap-6" style={{flexGrow: 1}}>
          <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Tell the human stories beyond the names, births &amp; locations</h2>
          <p>Lift the veil on individuals in our family tree by telling their human stories and recounting their life experiences in a digital storybook.</p>
        </div>
        <div className="flex flex-col text-white gap-6" style={{flexGrow: 1}}>
          <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Provide historical context to your family&#39;s story</h2>
          <p>Share your family&#39;s story within the historical and social context in which they lived.</p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center sm:items-start py-12 px-16">
        <div className="w-full ">
          <h2>Historical Expertise </h2>
          <h3 className="text-[#007b8b]">Share Our Past is led by people experienced &amp; enthusiastic family history researchers and qualified historians.</h3>
        </div>
        <div className="w-full">
          <h2>Simple Process</h2>
          <h3 className="text-[#007b8b]">The journey from initial engagement with us to being able to share your family&#39;s with others is a simple four-step process.</h3>
        </div>
      </div>
      <div className="w-full">
        <h2>Our Plans</h2>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
<span> &#169; Share Our Past 2024</span>
      </footer>
    </div>
  );
}
