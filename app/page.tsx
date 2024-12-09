import Header from './components/header';
import EditorsPick from './components/EditorsPicks';
import Hero from './components/hero';
import ProductList from './components/ProductList';
import Footer from './components/footer';
import FeaturedPosts from './components/FeaturedPosts';
import ProductHighlight from './components/ProductHighlight';

const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Explore the latest trends and technologies shaping the web.",
    image: "/images/post1.jpg",
    link: "/posts/future-web-development",
  },
  {
    id: 2,
    title: "10 Tips for Writing Clean Code",
    description: "Learn the best practices for writing maintainable code.",
    image: "/images/post2.jpg",
    link: "/posts/clean-code-tips",
  },
  {
    id: 3,
    title: "Why TypeScript is a Game-Changer",
    description: "Understand the benefits of using TypeScript in your projects.",
    image: "/images/post3.jpg",
    link: "/posts/typescript-benefits",
  },
];

const Home = () => {

  const largeImage = {
    src: "/images/1.jpg", // Path to your image in the public folder
    alt: "Large Image",
    buttonText: "View Details",
  };

  const narrowImage = {
    src: "/images/2.jpg",
    alt: "Narrow Image",
    buttonText: "View More",
  };

  const stackedImages = [
    {
      src: "/images/3.jpg",
      alt: "Stacked Image 1",
      buttonText: "Learn More",
    },
    {
      src: "/images/4.jpg",
      alt: "Stacked Image 2",
      buttonText: "Explore Now",
    },
  ];
  return (
    <div className="font-sans bg-gray-100">
      {/* Header Component */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Editors Pick Section */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Editors Pick</h2>
        <EditorsPick
        largeImage={largeImage}
        narrowImage={narrowImage}
        stackedImages={stackedImages}
      />
      </section>

      <section className='py-12 px-4 md:px-16'>
        <h2 className='text-3x1 font-bold text-center mb-8'> Featured Posts </h2>
        <FeaturedPosts  />
      </section>
      
      <ProductHighlight />

      {/* Product List Section */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <ProductList />
      </section>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
