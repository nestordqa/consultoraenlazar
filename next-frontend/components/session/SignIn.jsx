import { Auth } from "@supabase/auth-ui-react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const SignIn = ({ Component, props }) => {
  const supabase = useSupabaseClient();

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        background: "rgb(255,255,255)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(187,202,207,1) 66%)",
      }}
    >
      <div
        className=" border border-blue py-2 px-6 outline-offset-8 rounded-lg shadow-xl bg-white m-4"
        style={{ width: "clamp(12.5rem, 7.8512rem + 24.7934vw, 31.25rem)" }}
      >
        <Auth
          supabaseClient={supabase}
          localization={{
            variables: {
              sign_up: {
                email_label: "Ingrese su email",
                password_label: "Ingrese su contraseña",
                email_input_placeholder: "Ej. nombre@gmail.com",
                password_input_placeholder: "Contraseña",
                button_label: "Registrarse",
                loading_button_label: "Registrando...",
                social_provider_text: "Registrarse con {{provider}}",
                link_text: "No tienes una cuenta? Regístrate",
                confirmation_text:
                  "Revise su correo electrónico para encontrar el enlace de confirmación.",
              },
              sign_in: {
                email_label: "Ingrese su email",
                password_label: "Ingrese su contaseña",
                email_input_placeholder: "Ej. nombre@gmail.com",
                password_input_placeholder: "Contraseña",
                button_label: "Iniciar sesión",
                loading_button_label: "Iniciando...",
                social_provider_text: "Inicia sesión con {{provider}}",
                link_text: "Ya tienes una cuenta? Inicia sesión",
              },
              magic_link: {
                email_input_label: "Ingrese su email",
                email_input_placeholder: "Ej. nombre@gmail.com",
                button_label: "Enviar enlace Mágico",
                loading_button_label: "Enviando...",
                link_text: "Enviar enlace mágico via email",
                confirmation_text:
                  "Revise su correo electrónico para encontrar el enlace mágico.",
              },
              forgotten_password: {
                email_label: "Ingrese su email",
                password_label: "Ingrese su contaseña",
                email_input_placeholder: "Ej. nombre@gmail.com",
                button_label: "Restablecer la contraseña",
                loading_button_label: "Enviando instrucciones...",
                link_text: "Olvidaste tu contraseña?",
                confirmation_text:
                  "Revise su correo electrónico para encontrar el enlace de restablecimiento de contraseña.",
              },
              update_password: {
                password_label: "Ingresa una nueva contraseña",
                password_input_placeholder: "Repita su nueva contraseña",
                button_label: "Actualizar contraseña",
                loading_button_label: "Actualizando...",
                confirmation_text: "Su contraseña ha sido actualizada",
              },
            },
          }}
          appearance={{
            style: {
              button: {
                background: "#34668b",
                border: "1px solid #043959",
                fontFamily: "Noah Text",
                fontSize: "clamp(0.8rem, 0.7256rem + 0.3967vw, 1.1rem)",
                borderRadius: "35px",
              },
              anchor: {
                color: "#323232",
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
      </div>
    </div>
  );
};

export default SignIn;
