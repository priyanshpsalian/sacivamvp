"use client"
import React, { useState } from 'react';

export default function Survey() {
  const [universityName, setUniversityName] = useState('');
  const [cityName, setCityName] = useState('');
  const [experience, setExperience] = useState('');

  const [errors, setErrors] = useState({
    universityName: '',
    cityName: '',
    experience: ''
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { universityName: '', cityName: '', experience: '' };

    if (!universityName) {
      newErrors.universityName = 'University name is required';
      valid = false;
    }

    if (!cityName) {
      newErrors.cityName = 'City name is required';
      valid = false;
    }

    if (!experience) {
      newErrors.experience = 'Experience is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log({ universityName, cityName, experience });
    }
  };

  return (
    <div className="min-h-screen bg-royal-purple flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-lavender shadow-lg rounded-lg p-8">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-indigoCustom">
        Survey of Experience
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="universityName" className="block text-sm font-medium text-gray-100">
              University Experience
            </label>
            <input
              id="universityName"
              name="universityName"
              type="text"
              value={universityName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUniversityName(e.target.value)}
              required
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.universityName ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-lavender focus:border-lavender sm:text-sm`}
              placeholder="Enter your university name"
            />
            {errors.universityName && (
              <p className="mt-2 text-sm text-red-600">{errors.universityName}</p>
            )}
          </div>

          <div>
            <label htmlFor="cityName" className="block text-sm font-medium text-gray-100">
              YOUR Major EXPERIENCE
            </label>
            <input
              id="cityName"
              name="cityName"
              type="text"
              value={cityName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCityName(e.target.value)}
              required
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.cityName ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-lavender focus:border-lavender sm:text-sm`}
              placeholder="Enter your city name"
            />
            {errors.cityName && (
              <p className="mt-2 text-sm text-red-600">{errors.cityName}</p>
            )}
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-100">
                City Experience
            </label>
            <textarea
                id="experience"
                name="experience"
                rows={4} // This must be a number, not a string
                value={experience}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setExperience(e.target.value)}
                required
                className={`mt-1 block w-full h-48 px-3 py-2 border ${
                errors.experience ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-lavender focus:border-lavender sm:text-sm resize-none`}
                placeholder="Share your experience"
            />
            {errors.experience && (
                <p className="mt-2 text-sm text-red-600">{errors.experience}</p>
            )}
            </div>


          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigoCustom hover:bg-royal-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
