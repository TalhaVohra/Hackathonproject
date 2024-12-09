import React from "react";

const ProductHighlight = () => {
  return (
    <section className="bg-green-500 text-white py-16 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <p className="text-sm uppercase font-bold">Summer 2020</p>
          <h1 className="text-4xl font-bold mt-4">Vita Classic Product</h1>
          <p className="text-gray-200 mt-4">
            We know how large objects will act. We know how large objects will
            act, but things on a small scale.
          </p>
          <div className="mt-6">
            <span className="text-2xl font-bold">$16.48</span>
            <button className="ml-4 bg-white text-green-500 font-bold py-2 px-6 rounded hover:bg-gray-100 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src="/images/product-man.png" // Replace with your image path
            alt="Vita Classic Product"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16 bg-white"></div>

      {/* Sub-section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-12 bg-white">
        {/* Left Sub-section */}
        <div className="relative bg-white">
          <img
            src="/images/producthighlist.png" // Replace with your image path
            alt="Scarf Highlight"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Sub-section */}
        <div className="text-center lg:text-left mt-8 lg:mt-0 lg:ml-16 bg-white">
          <p className="text-sm uppercase font-bold text-gray-600">
            Summer 2020
          </p>
          <h2 className="text-3xl font-bold mt-4 text-gray-800">
            Part of the Neural Universe
          </h2>
          <p className="text-gray-500 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="mt-6">
            <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition">
              Buy Now
            </button>
            <button className="ml-4 bg-gray-200 text-green-500 font-bold py-2 px-6 rounded hover:bg-gray-300 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
