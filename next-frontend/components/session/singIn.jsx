import { Auth } from "@supabase/auth-ui-react";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const SingIn = ({ Component, props }) => {
  const supabase = useSupabaseClient();

  const user = useUser();
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{
        style: {
          button: {
            background: "#34668b",
            border: "1px solid #043959",
            fontFamily: "Noah Text",
            fontSize: "clamp(0.8rem, 0.7256rem + 0.3967vw, 1.1rem)",
            width: "100px",
            alignSelf: "end",
            marginRight: "16px",
            borderRadius: "35px",
          },
          anchor: {
            color: "#323232",
            opacity: 0.9,
            fontFamily: "Noah Text",
            fontSize: "clamp(0.8rem, 0.7256rem + 0.3967vw, 1.1rem)",
          },
          label: {
            color: "#323232",
            fontFamily: "Noah Text",
            fontSize: "1rem",
          },
          input: {
            fontFamily: "Noah Text",
            fontSize: "clamp(0.8rem, 0.7256rem + 0.3967vw, 1.1rem)",
            borderRadius: "35px",
          },
        },
        theme: ThemeSupa,
      }}
      providers={[]}
    />
  );
};

export default SingIn;
