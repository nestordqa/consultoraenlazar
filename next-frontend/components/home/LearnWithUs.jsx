import Link from "next/link";
import CourseCard from "../Card/CourseCard";

export const LearnWithUs = ({ courses }) => {
  console.log(courses, "LEARN");
  return (
    <div className="bg-blue w-auto h-auto flex flex-col justify-center items-center ">
      {/* h-[calc(100vh-112px)] */}

      <div className="flex lg:flex-row items-center flex-col ">
        {courses &&
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
      </div>
      <div className="h-32">BENEFICIOS</div>
    </div>
  );
};
