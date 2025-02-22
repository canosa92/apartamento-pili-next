"use client";
import { Menu } from "@headlessui/react";

const FilterSelect = ({ categories, selectedCategory, onSelect }) => (
  <Menu as="div" className="relative mb-12 w-full max-w-xs mx-auto">
    <Menu.Button className="w-full flex items-center justify-between px-6 py-4 font-sans font-medium text-white/90 bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-accent/40 transition-all duration-300">
      {selectedCategory === "all" ? "Todas las categorías" : selectedCategory}
      <svg className="w-5 h-5 ml-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </Menu.Button>

    <Menu.Items className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
      {categories.map((category) => (
        <Menu.Item key={category}>
          {({ active }) => (
            <button
              onClick={() => onSelect(category)}
              className={`w-full px-6 py-3 text-left font-sans ${
                active || selectedCategory === category
                  ? "bg-accent/10 text-accent"
                  : "text-white/80 hover:bg-primary"
              } transition-colors duration-200`}
            >
              {category === "all" ? "Todas las categorías" : category}
            </button>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Menu>
);

export default FilterSelect;
