
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
  );
}
