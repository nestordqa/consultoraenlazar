import { Layout } from "@/components/Layout";
import { Blogs } from "@/components/Blog/Blogs";
import { useSession } from "@supabase/auth-helpers-react";
import SingIn from "@/components/session/singIn";
const Blog = () => {
  const session = useSession();

  return (
    <>
      <Layout title={"Blog"} content={"Consultora Enlazar."}>
        {!session ? <SingIn /> : <Blogs />}
      </Layout>
    </>
  );
};
export default Blog;
