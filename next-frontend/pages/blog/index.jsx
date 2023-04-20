import { Layout } from "@/components/Layout";
import { Blogs } from "@/components/Blog/Blogs";
import { useSession } from "@supabase/auth-helpers-react";
import { useAuth } from "@/lib/AuthContext";
import { useEffect } from "react";
import SignIn from "@/components/session/SignIn";

const Blog = () => {
  const session = useSession();
  const { setCurrentPath, setPreviousPath } = useAuth();

  useEffect(() => {
    setCurrentPath("/auth");
    setPreviousPath("/blog");
  }, []);

  return (
    <>
      <Layout title={"Blog"} content={"Consultora Enlazar."}>
        {session ? <Blogs /> : <SignIn />}
      </Layout>
    </>
  );
};
export default Blog;
