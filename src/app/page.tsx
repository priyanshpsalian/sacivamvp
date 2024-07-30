// Import necessary modules and components
"use client"
import Image from 'next/image';
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
    <div className="flex flex-col items-center justify-center bg-gray-50 ">
      {/* Main container */}
      <div className="bg-white shadow-xl  w-full">
        {/* Header section */}
        {/* <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-2 text-gray-900">SACIVA</h1> */}
          <header className="text-center mb-8">
          <video src="/838eb867-a83f-427f-89e3-1463d19e11f4 (1).mp4" autoPlay loop muted className="mx-auto mb-8" width="400"></video>
          <p className="text-xl text-gray-700">For Students By Students</p>
          <p className="text-md mb-4 text-gray-600">
            The Only <span className="font-bold text-purple-600">&lt;Package&gt;</span> you ever need till you graduate and beyond!
          </p>
          {/* <Link href="/auth/signup"> */}
          <button onClick={onOpenModal} className="bg-purple-600 text-white py-2 px-6 rounded-full font-semibold transition duration-300 hover:bg-purple-700">
            Join the Network for Free
          </button>
          <Modal open={open} onClose={onCloseModal} center>
        <SignUp/>
      </Modal>
          {/* </Link> */}
        </header>

        <p className="text-center text-md mb-10 text-gray-600">
          One platform to find roommates, housing, network and more as an International Student in the USA.
        </p>
        <div className='px-8'>
        {/* Feature cards */}
        <div id="features" className="flex flex-col md:flex-row justify-between mb-12 gap-4">
            <div className="border border-purple-600 rounded-lg p-6 text-center flex flex-col items-center hover:shadow-lg transition duration-300 w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
              <Image 
                src="/output-onlinegiftools (1).gif" 
                alt="Network" 
                width={400} 
                height={400} 
                className="mb-4 h-[10rem] object-cover" 
              />
              <h3 className="font-bold text-lg text-gray-900">Network</h3>
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
              <h3 className="font-bold text-lg text-gray-900">Safety</h3>
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
              <h3 className="font-bold text-lg text-gray-900">Convenience</h3>
              <p className="text-sm text-gray-600">ChatGPT-based assistant, Automated Matching & Search</p>
            </div>
          </div>
        </div>

        <p className="text-center text-md text-gray-600 mb-8">
          We are You. As international students, we know the exact challenges you face and we are building a personalized one-stop solution. Saciva has everything you need to succeed. Join us today and start your journey to success.
        </p>
        
        <div className="text-center mb-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold transition duration-300 hover:bg-blue-700 mb-4">
            Join the Network for Free
          </button>
        </div>

        {/* Additional section */}
        <div id="testimonials" className="bg-gray-800 text-white p-8  w-full text-center mt-10 relative">
          <h2 style={{ color: '#9747FF' }} className="text-3xl font-bold mb-6">
            FORGET THE FRUSTRATING SOCIAL MEDIA GROUPS, JOIN SACIVA
          </h2>
          <div className="flex flex-col md:flex-row justify-around mb-10 space-y-4 md:space-y-0 md:space-x-4">
            <div className="border border-purple-600 rounded-lg p-6 text-center bg-black text-white flex flex-col items-center hover:shadow-lg transition duration-300">
              <Image 
                src="https://s3-alpha-sig.figma.com/img/64bc/66a3/242164346bb265da9e0ecb274c6ef6c8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lAB7VFgWeVOvcrsFZuMwSJS2pVEGX6kKlSM~VUqtnQjJlvI03RmRk3L4aPz~CU3asXS6yHiBTcxWiURtYAynouBGmsi-gdE-hX5qKVwvBq5ZxrlbyKNRBDLwEGx4hMcoLgQjPirWJVXGbSnMb9rwl48oNkpJNnCcR7dhd1XdH2yOwVvqkSvTcN~J2AFn3YcQubCmp~iLm6jQeh6rpLGfsK~tnUe5mXYoKVB3t3XMdlEtcLXVA5j1qfs-OxtMe-LWYJeuAr6xFbCr2X6X0mgzCAxEthupFZnx21YD9Gk9YTn0BihRtCi9DGHQD6QPmtZkuHfyAfo7-PfD7Be~LUASKg__" 
                alt="No Fake Accounts" 
                width={100} 
                height={100} 
                className="mb-4" 
              />
              <p className="font-bold text-lg">No Fake Accounts</p>
              <p className="text-sm mt-2">We have a rigorous verification process to ensure that only genuine students are part of our network.</p>
            </div>
            <div className="border border-purple-600 rounded-lg p-6 text-center bg-black text-white flex flex-col items-center hover:shadow-lg transition duration-300">
              <Image 
                src="https://s3-alpha-sig.figma.com/img/cd02/0042/f2a8f484e9a2a57ba44fe24e1dad6d9f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9QlJOt8hqXFcCb~jqmXRoCphy1LzZkXPoMz6mdmZyasiRcIDq0QJTiofgCbgSCjf3j1dC4A1NSIT1tLY6JXqEOPss7qe7IO66ZjwDOFG12bbobpHLQtNSiQEjgjw2pjUYWGLvrS9Jogy~0n7zvg6DwtsDW8He~XAzhlUU2tiTWFoexT-vFc2N-rzbUvyGYS4qSwVhtNThsy4SeQn5tFyRpZjV0mMskfN5BzmpW5KmVcjCDcKf-15LBOsB3yLOJudmvoelpsIWPnLpRR4TSedKJ~5EyKX6-mcV94WWeoPyK8BpknD5~LpdSq43yLvfojeM-hgXPivmSN5fRT88d20g__" 
                alt="No More Spam" 
                width={100} 
                height={100} 
                className="mb-4" 
              />
              <p className="font-bold text-lg">No More Spam</p>
              <p className="text-sm mt-2">We have a strict policy against spam and unwanted messages, ensuring a clean and productive environment.</p>
            </div>
            <div className="border border-purple-600 rounded-lg p-6 text-center bg-black text-white flex flex-col items-center hover:shadow-lg transition duration-300">
              <Image 
                src="https://s3-alpha-sig.figma.com/img/432c/2891/4da943f66bd613509b44465ccea003b0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AkEOx1bFfHryQXJGBZL3JHSvFuWnJddHgNuQQ6OoVSGt4X91YtAY37IfEXiknhYt9Nll5~l5bOfBHnHyg1IC8qS~ApYhYTLJjLtRC8nPTMyD3MDZKUq4LzU5MlWwNfwzr71etaYM8WiNjObuk1TQaHVLpmkOO5~GZ8~ilMupq1-dY9Khhcd-NyoCMS-ZN-vgEqreSPfT86cOw7UrKh0ziRCzfQHNdjf7vuF-v1Np1~jmzPHbJpLnLr82itP0ubSJeOcJo0I~3-AdO3JTG8m3cpLqWf3KZIk56fQ9qOD8RJAguJkNiE4T0uL7qcwl5N~yGoxBaUbvgROS2W86aBiSOQ__" 
                alt="No Privacy Issues" 
                width={100} 
                height={100} 
                className="mb-4" 
              />
              <p className="font-bold text-lg">No Privacy Issues</p>
              <p className="text-sm mt-2">We prioritize your privacy and security. Your data is encrypted and never shared without your consent.</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold transition duration-300 hover:bg-blue-700 mb-6">
            Join the Network for Free
          </button>
          <p className="text-sm mb-6">
            We are You. We are international students! We get it! Our blog is more relatable to your journey with stories and useful tips. Saciva has been built for our community. We appreciate your feedback and suggestions.
          </p>
          <button className="bg-red-600 text-white py-3 px-6 rounded-full font-semibold transition duration-300 hover:bg-red-700 mb-6">
            Support Us
          </button>
          <p className="text-sm mb-6">
            We are offering the platform for free for now; it costs us an immense amount of time and effort to keep this running. Help us regularly update our generous support to make this platform better for students.
          </p>
          <button className="bg-green-600 text-white py-3 px-6 rounded-full font-semibold transition duration-300 hover:bg-green-700">
            Share With Friends
          </button>
        </div>
      </div>
      <FooterTwo/>
    </div>
  );
};

export default Page;
