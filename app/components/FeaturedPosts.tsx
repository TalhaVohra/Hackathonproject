import React from "react";

const posts = [
  {
    id: 1,
    image: "/images/f1.jpg", // Replace with your image path
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    category: "Google",
    tags: ["Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "/images/f2.jpg", // Replace with your image path
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    category: "Google",
    tags: ["Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "/images/f3.jpg", // Replace with your image path
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    category: "Google",
    tags: ["Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
];

const FeaturedPosts = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-16">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold uppercase">Practice Advice</p>
        <h2 className="text-3xl font-bold">Featured Posts</h2>
        <p className="text-gray-500 mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {post.tags[1]}
              </div>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-sm font-medium uppercase">
                {post.category}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{post.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 font-medium mt-4 inline-block"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
