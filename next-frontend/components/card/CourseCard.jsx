import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const { title, description, mainImage, price, slug } = course;

  const hoverEffect = {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    ":hover": {
      width: "150px",
      height: "150px",
      left: "-55px",
      top: "calc(50% - 55px)",
      transition: "05s ease-in-out",
    },
  };

  const handleDetails = (e, course) => {
    e.preventDefault();
    /*return modal de detalle */
  };

  return (
    <>
      {/* Cards a partir de 1024px */}
      <div className=" hidden lg:flex flex-row justify-center items-center h-64 w-[45%] transition-all bg-white  mx-2 my-2 flex-wrap relative rounded-2xl ">
        {/* card */}
        <div
          style={hoverEffect[":hover"]}
          className="bg-blue flex justify-center items-center absolute top-0 left-0 w-full h-full z-[1] overflow-hidden transition-all rounded-2xl"
        >
          {/* imgBx */}
          <img
            className="max-w-[150px]"
            alt={title + " image"}
            src={urlFor(mainImage)}
          />
        </div>
        <hr />
        {/* content */}

        <div className="flex flex-col flex-wrap justify-evenly items-center ">
          <h2 className="pt-4 pb-4 text-lg">
            <strong>{title}</strong>
          </h2>
          <p className="text-center text-ellipsis pb-4 px-6">{description}</p>
            <button
              className="bg-yellow rounded-2xl py-1 px-8 font-bold uppercase mb-5"
              onClick={(e) => handleDetails(e, course)}
            >
              Ver detalles
            </button>
        </div>
      </div>
      {/* Cards responsive */}
      <div className=" lg:hidden flex flex-col justify-center items-center ease-in-out bg-white max-w-xs relative rounded-xl hover:shadow-2xl hover:outline-offset-8">
        {/* card */}
        <div className="bg-blue flex justify-center items-center w-full rounded-t-xl rounded-b-none">
          {/* imgBx */}
          <img
            className="max-w-[150px]"
            alt={title + " image"}
            src={urlFor(mainImage)}
          />
        </div>
        <hr />
        <div className="flex flex-col flex-wrap justify-evenly items-center ">
          {/* content */}
          <h2 className="pt-4 pb-4 text-lg">
            <strong>{title}</strong>
          </h2>
          <p className="text-center text-ellipsis pb-4 px-6">{description}</p>
          <button
            className="bg-yellow rounded-2xl py-1 px-8 font-bold uppercase mb-5"
            onClick={(e) => handleDetails(e, course)}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
