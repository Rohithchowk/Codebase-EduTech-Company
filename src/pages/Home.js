import banner from "../assets/Banner.jpeg";
import GreekSalad from "../assets/htmlcssjs.png";
import Bruchetta from "../assets/MMM.jpg";
import LemonCake from "../assets/MLL.jpg";
import Java from "../assets/javaa.png";
import python from "../assets/pythonn.png"
import { NavLink } from "react-router-dom";

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

function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src={banner}
            alt=""
            className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-[#f4ce14] sm:text-6xl">
              Code base
            </h2>
            <p className="text-white text-3xl sm:text-4xl">Ignite Your Digital Journey: Mastering Code, Crafting Futures .</p>
            <p className="text-white mt-6 text-xl leading-8">
            We teach programming to the coding aspirants.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <NavLink
              to="/reservations"
              className="rounded-md duration-200 delay-100 bg-[#f4ce14] text-[#495e57] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-black hover:text-white"
            >
              Explore the courses !!!
            </NavLink>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex justify-between lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Courses !!!
            </h2>
            <NavLink
              to="/menu"
              className="rounded-md duration-200 delay-100 hidden md:flex bg-[#f4ce14] text-[#495e57] text-lg px-10 py-4 font-semibold shadow-xl hover:bg-black hover:text-white"
            >
              Online Menu
            </NavLink>
          </div>
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
        </div>
      </div>
    </>
  );
}

export default Home;
