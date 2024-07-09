// import React from 'react'

const SingleProducts = ({ params }) => {
  console.log(parseInt(params.tshirts));
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
      name: "The Catar",
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

  const filterData = list.filter((i) => { return i.id === parseInt(params.tshirts) });
  console.log(filterData);
  return (
    <div>
      {
        filterData.map((item) => {
          return(
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id} >
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="w-full h-full block" src={item.img} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default SingleProducts