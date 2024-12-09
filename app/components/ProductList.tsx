interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
  }

  const products: Product[] = [
    { id: 1, name: 'Graphic Design', price: '$6.48', image: '/product1.jpg' },
    { id: 2, name: 'Graphic Design', price: '$6.48', image: '/product2.jpg' },
  ];

  const ProductList = () => {
    return (
      <section className="grid grid-cols-2 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="w-full" />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-green-600">{product.price}</p>
          </div>
        ))}
      </section>
    );
  };

  export default ProductList;