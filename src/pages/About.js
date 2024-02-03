import banner from "../assets/Logo.jpg";

function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7">Get to know</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Us
              </p>
              <p className="mt-6 text-lg leading-8">
              Welcome to Code Base, your startup ally in the coding realm! Our compact team of 12 enthusiasts is here to simplify coding, programming, and web development for beginners. Despite being a startup, we prioritize accessible and engaging courses, ensuring a supportive learning environment. Dive into our hands-on projects, designed to boost your confidence and skills. As you conquer the coding landscape, our certificates will celebrate your success. Join Code Base, where startup spirit meets coding passion – your journey to coding proficiency starts here!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
               
              </p>
            </div>
          </div>
          <div className="grid items-center justify-center">
            <img
              src={banner}
              alt="Product screenshot"
              className="rounded-xl h-96 w-72 drop-shadow-2xl ring-1 ring-gray-400/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
