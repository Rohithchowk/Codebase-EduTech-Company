import React from "react";
import GreekSalad from "../assets/htmlcssjs.png";
import Bruchetta from "../assets/MMM.jpg";
import LemonCake from "../assets/MLL.jpg";
import Java from "../assets/javaa.png";
import python from "../assets/pythonn.png";
import ReactNative from "../assets/Reactnative.png"


const dishes = [
  {
    id: 1,
    src: GreekSalad,
    title: "HTML CSS JS",
    description:
      "HTML, CSS, and JavaScript collaborate to shape the digital landscape. HTML structures, CSS styles, and JavaScript adds interactivity, forming the backbone of dynamic and visually engaging web experiences.",
    price: "$12.99",
  },
  {
    id: 2,
    src: Bruchetta,
    title: "MERN STACK",
    description:
      "MERN, with MongoDB, Express.js, React, and Node.js, streamlines web development. This stack seamlessly integrates databases, server-side operations, and user interfaces, enabling the creation of scalable and responsive applications.",
    price: "$5.99",
  },
  {
    id: 3,
    src: LemonCake,
    title: "MACHINE LEARNING",
    description:
      "Machine Learning, a transformative force, enables systems to learn from data, driving innovations across diverse fields and fostering automated insights.",
    price: "$5.00",
  },
  {
    id: 3,
    src: ReactNative,
    title: "React Native",
    description:
      "React Native is a powerful framework that enables developers to build mobile applications for iOS and Android platforms simultaneously, leveraging a single codebase for efficient and streamlined development.",
    price: "$5.00",
  },
  {
    id: 4,
    src: Java,
    title: "JAVA",
    description:
      "Java is a versatile, object-oriented programming language known for its platform independence, making it a go-to choice for building robust and scalable applications.",
    price: "$5.00",
  },
  {
    id: 5,
    src: python,
    title: "PYTHON",
    description:
      "Python, renowned for its simplicity and readability, is a high-level programming language widely favored for its versatility in web development, data science, and automation.",
    price: "$5.00",
  },
];




const Menu =()=>{

  return(
<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-[#495e57] pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {dishes.map((item) => (
              <div
                key={item.id}
                className="max-w-sm rounded-md overflow-hidden shadow-xl"
              >
                <img
                  className="w-full"
                  src={item.src}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="">{item.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p className="py-1"></p>
                </div>
              </div>
            ))}
          </div>

  )
            }


export default Menu;







// const drinks = [
//   {
//     name: "Red Sangria",
//     price: "$25",
//   },
//   {
//     name: "Ouzo on the rocks",
//     price: "$11",
//   },
//   {
//     name: "Arak with mezze",
//     price: "$9",
//   },
//   {
//     name: "Limoncello Spritz",
//     price: "$10",
//   },
//   {
//     name: "Turkish Ayran",
//     price: "$5",
//   },
//   {
//     name: "Mineral Water",
//     price: "$3",
//   },
// ];

// const appitizer = [
//   {
//     name: "Greek Salad",
//     price: "$13",
//   },
//   {
//     name: "Bruchetta",
//     price: "$6",
//   },
//   {
//     name: "Spanakopita",
//     price: "$19",
//   },
//   {
//     name: "Saganaki",
//     price: "$10",
//   },
// ];

// const dessert = [
//   {
//     name: "Lemon Cake",
//     price: "$5",
//   },
//   {
//     name: "Baklava",
//     price: "$11",
//   },
//   {
//     name: "Loukoumades",
//     price: "$5",
//   },
//   {
//     name: "Crema Catalana",
//     price: "$9",
//   },
// ];

// export default function Example() {
//   return (
//     <div className="py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
//             Our Courses !!!
//           </h2>
//           <p className="mt-2 text-lg leading-8">.</p>
//         </div>
//         <div className="mx-auto mt-16 sm:mt-20 rounded-md bg-[#495e57] text-white shadow-xl p-6">
//           <div className="mx-auto mt-16 sm:mt-20">
//             <h3 className="text-3xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
//               Drinks
//             </h3>
//           </div>
//           <div className="mt-6 sm:text-center">
//             <dl>
//               {drinks.map((item) => (
//                 <div className="px-4 py-6 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-6 sm:gap-4 sm:px-0">
//                   <dt>{item.name}</dt>
//                   <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//           <div className="mx-auto mt-16 sm:mt-20">
//             <h3 className="text-3xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
//               Appitizer
//             </h3>
//           </div>
//           <div className="mt-6 sm:text-center">
//             <dl>
//               {appitizer.map((item) => (
//                 <div className="px-4 py-6 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-6 sm:gap-4 sm:px-0">
//                   <dt>{item.name}</dt>
//                   <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//           <div className="mx-auto mt-16 sm:mt-20">
//             <h3 className="text-3xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
//               Dessert
//             </h3>
//           </div>
//           <div className="mt-6 sm:text-center">
//             <dl>
//               {dessert.map((item) => (
//                 <div className="px-4 py-6 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-6 sm:gap-4 sm:px-0">
//                   <dt>{item.name}</dt>
//                   <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
