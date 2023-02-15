import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const { title, description, mainImage, price, slug } = course;
  console.log(urlFor(mainImage));
  return (
    <div className="w-80 relative h-auto flex flex-col ">
      {/* card */}
      <div className="relative h-auto flex flex-col items-center">
        {/* imgBx */}
        <img
          className="max-w-[100px]"
          alt={title + " image"}
          src={urlFor(mainImage)}
        />
      </div>
      <hr />
      <div className="flex relative w-full items-center justify-center">
        {/* content */}
        <div className="flex flex-col items-center justify-center">
          <h2>
            <strong>{title}</strong>
          </h2>
          <Link href={`detail/${slug.current}`}>
            <button className="bg-yellow rounded-2xl py-1 px-8 font-bold uppercase">
              Ver detalles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
