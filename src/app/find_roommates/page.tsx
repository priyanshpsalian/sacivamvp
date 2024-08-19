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
  container.scrollBy({
    left: -150, // Adjust this value to control the scroll distance
    behavior: "smooth",
  });
}

function scrollRight() {
  const container = document.getElementById("scrollContainer");
  container.scrollBy({
    left: 150, // Adjust this value to control the scroll distance
    behavior: "smooth",
  });
}

export default function RoommateFinder() {
  const users = [
    {
      name: "Anonymous Girl",
      university: "DePaul University",
      country: "India",
      match: "12/12 Prefers Match",
      avatar: "/avatar-girl.png", // replace with your avatar image path
    },
    {
      name: "Abhishikh M",
      language: "Telugu",
      university: "DePaul",
      country: "India",
      graduation: "Graduates June 2023",
      preferences: [
        "Vegetarian",
        "Doesn’t Smoke",
        "Socializes less",
        "Spends Frugally",
        "Doesn’t Drink",
        "Strictly Tidy",
        "Likes Quiet Ambiance",
      ],
      avatar: "/avatar-boy.png", // replace with your avatar image path
    },
  ];
  const [selectedUser, setSelectedUser] = useState(null);
    const openModal = (users) => {
      setSelectedUser(users);
    };

    const closeModal = () => {
      setSelectedUser(null);
    };
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
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Country
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Language
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              University
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Food
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Smoke
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Gender
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Drink
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Expenditure
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Tidiness
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Volume
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
              Socializing
            </button>
            <button className="bg-purple-200 px-3 py-2 rounded text-xs sm:text-sm">
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
          {users.map((user, index) => (
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
          <div className="fixed inset-0 flex items-end justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-t-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 animate-slide-up">
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
                <h3 className="text-lg font-bold">{selectedUser.name}</h3>
              </div>
              {selectedUser.university && (
                <p className="text-sm mb-2">{selectedUser.university}</p>
              )}
              {selectedUser.country && (
                <p className="text-sm mb-2">{selectedUser.country}</p>
              )}
              {selectedUser.match && (
                <p className="text-sm mb-2">{selectedUser.match}</p>
              )}
              {selectedUser.graduation && (
                <p className="text-sm mb-2">{selectedUser.graduation}</p>
              )}
              {selectedUser.preferences && (
                <ul className="text-left mt-3 text-sm space-y-2">
                  {selectedUser.preferences.map((preference, i) => (
                    <li key={i}>{preference}</li>
                  ))}
                </ul>
              )}
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded text-sm w-full">
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
