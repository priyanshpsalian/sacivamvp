// import { useEffect, useState } from 'react';
// import { FaBed, FaCog, FaComments, FaHome, FaRobot, FaStore, FaTachometerAlt, FaUsers } from 'react-icons/fa';

// const FindRoommatesPage = () => {
//   // State to hold profiles data
//   const [profiles, setProfiles] = useState([]);

//   // Simulate fetching data dynamically (e.g., from an API)
//   useEffect(() => {
//     // Example data fetching function
//     const fetchProfiles = async () => {
//       // This is where you'd fetch data from an API or other source
//       const fetchedProfiles = [
//         { id: 1, name: 'John Doe', age: 25, country: 'USA', university: 'Harvard' },
//         { id: 2, name: 'Jane Smith', age: 22, country: 'UK', university: 'Oxford' },
//         { id: 3, name: 'Raj Patel', age: 23, country: 'India', university: 'IIT Delhi' },
//         // Add more profiles here or fetch dynamically from an API
//       ];
//       setProfiles(fetchedProfiles);
//     };

//     fetchProfiles();
//   }, []);

//   return (
//     <div className="bg-[#461c83] p-4 min-h-screen flex items-center justify-center">
//       <div className="container mx-auto max-w-md">
        
//         {/* Navigation Bar */}
//         <nav className="flex flex-wrap justify-center text-white mb-6">
//           <ul className="flex flex-wrap justify-center space-x-4 text-sm">
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaTachometerAlt className="mr-1" /> Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaBed className="mr-1" /> Find Rooms
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaUsers className="mr-1" /> Find Mates
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaHome className="mr-1" /> My House
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaStore className="mr-1" /> Marketplace
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaRobot className="mr-1" /> AI Assistant
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaComments className="mr-1" /> Chats
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline whitespace-nowrap flex items-center">
//                 <FaCog className="mr-1" /> Settings
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Filters Section */}
//         <div className="text-center">
//           <p className="text-white mb-4 text-sm">Select the preferences that should strictly match with your profile</p>
//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 justify-center">
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Country</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Language</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">University</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Food</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Smoke</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Gender</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Drink</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Expenditure</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Tidiness</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Volume</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Socializing</button>
//             <button className="bg-[#5e2da4] text-white py-2 px-4 rounded-lg hover:bg-[#4a2582] text-xs">Age</button>
//           </div>
//         </div>

//         {/* Profile Cards Section */}
//         <div className="mt-6 max-h-[50vh] overflow-y-auto">
//           <div className="grid grid-cols-1 gap-4">
//             {profiles.length > 0 ? (
//               profiles.map(profile => (
//                 <div key={profile.id} className="bg-[#5e2da4] p-4 rounded-lg text-white">
//                   <h3 className="text-lg font-semibold">{profile.name}</h3>
//                   <p className="text-sm">Age: {profile.age}</p>
//                   <p className="text-sm">Country: {profile.country}</p>
//                   <p className="text-sm">University: {profile.university}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-white text-center">No profiles available</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FindRoommatesPage;
<h1>ignore find room mates page this was created by omkar </h1>