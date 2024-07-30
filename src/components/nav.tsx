'use client'

import SignUp from '@/app/auth/signup/page';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full  bg-[#f6f6f6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Image
            src="https://s3-alpha-sig.figma.com/img/5140/0019/b270f49a57e064d6b1941a20be76eec0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6qGoD9RjNpGfITRipVbF62LJ43cCjm0DQUVatP~uDIYkD2w16Upwjl-kopvuhN2DjQ8KHDG6Wnh3MTax-4hswadHElyyuiEY4LaKqhyy0Fds~AtAFvo-b~21zNjPuJptEHXGhxNhMi1qUjgnLPVXQ9t3ZPuFZhdh82Xz0M9J8fHi1AQH-tGShmlZMP-5PyXbH1lonT6ExlSoMC3l7yN844kNdjZdG8Djyy1mCMox8l5Cd5vvSqFlo3grept4-QU1CmbfDMR4dMT7~DW5ln-ucPAd-LQYsU1wztNst9wmAM9XTgOORWCMY9t85eBg6R4praEIMHKnu9iLQ7kaZ0OfQ__"
            alt="SACIVA Logo"
            width={70}
            height={70}
          />
          {/* <span className="font-bold">SACIVA</span> */}
          <span
            style={{
              fontFamily: 'Urbanist',
              fontSize: '21px',
              fontWeight: 900,
              lineHeight: '25.2px',
              textAlign: 'center',
            }}
            className="font-bold"
          >
            SACIVA
          </span>

        </div>
        <div className="hidden lg:block">
          <button
            onClick={onOpenModal}
            type="button"
            className="mt-4 w-full rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log In
          </button>
          <Modal open={open} onClose={onCloseModal} center>
            <SignUp/>
          </Modal>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">SACIVA</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={onOpenModal}
                  type="button"
                  className="mt-4 w-full rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Log In
                </button>
                <Modal open={open} onClose={onCloseModal} center>
                  <SignUp/>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
