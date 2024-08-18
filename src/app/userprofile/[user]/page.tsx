"use client";

import axios from "axios";
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

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
  let email: string;
  if (typeof userId === 'string') {
    email = userId.replace("%40", "@");
  } else if (Array.isArray(userId)) {
    email = userId.join('').replace("%40", "@");
  } else {
    throw new Error('Invalid userId type');
  }

  // Options for Select components
  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    // Add more countries as needed
  ];

  const majorOptions = [
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
    { value: 'Business Administration', label: 'Business Administration' },
    // Add more majors as needed
  ];

  // Upload image
  async function uploadImage(result: any) {
    console.log(result.info.secure_url);
    setImage(result.info.secure_url);
    setImageLink(result.info.secure_url);
  }

  async function profileUploaded() {
    try {
      const response = await axios.post("/api/user", {
        email, name, gender, age: parseInt(age), image: imagelink, university, startYear, endYear, major, language, country,
        foodPreference, smoke, drink, expenditure, houseAmbiance, tidiness, socializing, aboutYourself
      });
      if (response) {
        router.push('/buffer');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const AboutYourself: React.FC = () => {
    const [aboutYourself, setAboutYourself] = useState('');
    const [error, setError] = useState('');
  
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const wordCount = e.target.value.split(' ').filter(Boolean).length;
      if (wordCount <= 250) {
        setAboutYourself(e.target.value);
        setError(''); // Clear any previous error
      } else {
        setError('You can only enter up to 250 words.');
      }
    }; 

  return (
    <div className="flex flex-col items-center  bg-[#4B00828C] p-4 rounded-lg shadow-lg max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
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
          onUpload={uploadImage}
          uploadPreset="pf0ysyc8"
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
        <CreatableSelect
          isClearable
          options={majorOptions}
          onChange={(newValue) => setMajor(newValue ? newValue.value : '')}
          placeholder="Select or create major"
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
        <CreatableSelect
          isClearable
          options={countryOptions}
          onChange={(newValue) => setCountry(newValue ? newValue.value : '')}
          placeholder="Select or create country"
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
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="food_preference">
          Food Preference
        </label>
        <select
          id="food_preference"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
          value={foodPreference}
          onChange={(e) => setFoodPreference(e.target.value)}
        >
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Vegan">Vegan</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="smoke">
          Do you smoke?
        </label>
        <select
          id="smoke"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
          value={smoke}
          onChange={(e) => setSmoke(e.target.value)}
        >
          <option value="No">No</option>
          <option value="Occasionally">Occasionally</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="drink">
          Do you drink?
        </label>
        <select
          id="drink"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
          value={drink}
          onChange={(e) => setDrink(e.target.value)}
        >
          <option value="No">No</option>
          <option value="Occasionally">Occasionally</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="expenditure">
          Expenditure
        </label>
        <select
          id="expenditure"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
          value={expenditure}
          onChange={(e) => setExpenditure(e.target.value)}
        >
          <option value="Spends frugally">Spends frugally</option>
          <option value="Moderate spender">Moderate spender</option>
          <option value="Spends lavishly">Spends lavishly</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="house_ambiance">
          House Ambiance
        </label>
        <select
          id="house_ambiance"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
          value={houseAmbiance}
          onChange={(e) => setHouseAmbiance(e.target.value)}
        >
          <option value="Calm and quiet">Calm and quiet</option>
          <option value="Friendly and social">Friendly and social</option>
          <option value="Party house">Party house</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="tidiness">
          Tidiness
        </label>
        <select
          id="tidiness"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
          value={tidiness}
          onChange={(e) => setTidiness(e.target.value)}
        >
          <option value="Very tidy">Very tidy</option>
          <option value="Flexible">Flexible</option>
          <option value="Not tidy">Not tidy</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="socializing">
          Socializing
        </label>
        <select
          id="socializing"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C]"
          value={socializing}
          onChange={(e) => setSocializing(e.target.value)}
        >
          <option value="Solitude">Solitude</option>
          <option value="Moderate socializing">Moderate socializing</option>
          <option value="Highly social">Highly social</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-x3 font-bold text-[#4B0082]" htmlFor="aboutYourself">
          About Yourself
        </label>
        <textarea
          id="aboutYourself"
          placeholder="Write about yourself (max 250 words)"
          className="border rounded-md p-2 text-sm w-full border-[#4B00828C] h-24 resize-none"
          value={aboutYourself}
          onChange={handleTextChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="flex flex-col items-center mt-6">
        <button
          type="button"
          className="bg-[#4B0082] text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
          onClick={profileUploaded}
        >
          Save Profile
        </button>
      </div>
    </form>
  </div>
);
}

return <AboutYourself />;
}

export default Page;
