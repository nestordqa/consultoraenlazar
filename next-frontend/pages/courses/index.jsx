import { LearnWithUs } from "@/components/home/LearnWithUs";
import { Layout } from "@/components/Layout";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";
import Link from "next/link";

const Courses = ({ courses }) => {
  console.log(courses, "COURSES");
  return (
    <>
      <Layout
        title={"Cursos & Capacitaciones"}
        content={
          "Cursos y capcitaciones de Consultora Enlazar para empresas e individuos"
        }
      >
        <LearnWithUs courses={courses} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const courses = await getClient()
    .fetch(groq`*[_type == "course"] | order(title asc){
    _id,
    title,
      description,
      price,
    commissions,
      body,
      mainImage,
      slug
  }`);

  return {
    props: {
      courses,
    },
  };
}
export default Courses;
