import Account from "@/components/account/Account";
import { Layout } from "@/components/Layout";
import { useSession } from '@supabase/auth-helpers-react';


const MyAccount = () => {
    const session = useSession()
  return (
    <>
      <Layout
        title={"Mi cuenta"}
        content={"Mi cuenta"}
      >
        <Account session={session}/>
      </Layout>
    </>
  );
};

export default MyAccount
