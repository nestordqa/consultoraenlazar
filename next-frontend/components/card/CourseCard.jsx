import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";
import styles from "./CourseCard.module.css";
import Details from "./CourseDetail";
import ScrollDialog, { Coursedetail } from "./CourseDetail";

const CourseCard = ({ course }) => {
  const { title, description, mainImage } = course;
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <Details
          handleClickOpen={handleClickOpen}
          open={open}
          course={course}
          scroll={scroll}
          handleClose={handleClose}
        />
      ) : null}
      {/* Cards a partir de 1024px */}
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <Image
            alt={title + " image"}
            src={urlFor(mainImage).url()}
            width={150}
            height={150}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className="pt-4 pb-4 px-2 text-lg text-center text-ellipsis">
              <strong>{title}</strong>
            </h2>
            <p className="text-center text-clip px-3">{description}</p>
            <button
              className="bg-yellow rounded-2xl m-2 py-1 px-8 font-bold uppercase self-center"
              onClick={handleClickOpen}
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
      {/* Cards responsive */}
      <div className="lg:hidden flex flex-col justify-evenly items-start ease-in-out bg-white max-w-xs relative rounded-2xl shadow-2xl outline-offset-8">
        {/* card */}
        <div className="bg-blue flex justify-center items-center w-full rounded-t-xl rounded-b-none">
          {/* imgBx */}
          {
            <Image
              className="max-w-[150px]"
              alt={title + " image"}
              src={urlFor(mainImage).url()}
              width={150}
              height={150}
            />
          }
        </div>
        <hr />
        <div className="flex flex-col flex-wrap justify-evenly items-center ">
          {/* content */}
          <h2 className="pt-4 pb-4 px-2 text-lg">
            <strong>{title}</strong>
          </h2>
          <p className="text-center text-ellipsis pt-2 pb-4 px-2">
            {description}
          </p>
          <button
            className="bg-yellow rounded-2xl py-1 px-8 font-bold uppercase mb-2"
            onClick={handleClickOpen}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
