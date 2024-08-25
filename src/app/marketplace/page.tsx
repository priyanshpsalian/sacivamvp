"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);

  // Define the categories as a Record<string, string[]>
  const categories: Record<string, string[]> = {
    Apparel: ['Accessories', 'Bags', 'Clothing', 'Jewelry', 'Makeup', 'Footwear'],
    Electronics: ['Accessories', 'Drives & Storage', 'Phones', 'Tablets', 'Laptops', 'Earphones', 'Monitors', 'Speakers', 'Cameras', 'TVs', 'Misc'],
    FoodAndGrocery: [],
    HomeGoods: ['Tools', 'Kitchen Utensils', 'Toiletries'],
    Furniture: ['Tables', 'Chairs', 'Closets', 'Couches', 'Carpets & Rugs', 'Lamps', 'Beds', 'Mattresses', 'Desks', 'Dressers', 'Storage & Organizers', 'Kitchen Furniture Sets', 'Living Room Furniture Sets', 'Misc'],
    Creative: ['Art Equipment', 'Musical Instruments', 'Misc'],
    FitnessEquipment: [],
    OfficeSupplies: [],
    PetSupplies: [],
    SportingGoods: [],
    ToysAndGames: [],
    Vehicles: []
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory('');  // Reset subcategory on category change
  };

  const handleSubcategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubcategory(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([0, Number(event.target.value)]);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 py-10">
      {/* Filters */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Filter */}
        {selectedCategory && categories[selectedCategory].length > 0 && (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Subcategory</label>
            <select
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Subcategory</option>
              {categories[selectedCategory].map((subcategory: string) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price Range Filter */}
        <div className="col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-700">Price Range (up to ${priceRange[1]})</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="block w-full"
          />
        </div>
      </div>

      {/* Marketplace Grid */}
      <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-md border p-4">
            <Image
              src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Product Image"
              className="aspect-[16/9] w-full rounded-md"
              width={800}
              height={450}
              layout="responsive"
              objectFit="cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">Nike Airmax v2</h1>
              <p className="mt-1 text-sm font-semibold">$199</p>
              <p className="mt-2 text-xs text-gray-500">Pickup location: 123 Street, City</p>
              <a href="https://amazon.com" target="_blank" className="mt-2 inline-block text-xs text-blue-500 hover:underline">
                View original product
              </a>
              <p className="mt-2 text-xs text-gray-600">Negotiable: Yes</p>
              <p className="mt-2 text-xs text-gray-600">How many years old: 2 years</p>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-blue-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Chat with Seller
              </button>
              <div className="mt-4">
                <h2 className="text-sm font-semibold">Other items sold by this user:</h2>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>Adidas Sneakers - $150</li>
                  <li>Puma Tracksuit - $120</li>
                  <li>Apple Watch Series 5 - $250</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
