"use client";

import {
  ChatIcon,
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Image from 'next/image';
import { useEffect, useState } from "react";

interface User {
  age?: number;
  name?: string;
  major?:string,
  language?: string;
  country?: string;
  university?: string;
  avatar?: string;
  startDate?: string;
  endDate?: string;
  preferences?: string[];
  gender?: string;
  about?: string;
  graduation?: string;
  match?: string;
}

const FindRoommatesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch users and set state here...
    setUsers([
      {
        name: "Anonymous Girl",
        university: "DePaul University",
        country: "India",
        major:"Computer Science",
        startDate: "2023",
        endDate: "2025",
        about: "I am a hardcore nerd.",
        graduation: "May 2025",
        match: "10/10 Prefers Match",
        preferences: ["Vegetarian", "Doesn’t Smoke", "Doesn’t Drink"],
        avatar: "/avatar-girl.png",
      },
      {
        name: "Abhishikh M",
        age: 25,
        gender: "Male",
        language: "Telugu",
        major:"Computer Science",
        university: "DePaul University",
        country: "India",
        startDate: "2023",
        endDate: "2025",
        about: "I am a hardcore nerd.",
        graduation: "Graduates June 2023",
        match: "8/10 Prefers Match",
        preferences: [
          "Vegetarian",
          "Doesn’t Smoke",
          "Doesn’t Drink",
          "Socializes Less",
          "Spends Frugally",
          "Strictly Tidy",
          "Likes Quiet Ambiance",
        ],
        avatar: "/avatar-boy.png",
      },
    ]);
  }, []);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) => {
    if (!selectedFilter) return true;

    switch (selectedFilter) {
      case "Country":
        return user.country === "India";
      case "Language":
        return user.language === "Telugu";
      case "University":
        return user.university === "DePaul University";
      case "Food":
        return user.preferences?.includes("Vegetarian");
      case "Smoke":
        return user.preferences?.includes("Doesn’t Smoke");
      case "Gender":
        return user.gender === "Male";
      case "Drink":
        return user.preferences?.includes("Doesn’t Drink");
      case "Expenditure":
        return user.preferences?.includes("Spends Frugally");
      case "Tidiness":
        return user.preferences?.includes("Strictly Tidy");
      case "Volume":
        return user.preferences?.includes("Likes Quiet Ambiance");
      case "Socializing":
        return user.preferences?.includes("Socializes Less");
      case "Age":
        return user.age && user.age >= 25;
      default:
        return true;
    }
  });

  const redirectToChat = (user: User) => {
    alert(`Chat started with ${user.name}`);

    const chatUrl = `https://websocket.io/chat?user=${encodeURIComponent(user.name || 'unknown')}`;

    window.location.href = chatUrl;
  };

  const renderUserDetails = (user: User) => (
    <div
      key={user.name}
      className="bg-purple-100 p-4 sm:p-5 rounded-lg text-center cursor-pointer flex items-center justify-between"
      onClick={() => openModal(user)}
    >
      <div className="flex items-center">
        <Image
          src={user.avatar || '/default-avatar.png'}
          alt={`${user.name || 'User'} avatar`}
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full"
        />
        <div className="ml-4 text-left">
          <h3 className="text-base sm:text-lg font-bold">{user.name}</h3>
          <p className="text-xs sm:text-sm">{user.university}</p>
          <p className="text-xs sm:text-sm">{user.graduation}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg sm:text-xl font-bold">{user.match}</p>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 font-sans">
      <div className="relative my-4 sm:my-6">
        <div className="overflow-x-auto scrollbar-hide">
          <div
            id="scrollContainer"
            className="flex gap-2 whitespace-nowrap px-4 py-2"
          >
            {[
              { label: "Country", emoji: "🌍" },
              { label: "Language", emoji: "🗣️" },
              { label: "University", emoji: "🎓" },
              { label: "Food", emoji: "🍽️" },
              { label: "Smoke", emoji: "🚬" },
              { label: "Gender", emoji: "⚧️" },
              { label: "Drink", emoji: "🍺" },
              { label: "Expenditure", emoji: "💰" },
              { label: "Tidiness", emoji: "✨" },
              { label: "Volume", emoji: "🔊" },
              { label: "Socializing", emoji: "🥳" },
              { label: "Age", emoji: "🎂" },
            ].map((filter) => (
              <button
                key={filter.label}
                className="flex items-center bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                onClick={() => handleFilterChange(filter.label)}
              >
                <span className="mr-2">{filter.emoji}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredUsers.map((user) => renderUserDetails(user))}
      </div>

      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
            {/* <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button> */}
            <div className="bg-purple-600 shadow-lg text-white rounded-xl p-8 mb-4 relative">
              <div className="absolute inset-0 bg-black bg-opacity-10 blur-lg rounded-xl"></div>
              <div className="relative z-10 flex items-center space-x-6 mb-4">
                <Image
                  src={selectedUser.avatar || "/default-avatar.png"}
                  alt={selectedUser.name || "User"}
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white"
                />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">{selectedUser.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedUser.age && (
                      <p className="text-base">
                        {selectedUser.age}{" "}
                        <span className="text-gray-300">|</span>
                      </p>
                    )}
                    {selectedUser.language && (
                      <p className="text-base">
                        {selectedUser.language}{" "}
                        <span className="text-gray-300">|</span>
                      </p>
                    )}
                    <p className="text-base">
                      {selectedUser.country}{" "}
                      <span className="text-gray-300">|</span>
                    </p>
                    <p className="text-base">{selectedUser.gender}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg font-semibold mt-4">Currently Pursuing:</p>
            <p className="text-xl font-light">
              Masters Degree in {selectedUser.major} at{" "}
              {selectedUser.university}
            </p>
            <p className="text-sm mt-2">
              from <span className="font-bold">{selectedUser.startDate}</span>{" "}
              till <span className="font-bold">{selectedUser.endDate}</span>
            </p>
            <div className="mt-4">
              <p className="text-lg font-semibold">Preferences:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedUser.preferences?.map((preference, index) => {
                  // Mapping preferences to emojis
                  const preferenceWithEmoji: Record<string, string> = {
                    Vegetarian: "☘️ Vegetarian",
                    Vegan: "🥑 Vegan",
                    Eggitarian: "🥚 Eggitarian",
                    "Eats meat": "🍖 Eats meat",
                    "Doesn't drink": "💧 Doesn't Drink",
                    "Drinks alcohol": "🍺 Drinks alcohol",
                    "Doesn't Smoke": "🚭 Doesn't Smoke",
                    Smokes: "🚬 Smokes",
                    "Quiet ambiance": "🎧 Quiet ambiance",
                    Music: "🔊 Music",
                    Socializes: "🥳 Socializes",
                    Solitude: "🧘 Solitude",
                    "Spends frugally": "💲 Spends frugally",
                    "Spends liberally": "💵 Spends liberally",
                    "Strictly tidy": "✨ Strictly tidy",
                    Flexible: "🧺 Flexible",
                  };

                  // Use the emoji-prefixed string if available
                  const displayPreference =
                    preferenceWithEmoji[preference] || preference;

                  return (
                    <span
                      key={index}
                      className="bg-purple-200 px-3 py-3 rounded text-lg sm:text-sm"
                    >
                      {displayPreference}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => redirectToChat(selectedUser)}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-md flex items-center gap-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <ChatIcon className="h-5 w-5" /> Send Request
              </button>
              <button
                onClick={closeModal}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-md flex items-center gap-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span role="img" aria-label="close">
                  ❌
                </span>{" "}
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-purple-200 p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <HomeIcon className="h-6 w-6 text-purple-600" />
            <SearchIcon className="h-6 w-6 text-purple-600" />
            <ChatIcon className="h-6 w-6 text-purple-600" />
            <ShoppingCartIcon className="h-6 w-6 text-purple-600" />
          </div>
          <ViewGridIcon className="h-6 w-6 text-purple-600" />
        </div>
      </div>
    </div>
  );
};

export default FindRoommatesPage;

