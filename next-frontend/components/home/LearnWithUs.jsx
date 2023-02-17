import Link from "next/link";
import CourseCard from "../card/CourseCard";

export const LearnWithUs = ({ courses }) => {
  console.log(courses, "LEARN");
  return (
    <div className="bg-grey w-full h-auto lg:min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-auto h-auto mb-8">
        <h3 className="pt-16 px-8 text-2xl font-medium text-center text-ellipsis">
          Todos nuestros cursos a un click de distancia:
        </h3>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center h-auto gap-10 p-8 max-w-5xl lg:relative lg:flex-row lg:flex-wrap lg:justify-between lg:items-start lg:p-4 ">
        {courses &&
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
      </div>
      <div className="h-32">BENEFICIOS</div>
    </div>
  );
};
