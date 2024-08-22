"use client";
import React, { useState } from "react";
import {
  HomeIcon,
  SearchIcon,
  ChatIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";


function scrollLeft() {
  const container = document.getElementById("scrollContainer");
  container?.scrollBy({
    left: -150, // Adjust this value to control the scroll distance
    behavior: "smooth",
  });
}

function scrollRight() {
  const container = document.getElementById("scrollContainer");
  container?.scrollBy({
    left: 150, // Adjust this value to control the scroll distance
    behavior: "smooth",
  });
}

export default function RoommateFinder() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const users = [
    {
      name: "Anonymous Girl",
      age:12,
      university: "DePaul University",
      country: "India",
      startDate: "2023",
      endDate: "2025",
      about: "I am a hard core nerd.",
      graduation: "May 2025", // Added graduation date
      match: "10/10 Prefers Match", // Updated to match the image
      preferences: ["Vegetarian", "Doesn’t Smoke", "Doesn’t Drink"],
      avatar: "/avatar-girl.png", // replace with your avatar image path
    },
    {
      name: "Abhishikh M",
      age: 25, // Added age field
      gender: "Male", // Added gender field
      language: "Telugu",
      university: "DePaul University",
      country: "India",
      startDate: "2023",
      endDate: "2025",
      about: "I am a hard core nerd.",
      graduation: "Graduates June 2023",
      preferences: [
        "Vegetarian",
        "Doesn’t Smoke",
        "Doesn’t Drink",
        "Socializes Less",
        "Spends Frugally",
        "Strictly Tidy",
        "Likes Quiet Ambiance",
      ],
      avatar: "/avatar-boy.png", // replace with your avatar image path
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
    const openModal = (users:any) => {
      setSelectedUser(users);
    };

    const closeModal = () => {
      setSelectedUser(null);
    };
    const filteredUsers = users.filter((user) => {
      if (!selectedFilter) return true;

      switch (selectedFilter) {
        case "Country":
          return user.country === "India"; // Replace with desired country
        case "Language":
          return user.language === "Telugu"; // Replace with desired language
        case "University":
          return user.university === "DePaul"; // Replace with desired university
        case "Food":
          return user.preferences.includes("Vegetarian");
        case "Smoke":
          return user.preferences.includes("Doesn't Smoke");
        case "Gender":
          return user.gender === "Male"; // Replace with desired gender
        case "Drink":
          return user.preferences.includes("Doesn't Drink");
        case "Expenditure":
          return user.preferences.includes("Spends Frugally");
        case "Tidiness":
          return user.preferences.includes("Strictly Tidy");
        case "Volume":
          return user.preferences.includes("Likes Quiet Ambiance");
        case "Socializing":
          return user.preferences.includes("Socializes less");
        case "Age":
          return user.age >= 25; // Replace with desired age filter
        default:
          return true;
      }
    });

  return (
    <div className="p-4 sm:p-6 font-sans">
      <div className="relative my-4 sm:my-6">
        {/* <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => scrollLeft()}
        >
          &lt;
        </button> */}

        <div className="overflow-x-auto scrollbar-hide">
          <div
            id="scrollContainer"
            className="flex gap-2 whitespace-nowrap px-10"
          >
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Country")}
            >
              Country
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Language")}
            >
              Language
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("University")}
            >
              University
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Food")}
            >
              Food
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Smoke")}
            >
              Smoke
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Gender")}
            >
              Gender
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Drink")}
            >
              Drink
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Expenditure")}
            >
              Expenditure
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Tidiness")}
            >
              Tidiness
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Volume")}
            >
              Volume
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Socializing")}
            >
              Socializing
            </button>
            <button
              className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm"
              onClick={() => setSelectedFilter("Age")}
            >
              Age
            </button>
          </div>
        </div>

        {/* <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => scrollRight()}
        >
          &gt;
        </button> */}
      </div>

      <div>
        {/* User Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="bg-purple-100 p-4 sm:p-5 rounded-lg text-center cursor-pointer flex items-center justify-between"
              onClick={() => openModal(user)}
            >
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 sm:w-16 sm:h-16 rounded-full"
                />
                <div className="ml-4 text-left">
                  <h3 className="text-base sm:text-lg font-bold">
                    {user.name}
                  </h3>
                  <p className="text-xs sm:text-sm">{user.university}</p>
                  <p className="text-xs sm:text-sm">{user.major}</p>
                  <p className="text-xs sm:text-sm">
                    Class of {user.graduation}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg sm:text-xl font-bold">{user.rating}/10</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
              <button
                className="absolute top-2 right-2 text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{selectedUser.name}</h3>
                  <div className="flex space-x-2 mt-2">
                    <p className="text-base">{selectedUser.age} |</p>
                    <p className="text-base">{selectedUser.language} |</p>
                    <p className="text-base">{selectedUser.country}</p>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold mt-4">Currently Pursuing:</p>
              <p className="text-xl font-light">
                Master's Degree in {selectedUser.major} <br />
                at {selectedUser.university}
              </p>
              <p className="text-sm mt-2">
                from <span className="font-bold">{selectedUser.startDate}</span>{" "}
                till <span className="font-bold">{selectedUser.endDate}</span>
              </p>

              <div className="mt-4">
                <p className="text-lg font-semibold">Preferences:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedUser.preferences.includes("Vegetarian") && (
                    <div className="px-3 py-1 bg-gray-200 rounded-full">
                      Vegetarian
                    </div>
                  )}
                  {selectedUser.preferences.includes("Doesn't Drink") && (
                    <div className="px-3 py-1 bg-gray-200 rounded-full">
                      Doesn't Drink
                    </div>
                  )}
                  {selectedUser.preferences.includes("Doesn't Smoke") && (
                    <div className="px-3 py-1 bg-gray-200 rounded-full">
                      Doesn't Smoke
                    </div>
                  )}
                  {selectedUser.preferences.includes("Socializes Less") && (
                    <div className="px-3 py-1 bg-gray-200 rounded-full">
                      Socializes Less
                    </div>
                  )}
                  {selectedUser.preferences.includes("Spends Frugally") && (
                    <div className="px-3 py-1 bg-gray-200 rounded-full">
                      Spends Frugally
                    </div>
                  )}
                  {selectedUser.preferences.includes("Strictly Tidy") && (
                    <div className="px-3 py-1 bg-gray-200 rounded-full">
                      Strictly Tidy
                    </div>
                  )}
                  {selectedUser.preferences.includes(
                    "Likes Quiet Ambiance"
                  ) && (
                    <div className="px-3 py-1 bg-gray-200 rounded-full">
                      Likes Quiet Ambiance
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-lg font-semibold">
                  A little more about myself!
                </p>
                <p className="text-sm mt-2">{selectedUser.about}</p>
              </div>

              <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded text-sm w-full">
                Send Request
              </button>
            </div>
          </div>
        )}
      </div>

      <header className="bg-purple-800 text-white py-4 fixed bottom-0 inset-x-0">
        <nav>
          <ul className="flex justify-around items-center text-sm sm:text-base">
            <li className="cursor-pointer flex flex-col items-center">
              <ViewGridIcon className="w-8 h-8" />
              <span>Dashboard</span>
            </li>
            <li className="cursor-pointer flex flex-col items-center">
              <SearchIcon className="w-8 h-8" />
              <span>Find</span>
            </li>
            <li className="cursor-pointer flex flex-col items-center">
              <HomeIcon className="w-8 h-8" />
              <span>My House</span>
            </li>
            <li className="cursor-pointer flex flex-col items-center">
              <ChatIcon className="w-8 h-8" />
              <span>Chats</span>
            </li>
            <li className="cursor-pointer flex flex-col items-center">
              <ShoppingCartIcon className="w-8 h-8" />
              <span>Marketplace</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
