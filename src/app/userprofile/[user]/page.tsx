"use client"

import axios from "axios";
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

function Page() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [university, setUniversity] = useState('');
  const [language, setLanguage] = useState('');
  const [major, setMajor] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('Male');
  const [image, setImage] = useState('https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75');
  const [imagelink, setImageLink] = useState('');
  const param = useParams();
  const router = useRouter();

  const userId = param.user;
  let email: string;
  if (typeof userId === 'string') {
    email = userId.replace("%40", "@");
  } else if (Array.isArray(userId)) {
    email = userId.join('').replace("%40", "@");
  } else {
    throw new Error('Invalid userId type');
  }

  // upload image
  async function uploadImage(result: any) {
    console.log(result.info.secure_url);
    setImage(result.info.secure_url);
    setImageLink(result.info.secure_url);
  }

  async function profileUploaded() {
    try {
      const response = await axios.post("/api/user", {
        email, name, gender, age: parseInt(age), image: imagelink, university, major, language, country
      });
      if (response) {
        router.push('/buffer');
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div className="h-[150vh] bg-lavender">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-center text-3xl font-bold text-indigoCustom md:text-5xl md:leading-10">
            Make Your Profile
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 px-8  bg-royal-purple rounded-lg">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-lightPurple md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-lightPurple">
                  Our friendly team would love to hear from you.
                </p>
                <div></div>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone_number"
                      >
                        Profile Image
                      </label>
                      <Image
                        className="relative z-0 inline-block h-20 w-20 rounded-full ring-2 ring-white"
                        src={image}
                        alt="Delba"
                        width={80} // Added width property
                        height={80} // Added height property
                      />
                      <CldUploadButton
                        className="bg-indigoCustom rounded-full px-6 py-2 text-gray-50"
                        onUpload={uploadImage}
                        uploadPreset="pf0ysyc8"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label
                        className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Age
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="number"
                        id="last_name"
                        placeholder="Age"
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      University
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="university"
                      placeholder="University Name"
                      onChange={(e) => setUniversity(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="language"
                    >
                      Language
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="language"
                      placeholder="Language"
                      onChange={(e) => setLanguage(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="major"
                    >
                      Major
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="major"
                      placeholder="Major"
                      onChange={(e) => setMajor(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="country"
                      placeholder="Country"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-lightPurple peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Gender
                    </label>
                    <select
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="NAN">Not Preferred</option>
                    </select>
                  </div>
                  <button
                    onClick={profileUploaded}
                    type="button"
                    className="w-full rounded-md bg-indigoCustom px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigoCustom/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigoCustom"
                  >
                    Create Profile
                  </button>
                  {/* Set the button background color to indigo */}
                </form>
              </div>
            </div>
            <Image
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block pr-12"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
              width={687} // Added width property
              height={800} // Added height property
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

