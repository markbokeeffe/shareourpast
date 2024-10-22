import clsx from 'clsx';
import Image from "next/image";
import Header from './components/Header';
import Form from './components/Form';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat ({
  weight: '400',
  subsets: ['latin'],
})



export default function Home() {

  return (
    <div className={clsx( montserrat.className, "font-sans flex min-h-screen flex-col items-center p-0")}>
      <Header />
      <div style={{ fontWeight: 1000 }} className="mt-[80px] bg-white z-40 text-xl lg:text-2xl w-full py-4 text-[#007b8b] px-4 lg:px-10 flex flex-col justify-center text-center">
        <span className="block">Share the Human Stories From Your Family Tree In 6 Simple Steps</span>
      </div>
      <div className="home-image w-full px-4 lg:px-80 py-24 flex place-items-center text-center justify-center flex-col relative">
        <div className="absolute h-full w-full bg-[#007b8b] top-0 left-0 opacity-50" />
          <div className="flex justify-center flex-col z-40">        
            <span className="text-xl lg:text-2xl font-black text-white leading-8 lg:leading-10">Do you wish to be able to easily share what you have uncovered in your family history research with family and friends?</span>
            <span className="text-xl lg:text-2xl mt-12 text-[#007b8b] font-black bg-white px-6 py-8 rounded-2xl leading-8 lg:lleading-10">Create an easily shareable digital story of a branch or individual from your family tree.</span>
          </div>
      </div>
      <div id="about" className="flex flex-col lg:flex-row bg-[#007b8b] w-full text-white justify-center py-12 px-4 lg:px-16 gap-12 text-center lg:text-left">
        <div className="flex flex-col text-white gap-6 border-b-2 lg:border-b-0 pb-12 lg:pb-0" style={{flexGrow: 1}}>
          <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Share your family research with family &amp; friends</h2>
          <p>Share your exciting findings with others by collating your research into a beautifully presented digital format.</p>
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
              <div style={{ width: '100px', minWidth: '100px', maxWidth: '100px' }} className="lg:mr-[20px]"><Image
                src="/genealogy.svg"
                alt="Genealoy"
                className="lg:mr-6 lg:mt-2"
                width="100"
                height="0"
                priority
              /></div>
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Genealogy &amp; History at our Heart</h2>
                <h3>We are led by experienced &amp; enthusiastic family history researchers and qualified historians, with a passion for learning and sharing knowledge before it is lost to time.</h3>
              </div>
            </div>

            <div className="w-full text-[#007b8b] flex flex-col lg:flex-row items-center lg:items-start">
              <div style={{ width: '100px', minWidth: '100px', maxWidth: '100px' }} className="lg:mr-[20px]"><Image
                src="/respect.svg"
                alt="Respect"
                className="lg:mr-6 lg:mt-1"
                width="100"
                height="0"
                priority
              /></div>
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Respecting Our Past</h2>
                <h3 className="">We have a core value of respect for those ancestors whose stories are being told.  By sharing their experiences, their memory lives on. </h3>
              </div>
            </div>

            <div className="w-full text-[#007b8b] flex flex-col lg:flex-row items-center lg:items-start">
              <div style={{ width: '100px', minWidth: '100px', maxWidth: '100px' }} className="lg:mr-[20px]"><Image
                src="/process.svg"
                alt="Process"
                className="lg:mr-6 lg:mt-1"
                width="100"
                height="0"
                priority
              /></div>
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Simple 6-Step Process</h2>
                <h3 className="">The journey from initial engagement with us to being able to share your family&#39;s human stories with others is a simple six-step process.</h3>
              </div>
            </div>

            <div className="w-full text-[#007b8b] flex flex-col lg:flex-row items-center lg:items-start">
              <div style={{ width: '100px', minWidth: '100px', maxWidth: '100px' }} className="lg:mr-[20px]"><Image
                src="/responsive.svg"
                alt="Responsive"
                className="lg:mr-6 lg:mt-1"
                width="100"
                height="0"
                priority
              /></div>
              <div>
                <h2 className="mb-2" style={{ fontWeight: 1000, fontSize: 22 }}>Responsive Layouts</h2>
                <h3 className="">Your digital storybook will be fully responsive: meaning that it will work on desktop, tablet and phones.</h3>
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

      <div className="bg-[#007b8b] w-full px-8 lg:px-16 py-8 text-white text-center lg:text-left">
        <h2 className="mb-6" style={{ fontWeight: 1000, fontSize: 22 }} id="samples">Sample Digital Stories</h2>
        <p className="mb-6">Below are example digital storybooks that have already been created:</p>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <a href="https://www.mullinsfamilyclonmel.com/" target="_blank" className="flex flex-col text-center justify-center items-center hover:underline">
            <Image
              src="/mullins.png"
              alt="The Mullins Soldiers of Clonmel"
              className="border-4 border-white rounded-md"
              width="300"
              height="0"
              priority
            />
            <p>The Mullins Soldiers of Clonmel</p>
          </a>

          <a href="https://www.maxeyfamilyclonmel.com/" target="_blank" className="flex flex-col text-center justify-center items-center hover:underline">
            <Image
              src="/maxey.png"
              alt="The Maxey Family of Clonmel"
              className="border-4 border-white rounded-md"
              width="300"
              height="0"
              priority
            />
            <p>The Maxey Family of Clonmel</p>
          </a>

          <a href="https://www.cunninghamfamilydublin.com/" target="_blank" className="flex flex-col text-center justify-center items-center hover:underline">
            <Image
              src="/cunningham.png"
              alt="The Cunningham Family of Drumcondra, Dublin"
              className="border-4 border-white rounded-md"
              width="300"
              height="0"
              priority
            />
            <p>The Cunninghams of Drumcondra</p>
          </a>

        </div>
      </div>

      <div className="process w-full py-12 px-10 lg:px-16 flex justify-center flex-col relative">
        <div className="absolute h-full w-full bg-[#007b8b] top-0 left-0 opacity-50" />
        <div className="flex justify-center flex-col z-40 w-full text-center lg:text-left">    
          <h2 style={{ fontWeight: 1000, fontSize: 22 }} id="process" className="w-full text-white mb-6">Simple 6-Step Process</h2>
          <p className="text-white mb-8 text-center lg:text-left"  style={{ fontWeight: 1000 }}>The journey from initial engagement with us to being able to share your digital storybook with your family &amp; friends can be completed in a simple set of steps:</p>
          <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
            
            
    


            <div className="border-1 w-full lg:w-[300px] overflow-hidden rounded-3xl border-2 border-white pb-2 bg-[#007b8b] text-white">
              <h3 style={{ fontWeight: 1000, fontSize: 14 }} className="flex flex-row w-full bg-white text-[#007b8b] py-2 px-4 justify-between items-center">
                 Step 1:
              </h3>

              <div className="px-4 pt-4">
                <p  style={{ fontWeight: 1000 }} className="w-full mb-4 pb-2">Contact us using the form on this page</p>
                {/* <p>Include information regarding what you would like to be included in your storybook.</p> */}
              </div>
            </div>


            <div className="border-1 w-full lg:w-[300px] overflow-hidden rounded-3xl border-2 border-white pb-2 bg-[#007b8b] text-white">
              <h3 style={{ fontWeight: 1000, fontSize: 14 }}className="flex flex-row w-full bg-white text-[#007b8b] py-2 px-4 justify-between items-center">
                 Step 2:
              </h3>

              <div className="px-4 pt-4">
                <p style={{ fontWeight: 1000 }} className="w-full mb-4 pb-2">We will respond to you and propose a plan</p>
                {/* <p>Based upon the information that you have provided, we will respond to you with a suggested plan for your digital storybook.</p> */}
              </div>
            </div>

            <div className="border-1 w-full lg:w-[300px] overflow-hidden rounded-3xl border-2 border-white pb-2 bg-[#007b8b] text-white">
              <h3 style={{ fontWeight: 1000, fontSize: 14 }}className="flex flex-row w-full bg-white text-[#007b8b] py-2 px-4 justify-between items-center">
                 Step 3:
              </h3>

              <div className="px-4 pt-4">
                <p style={{ fontWeight: 1000 }} className="w-full mb-4 pb-2">Provide us with your research findings</p>
                {/* <p>Provide us with the information that you would like to be included with your storybook, including any images.</p> */}

                </div>
            </div>


            <div className="border-1 w-full lg:w-[300px] overflow-hidden rounded-3xl border-2 border-white pb-2 bg-[#007b8b] text-white">
              <h3 style={{ fontWeight: 1000, fontSize: 14 }}className="flex flex-row w-full bg-white text-[#007b8b] py-2 px-4 justify-between items-center">
                 Step 4:
              </h3>

              <div className="px-4 pt-4">
                <p style={{ fontWeight: 1000 }} className="w-full mb-4 pb-2">We will build your storybook</p>
                {/* <p>Using the information that you have provied, we will build your digital storybook so that you can review it and offer feedback.</p> */}
              </div>
            </div>


            <div className="border-1 w-full lg:w-[300px] overflow-hidden rounded-3xl border-2 border-white pb-2 bg-[#007b8b] text-white">
              <h3 style={{ fontWeight: 1000, fontSize: 14 }}className="flex flex-row w-full bg-white text-[#007b8b] py-2 px-4 justify-between items-center">
                 Step 5:
              </h3>

              <div className="px-4 pt-4">
                <p style={{ fontWeight: 1000 }} className="w-full mb-4 pb-2">Provide your feedback</p>
                {/* <p>You provide feedback on your storybook and we make any alterations required.</p> */}
              </div>
            </div>


            <div className="border-1 w-full lg:w-[300px] overflow-hidden rounded-3xl border-2 border-white pb-2 bg-[#007b8b] text-white">
              <h3 style={{ fontWeight: 1000, fontSize: 14 }}className="flex flex-row w-full bg-white text-[#007b8b] py-2 px-4 justify-between items-center">
                 Step 6:
              </h3>

              <div className="px-4 pt-4">
                <p style={{ fontWeight: 1000 }} className="w-full mb-4 pb-2">We place your storybook live</p>
                {/* <p>After you have reviewed and approved your storybook, we will place it live using your own uniqute website address.  You can then enjoy and share this with your family &amp; friends.</p> */}
              </div>
            </div>
          </div>
        </div>

      </div>



      <div className="bg-[#007b8b] w-full px-8 lg:px-16 py-8 text-white text-center lg:text-left" id="start-journey">
        <h2 style={{ fontWeight: 1000, fontSize: 22 }}>Start Your Journey</h2>
        <div className="flex w-full flex-col lg:flex-row justify-between">
          <div className="mt-8 lg:max-w-96 w-full text-left">
            <p>Simply enter your information into this form in order to begin your journey to sharing your uncovered family history research.</p>
            <p className="mt-8">Alternatively, email us at <a className="hover:underline" href="mailto: info@sharemypast.com">info@sharemypast.com</a>, providing your name and some information about the family tree information that you would like to incorporate into your digital booklet. </p>
            <p className="mt-8">We will respond to you within two working days.</p>
          </div>
          <Form />
        </div>
      </div>



        
        
      <div className="text-[#007b8b] flex flex-col w-full items-center text-center lg:text-left py-12 px-4 lg:px-16 gap-6 bg-white">
        <h2 style={{ fontWeight: 1000, fontSize: 22 }} id="pricing" className="w-full">Pricing</h2>
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
          <div className="border-1 w-full lg:w-[300px] rounded-md border-2 border-[#007b8b] pb-4">
            <div className="flex flex-row w-full bg-[#007b8b] text-white py-4 px-4 justify-between items-center">
              <h3 style={{ fontWeight: 1000, fontSize: 18 }}>Plan 1</h3>
              <h2 style={{ fontWeight: 1000, fontSize: 18 }}>€140</h2>
            </div>

            <div className="px-4 pt-4 text-left">
              <p className="w-full text-center border-b-2 mb-4 pb-2">Up to &amp; including <span style={{ fontWeight: 1000, fontSize: 18 }}>6</span> pages</p>
              <p>Includes:</p>
              <ul>
                <li>- Creation of digital storybook</li>
                <li>- Hosting</li>
                <li>- Plus €20 for domain hosting annually thereafter</li>
              </ul>
              </div>
          </div>

          <div className="border-1 w-full lg:w-[300px] rounded-md border-2 border-[#007b8b] pb-4">
            <div className="flex flex-row w-full bg-[#007b8b] text-white py-4 px-4 justify-between items-center">
              <h3 style={{ fontWeight: 1000, fontSize: 18 }}>Plan 2</h3>
              <h2 style={{ fontWeight: 1000, fontSize: 18 }}>€160</h2>
            </div>
            <div className="px-4 pt-4 text-left">
              <p className="w-full text-center border-b-2 mb-4 pb-2">From <span style={{ fontWeight: 1000, fontSize: 18 }}>7 up to 11</span> pages</p>
              <p>Includes:</p>
              <ul>
                <li>- Creation of digital storybook</li>
                <li>- Hosting</li>
                <li>- Plus €20 for domain hosting annually thereafter</li>
              </ul>
              </div>
          </div>


          <div className="border-1 w-full lg:w-[300px] rounded-md border-2 border-[#007b8b] pb-4">
            <div className="flex flex-row w-full bg-[#007b8b] text-white py-4 px-4 justify-between items-center">
              <h3 style={{ fontWeight: 1000, fontSize: 18 }}>Plan 3</h3>
              <h2 style={{ fontWeight: 1000, fontSize: 18 }}>€190</h2>
            </div>
            <div className="px-4 pt-4 text-left">
              <p className="w-full text-center border-b-2 mb-4 pb-2">From <span style={{ fontWeight: 1000, fontSize: 18 }}>12 up to 16</span> pages</p>
              <p>Includes:</p>
              <ul>
                <li>- Creation of digital storybook</li>
                <li>- Hosting</li>
                <li>- Plus €20 for domain hosting annually thereafter</li>
              </ul>
              </div>
          </div>

        </div>
      </div>

      <footer className="bg-[#007b8b] w-full text-white row-start-3 flex gap-6 flex-wrap items-center justify-center py-2">
        <span style={{ fontWeight: 900, fontSize: 11 }}> &#169; Share Our Past - 2024 | <a className="hover:underline" href="mailto: info@sharemypast.com">info@sharemypast.com</a></span>
      </footer>
    </div>
  );
}
