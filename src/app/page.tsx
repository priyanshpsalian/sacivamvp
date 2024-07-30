// Import necessary modules and components
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FooterTwo } from './../components/Footer/footer';
import SignUp from './auth/signup/page';

// Define the Page component
const Page: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="flex flex-col items-center justify-center bg-[#f6f6f6] ">
      {/* Main container */}
      <div className=" shadow-xl  w-full">
        {/* Header section */}
        <header className="text-center mb-8">
          <div className='flex flex-col w-full  items-center justify-center pt-8'>
          <video className='object-cover ' src="/headervideo.mp4" muted loop autoPlay></video>
          </div>
          <br></br>
          
          {/* <p className="text-xl text-gray-700">For Students By Students</p> */}
          <p
            className="text-gray-700"
            style={{
              fontFamily: 'Urbanist',
              fontSize: '36px',
              fontWeight: 400,
              lineHeight: '43.2px',
              textAlign: 'center',
            }}
          >
            For Students By Students
          </p>
          <p
            className="mb-4"
            style={{
              fontFamily: 'Urbanist',
              fontSize: '36px',
              fontWeight: 400,
              lineHeight: '43.2px',
              textAlign: 'center',
              color: '#4B5563', // Equivalent to Tailwind's text-gray-600
            }}
          >
            The Only{' '}
            <span className="font-bold text-purple-600">&lt;Package&gt;</span> you
            ever need till you graduate and beyond!
          </p>
          {/* <Link href="/auth/signup"> */}
          <button
          onClick={onOpenModal}
          className="bg-purple-600 text-white rounded-full transition duration-300 hover:bg-purple-700"
          style={{
        fontFamily: 'Urbanist',
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '28.8px',
        textAlign: 'center',
        padding: '10px 24px', // Equivalent to py-2 px-6
      }}
    >
      Join the Network for Free
    </button>
          <Modal open={open} onClose={onCloseModal} center>
        <SignUp/>
      </Modal>
          {/* </Link> */}
        </header>

        <p
      className="mb-0"
      style={{
        fontFamily: 'Urbanist',
        fontSize: '36px',
        fontWeight: 400,
        lineHeight: '43.2px',
        textAlign: 'center',
        color: '#4B5563', // Equivalent to Tailwind's text-gray-600
      }}
    >
      One platform to find roommates, housing, network and more
      
    </p>
    <p
      className="mb-10"
      style={{
        fontFamily: 'Urbanist',
        fontSize: '36px',
        fontWeight: 400,
        lineHeight: '43.2px',
        textAlign: 'center',
        color: '#4B5563', // Equivalent to Tailwind's text-gray-600
      }}
    >
      as an International Student in the USA.
    </p>
        <div className='px-8'>
        {/* Feature cards */}
        <div id="features" className="flex flex-col md:flex-row justify-between gap-0 p-0 m-0">
        <div className="border border-purple-600 rounded-lg p-6 text-center flex flex-col items-center hover:shadow-lg transition duration-300 w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
              <Image 
                src="/output-onlinegiftools (1).gif" 
                alt="Network" 
                width={400} 
                height={400} 
                className="mb-4 h-[10rem] object-cover" 
              />
              <h3
                className="mb-4 p-4 rounded"
                style={{
                  fontFamily: 'Urbanist',
                  fontSize: '36px',
                  fontWeight: 700,
                  lineHeight: '43.2px',
                  textAlign: 'center',
                  color: '#4B00828C', // Set text color to white for contrast
                }}
              >
                Network
              </h3>
              <p className="text-sm text-gray-600">A Global Network of Students Only</p>
            </div>
            <div className="border border-purple-600 rounded-lg p-6 text-center flex flex-col items-center hover:shadow-lg transition duration-300 w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
              <Image 
                src="https://s3-alpha-sig.figma.com/img/af3a/920b/78015185d33134e625313908e60283b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k8~iUkxOeqNURZCHRNvB7uHeaDGGnWDWBsNCs2F7b-xlFIAfZKaGOQ2d9UaGgTlpxQk4fD8kmtavb~RM3uBcfLz-LZF7iPYWaCZCFjpjVNC2gHSev~DYQGgkvr330Pg3fYQ4m1GMRVEZ~vH2Er7Njen50-eGk-eqKq4zxAcANdZOaPvzzdlXG~cyeWBJ2-W04SSdHXMrXEQByJGI-teMgsaBSpF~XnzKxaUBT2tqbZoPfS0M0OlW00eEuMhOQG8-Aerm1Hg3Tn7rdYUmxRHbbGSC4dtIuA9sFYkK22TVJp8lKloEQtzJrRYYS7EXIKwtdZz66MYQrfWlCIMSyHE1tg__" 
                alt="Safety" 
                width={100} 
                height={100} 
                className="mb-4 h-[10rem] object-cover" 
              />
              <h3
                className="mb-4 p-4 rounded"
                style={{
                  fontFamily: 'Urbanist',
                  fontSize: '36px',
                  fontWeight: 700,
                  lineHeight: '43.2px',
                  textAlign: 'center',
                  color: '#4B00828C', // Set text color to white for contrast
                }}
              >
                Safety
              </h3>
              <p className="text-sm text-gray-600">Encrypted Security & Privacy</p>
            </div>
            <div className="border border-purple-600 rounded-lg p-6 text-center flex flex-col items-center hover:shadow-lg transition duration-300 w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
              <Image 
                src="https://s3-alpha-sig.figma.com/img/320b/7287/d6a0c0fc623a490704ef4e40ee3802a9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=po4LqjD4nRwcH-2myXqJi~ub1WGHq4VJh15IVFO-WQiQlO8NGPA-TNHp0Z2z9W1C1sa-00V6nzMXwkp8-TVIkrglIVSywL22zoMBzDdJos69w5Z-7iYoBaPdMvv7WCAdpeSHmgYJogDMwpzwg0lrcm22MX0vXQI~or~gLuG83Q6TzpIH8KbCXvNgExBR21tZbIDoPZJFcCOPbY020g0KkJTGquDXc8oo2ww0g4US4JX3OJALFrfJRdFzYPm6kG0pYvtCeJ2A7fWSeQ5hWEEOewApqzVsI~8ewBD1gveWMSJ5I9F0nfDqC1qJDzYJ-McHDNVCqYjr8WoQeQAcsc4suw__" 
                alt="Convenience" 
                width={100} 
                height={100} 
                className="mb-4 h-[10rem] object-cover" 
              />
              <h3
                className="mb-4 p-4 rounded"
                style={{
                  fontFamily: 'Urbanist',
                  fontSize: '36px',
                  fontWeight: 700,
                  lineHeight: '43.2px',
                  textAlign: 'center',
                  color: '#4B00828C', // Set text color to white for contrast
                }}
              >
                Convenience
              </h3>
              <p className="text-sm text-gray-600">ChatGPT-based assistant, Automated Matching & Search</p>
            </div>
          </div>
        </div>

<br></br>
        <p
      className="mb-8"
      style={{
        fontFamily: 'Urbanist',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '28.8px',
        textAlign: 'center',
        color: '#4B5563', // Gray color similar to text-gray-600 in Tailwind CSS
      }}
    >
      We are You. As international students, we know the exact challenges you face and we are building a personalized one-stop solution. Saciva has everything you need to succeed. Join us today and start your journey to success.
    </p>
        
        <div className="flex justify-center">
      <Link href="#" passHref>
        <span
          className="text-blue-600 py-3 px-6 rounded-full font-semibold transition duration-300 mb-6 cursor-pointer"
          style={{
            fontFamily: 'Lato',
            fontSize: '18px', // Reduced font size
            fontWeight: 600,
            lineHeight: '22px', // Adjusted line height to match the new font size
            textAlign: 'center',
          }}
          onClick={(e) => e.preventDefault()}
        >
          Join the Network for Free
        </span>
      </Link>
    </div>

        {/* Additional section */}
        <div id="testimonials" style={{ background: '#0A0A0A' }} className="text-white p-8 w-full text-center mt-10 relative">
      <h2 style={{ color: '#9747FF' }} className="text-3xl font-bold mb-6">
        FORGET THE FRUSTRATING SOCIAL MEDIA GROUPS, JOIN SACIVA
      </h2>
      <br></br>
      <br>
      </br>
      <br></br>
      <div className="flex flex-col md:flex-row justify-around mb-10 space-y-4 md:space-y-0 md:space-x-4">
        <div
          className="border border-purple-600 rounded-lg p-6 text-center text-white flex flex-col items-center hover:shadow-lg transition duration-300"
          style={{
            background: '#181818',
            width: '330px',
            height: '450px',
            borderRadius: '20px 0 0 0',
          }}
        >
          <Image
            src="https://d3l4smlx4vuygm.cloudfront.net/1.png"
            alt="No Fake Accounts"
            width={180}
            height={180}
            className="mb-4"
          />

          <p className="font-urbanist text-2xl font-extrabold leading-tight text-right text-lavender p-4 rounded-lg">
            No Fake Accounts
          </p>
          <p className="font-lato text-base font-normal leading-tight text-left">
            No imposters who send the same unwanted Ad 100 times on the social media groups.</p>
            <br></br>
            <p className="font-lato text-base font-normal leading-tight text-left">
            No more Pesky Ads in DM that are frustrating and annoying.
          </p>
          </div>
          <div
          className="border border-purple-600 rounded-lg p-6 text-center text-white flex flex-col items-center hover:shadow-lg transition duration-300"
          style={{
            background: '#181818',
            width: '330px',
            height: '450px',
            borderRadius: '20px 0 0 0',
          }}
        >
          <Image
            src="https://d3l4smlx4vuygm.cloudfront.net/2.png"
            alt="No More Spam"
            width={180}
            height={180}
            className="mb-4"
          />
          
          <p className="font-urbanist text-2xl font-extrabold leading-tight text-right text-lavender p-4 rounded-lg">
            No More Spam
          </p>
          <p className="font-lato text-base font-normal leading-tight text-left">Don’t loose your precious time in spam filled social media groups</p>
          <br></br>
          <p className="font-lato text-base font-normal leading-tight text-left">Forget infinite scrolling in those muted group chats filled with irrelevant texts</p>
        </div>
        <div
          className="border border-purple-600 rounded-lg p-6 text-center text-white flex flex-col items-center hover:shadow-lg transition duration-300"
          style={{
            background: '#181818',
            width: '330px',
            height: '450px',
            borderRadius: '20px 0 0 0',
          }}
        >
          <Image
            src="https://d3l4smlx4vuygm.cloudfront.net/3.png"
            alt="No Privacy Issues"
            width={180}
            height={180}
            className="mb-4"
          />
          
          <p className="font-urbanist text-2xl font-extrabold leading-tight text-right text-lavender p-4 rounded-lg">
          No Privacy Issues
          </p>
          <p className="font-lato text-base font-normal leading-tight text-left">Hey girl !! Yes you ! Take charge of your DM. Choose who can text  you</p>
          <br></br>
          <p className="font-lato text-base font-normal leading-tight text-left">No more stress of blocking creepy freaks from the public groups that bother you in DM</p>
        </div>
      </div>
      <Link href="#" passHref>
      <span
        className="text-blue-600 py-3 px-6 rounded-full font-semibold transition duration-300 mb-6 cursor-pointer"
        style={{
          fontFamily: 'Lato',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '28.8px',
          textAlign: 'center',
        }}
        onClick={(e) => e.preventDefault()}
      >
        Join the Network for Free
      </span>
      <br></br>
      <br></br>
      <br></br>
    </Link>
    <p
      className="mb-6"
      style={{
        fontFamily: 'Urbanist',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '28.8px',
        textAlign: 'center',
      }}
    >
      We are You. We are international students. Visit our blog to know more about how our journey with Saciva started. At Saciva, we believe in the power of community, we appreciate your Feedback and Suggestions
    </p>
      <div
      className="text-[#FF2929] font-semibold"
      style={{
        fontFamily: 'Lato',
        fontSize: '16px', // Smaller font size
        fontWeight: 600,
        lineHeight: '19.2px', // Adjusted line height to match the smaller font size
        textAlign: 'center',
      }}
    >
      Our Story  
    </div>
    <br></br>
    <br></br>
    
    <p
      className="mb-6"
      style={{
        fontFamily: 'Urbanist',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '28.8px',
        textAlign: 'center',
      }}
    >
      While we are offering the platform for free for now, it costs us our money, time, and effort to keep this running. We highly appreciate your generous support to make this platform more robust and featuresome!
    </p>
      <button className="bg-[#FF2929] text-white py-3 px-6 rounded-full font-semibold transition duration-300">
        support us 
      </button>
      <br></br>
      <br></br>
      <br></br>
      <p
      className="mb-6"
      style={{
        fontFamily: 'Urbanist',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '28.8px',
        textAlign: 'center',
      }}
    >
      You can also support us through spreading a word about Saciva, amongst your friends, neighbors, colleagues,  classmates and roommates or anyone who is a student, especially international students. Thanks :)
    </p>
    <div
      className="text-[#FF2929] font-semibold"
      style={{
        fontFamily: 'Lato',
        fontSize: '16px', // Smaller font size
        fontWeight: 600,
        lineHeight: '19.2px', // Adjusted line height to match the smaller font size
        textAlign: 'center',
      }}
    >
      ^ Share With Friends ^
    </div>
    </div>
      <FooterTwo/>
    </div>
    </div>
  );
};

export default Page;
