import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { getClient } from "@/lib/sanity.server";

const CourseDetail = ({ course }) => {
  console.log(course, "COURSEDETAIL");
  const { title, description, price } = course;

  const shadow = {
    boxShadow: "rgba(0,0,0,0.05) 0 6px 24px 0, rgba(0,0,0,0.08) 0 0 0 1px",
  };
  return (
    <>
      {
        <article
          className="bg-white m-5 rounded-lg p-5 w-full flex flex-col"
          style={shadow}
        >
          {/* post-container */}
          <div className="flex justify-between flex-wrap flex-col">
            <h1>{title}</h1>
            <hr />
            <p className="text-center">{description}</p>
            <hr />
            <p className="text-center">{price}</p>
          </div>
        </article>
      }
    </>
  );
};

const query = groq`*[_type == "course" && slug.current == $slug][0]{
    title,
      mainImage,
      slug,
      price, 
      description,
      publishedAt
}`;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "course" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const course = await getClient().fetch(query, { slug: params.slug });

  return {
    props: { course },
  };
}

export default CourseDetail;
