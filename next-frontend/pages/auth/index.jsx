import { Layout } from "@/components/Layout";
import SingIn from "@/components/session/singIn";

const Authentication = () => {
  return (
    <Layout title={"LogIn"} content={"Consultora Enlazar."}>
      <SingIn />
    </Layout>
  );
};

export default Authentication;
