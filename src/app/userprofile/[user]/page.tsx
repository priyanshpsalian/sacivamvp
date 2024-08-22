"use client";

import axios from "axios";
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Select from 'react-select';
import toast, { Toaster } from "react-hot-toast";
import {
  countryOptions,
  socializingOptions,
  tidinessOptions,
  houseAmbianceOptions,
  drinkOptions,
  expenditureOptions,
  smokeOptions,
  genderOptions,
  foodOptions,
  majorOptions
} from "@/app/userprofile/constants/index";

function Page() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [university, setUniversity] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [language, setLanguage] = useState('');
  const [major, setMajor] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('Male');
  const [foodPreference, setFoodPreference] = useState('Veg');
  const [smoke, setSmoke] = useState('No');
  const [drink, setDrink] = useState('No');
  const [expenditure, setExpenditure] = useState('Spends frugally');
  const [houseAmbiance, setHouseAmbiance] = useState('Calm and quiet');
  const [tidiness, setTidiness] = useState('Flexible');
  const [socializing, setSocializing] = useState('Solitude');
  const [aboutYourself, setAboutYourself] = useState('');
  const [image, setImage] = useState('https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75');
  const [imagelink, setImageLink] = useState('');
  const param = useParams();
  const router = useRouter();


  const userId = param.user;
  let email = Array.isArray(userId) ? userId.join('').replace("%40", "@") : userId?.replace("%40", "@");



  const uploadImage = async (result: any) => {
    const secureurl = await result;
    setImage(secureurl.info.secure_url)
    setImageLink(secureurl.info.secure_url)
  }


  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const wordCount = e.target.value.split(' ').filter(Boolean).length;
    if (wordCount <= 250) {
      setAboutYourself(e.target.value);
    }
  }, []);


  async function profileUploaded() {
    try {
      const response = await axios.post(`https://sacivauserservice.onrender.com/api/v1/createuserprofile/${email}}`, {
        name,
        ImageUrl: imagelink,
        age: parseInt(age),
        university,
        start: startYear,
        end: endYear,
        language,
        major,
        country,
        foodPref: foodPreference,
        smoke,
        drink,
        exp: expenditure,
        ambiance: houseAmbiance,
        tidiness,
        socalizing: socializing,
        about: aboutYourself,
        gender
      });
      if (response.status == 200) {
        router.push(`/survey/${email}`)
      }
    } catch (error) {
      toast.error("SomeThing went wrong")
    }
  }

  return (
    <div className="flex flex-col items-center bg-[#4B00828C] p-4 rounded-lg shadow-lg max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <Toaster />
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-xl font-bold text-[#4B0082]">Create Your Profile</h1>
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <Image
            className="rounded-full object-cover"
            src={image || '/default-profile.png'}
            alt="Profile Image"
            layout="fill"
          />
          <CldUploadButton
            className="absolute bottom-0 right-0 bg-[#AE8DC7] text-white rounded-full p-2"
            onSuccess={uploadImage}
            uploadPreset="saciva"
          >
            Upload
          </CldUploadButton>
        </div>
      </div>

      <form className="space-y-4 mt-4 w-full">
        <div className="flex flex-col space-y-2">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="foodPreference">
            Gender
          </label>
          <Select
            id="foodPreference"
            options={genderOptions}
            value={genderOptions.find(option => option.value === gender)}
            onChange={(newValue) => setGender(newValue ? newValue.value : '')}
            placeholder="Select gender"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="university">
            University
          </label>
          <input
            type="text"
            id="university"
            placeholder="Enter your university"
            className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="startYear">
            University Starting Year
          </label>
          <input
            type="date"
            id="startYear"
            className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="endYear">
            University Ending Year
          </label>
          <input
            type="date"
            id="endYear"
            className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="language">
            Language
          </label>
          <input
            type="text"
            id="language"
            placeholder="Enter your language"
            className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="major">
            Major
          </label>
          <Select
            isClearable
            options={majorOptions}
            onChange={(newValue) => setMajor(newValue ? newValue.value : '')}
            placeholder="Select major"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="country">
            Country
          </label>
          <Select
            isClearable
            options={countryOptions}
            onChange={(newValue) => setCountry(newValue ? newValue.value : '')}
            placeholder="Select country"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="foodPreference">
            Food Preference
          </label>
          <Select
            id="foodPreference"
            options={foodOptions}
            value={foodOptions.find(option => option.value === foodPreference)}
            onChange={(newValue) => setFoodPreference(newValue ? newValue.value : '')}
            placeholder="Select food preference"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="smoke">
            Smoke
          </label>
          <Select
            id="smoke"
            options={smokeOptions}
            value={smokeOptions.find(option => option.value === smoke)}
            onChange={(newValue) => setSmoke(newValue ? newValue.value : '')}
            placeholder="Do you smoke?"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="drink">
            Drink
          </label>
          <Select
            id="drink"
            options={drinkOptions}
            value={drinkOptions.find(option => option.value === drink)}
            onChange={(newValue) => setDrink(newValue ? newValue.value : '')}
            placeholder="Do you drink?"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="expenditure">
            Expenditure
          </label>
          <Select
            id="expenditure"
            options={expenditureOptions}
            value={expenditureOptions.find(option => option.value === expenditure)}
            onChange={(newValue) => setExpenditure(newValue ? newValue.value : '')}
            placeholder="How do you spend?"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="houseAmbiance">
            House Ambiance
          </label>
          <Select
            id="houseAmbiance"
            options={houseAmbianceOptions}
            value={houseAmbianceOptions.find(option => option.value === houseAmbiance)}
            onChange={(newValue) => setHouseAmbiance(newValue ? newValue.value : '')}
            placeholder="Describe your house ambiance"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="tidiness">
            Tidiness
          </label>
          <Select
            id="tidiness"
            options={tidinessOptions}
            value={tidinessOptions.find(option => option.value === tidiness)}
            onChange={(newValue) => setTidiness(newValue ? newValue.value : '')}
            placeholder="How tidy are you?"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="socializing">
            Socializing
          </label>
          <Select
            id="socializing"
            options={socializingOptions}
            value={socializingOptions.find(option => option.value === socializing)}
            onChange={(newValue) => setSocializing(newValue ? newValue.value : '')}
            placeholder="How often do you socialize?"
            className="w-full border-[#4B00828C]"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#4B00828C",
              }),
            }}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-x3 font-bold text-[#4B0082]" htmlFor="aboutYourself">
            About Yourself
          </label>
          <textarea
            id="aboutYourself"
            placeholder="Tell us about yourself (250 words max)"
            className="border rounded-md p-2 text-sm w-full border-[#4B00828C] h-24 resize-none"
            value={aboutYourself}
            onChange={handleTextChange}
            rows={3}
          />
          <small className="text-xs text-[#4B0082]">
            {aboutYourself.split(' ').filter(Boolean).length} / 250 words
          </small>
        </div>

        {/* Add more form fields for the other attributes */}

        <button
          type="button"
          className="w-full bg-[#4B0082] text-white py-2 px-4 rounded-md"
          onClick={profileUploaded}
        >
          Create Profile
        </button>
      </form>
    </div>
  );
}

export default Page;
