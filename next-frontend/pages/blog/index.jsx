import { Layout } from "@/components/Layout";
import { Blogs } from "@/components/Blog/Blogs";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
const Blog = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const user = useUser();
  console.log(supabase);
  return (
    <>
      <Layout title={"Blog"} content={"Consultora Enlazar."}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        ) : (
          <Blogs />
        )}
      </Layout>
    </>
  );
};
export default Blog;
