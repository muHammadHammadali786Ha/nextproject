import Link from 'next/link';
import React from 'react';

const Tshirt = () => {
  const list = [
    {
      id: 1,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    },
    {
      id: 2,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    },
    {
      id: 3,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    },
    {
      id: 4,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    },
    {
      id: 5,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    },
    {
      id: 6,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    },
    {
      id: 7,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    },
    {
      id: 8,
      img: "/tshirt1.jpg",
      name: "The Catalyzer",
      category: "tShirt"
    }
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              list.map((item, index) => {
                return (
                  <Link key={index} href={`/tshirt/${item.id}`}>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full" >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="w-full h-full block" src={item.img} />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tshirt;
