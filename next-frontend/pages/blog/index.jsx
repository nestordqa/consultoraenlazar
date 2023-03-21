import { Layout } from "@/components/Layout";
import { Blogs } from "@/components/Blog/Blogs";
import { useSession } from "@supabase/auth-helpers-react";
import SignIn from "@/components/session/SignIn";
const Blog = () => {
  const session = useSession();

  return (
    <>
      <Layout title={"Blog"} content={"Consultora Enlazar."}>
        {!session ? <SignIn /> : <Blogs />}
      </Layout>
    </>
  );
};
export default Blog;
