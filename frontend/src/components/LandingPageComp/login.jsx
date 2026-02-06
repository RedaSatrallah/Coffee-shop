import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;
    axios
      .post("http://localhost:5000/Login", { email, password })
      .then((result) => {
        const token = result.data?.token; //“Accède à cette propriété seulement si ce qui est avant existe”//Donne-moi token SI result.data existe, sinon retourne undefined sans erreur”
        if (!token) {
          setServerError("Token not received from server");
          return;
        }

        localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((err) => {
        const msg = "Login failed";
        setServerError(msg);
      });
  };

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; //Cette fonction retourne un tableau contenant les clés de l’objet// ["email", "password"]
  };

  return (
    <div className="min-h-screen bg-peach-light text-brown font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center min-w-[140px] sm:min-w-[180px]">
          <img
            src="/assets/logo2.png"
            alt="Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
          />
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-[1180px] mx-auto mt-4 mb-10 px-4 sm:px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 bg-brown/10 rounded-md p-5 sm:p-6">
          {/* IMAGE */}
          <div className="rounded-lg overflow-hidden shadow-soft">
            <img
              src="/assets/coffee.svg"
              alt="Coffee beans pack"
              className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-full object-cover"
            />
          </div>

          {/* FORM */}
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-center font-instrument text-3xl sm:text-4xl lg:text-[54px] leading-tight">
              Log in
            </h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className={`h-12 border rounded-md px-3 bg-peach-light outline-none placeholder:text-brown/60 focus:ring-4 focus:ring-brown/30 ${
                  errors.email ? "border-red-500" : "border-brown"
                }`}
                placeholder="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                className={`h-12 border rounded-md px-3 bg-peach-light outline-none placeholder:text-brown/60 focus:ring-4 focus:ring-brown/30 ${
                  errors.password ? "border-red-500" : "border-brown"
                }`}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              {serverError && (
                <p className="text-red-500 text-sm">{serverError}</p>
              )}

              <button
                className="h-12 mt-2 rounded-md bg-brown text-peach-light tracking-wide hover:bg-[#BB9582] hover:text-brown transition"
                type="submit"
              >
                Log in
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 my-4 text-sm">
                <span className="flex-1 h-px bg-brown/25" />
                <span>or</span>
                <span className="flex-1 h-px bg-brown/25" />
              </div>

              {/* SOCIAL */}

              <div className="flex justify-center items-center gap-6 mt-2 mb-4">
                <button
                  type="button"
                  className="group w-12 h-12 rounded-full border border-brown/25 bg-brown grid place-items-center hover:bg-peach-light transition-colors"
                  aria-label="Continue with Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current text-white group-hover:text-brown transition-colors"
                  >
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.9c-.3 0-1.4-.1-2.7-.1-2.6 0-4.5 1.6-4.5 4.6V11H7v3h2.5v8h4z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="group w-12 h-12 rounded-full border border-brown/25 bg-brown grid place-items-center hover:bg-peach-light transition-colors"
                  aria-label="Continue with Apple"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current text-white group-hover:text-brown transition-colors"
                  >
                    <path d="M16.7 13.2c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1 8.5.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.6 2.7-.6 1.2 0 1.6.6 2.7.6 1.1 0 1.9-1 2.6-2 .8-1.1 1.1-2.2 1.1-2.2-.1 0-2.1-.8-2.1-3.7z" />
                    <path d="M14.9 6.7c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.7-1.1 1.7-.9 2.7 1 0 1.9-.5 2.5-1.3z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="group w-12 h-12 rounded-full border border-brown/25 bg-brown grid place-items-center hover:bg-peach-light transition-colors"
                  aria-label="Continue with Google"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current text-white group-hover:text-brown transition-colors"
                  >
                    <path d="M21.6 12.3c0-.7-.1-1.2-.2-1.8H12v3.4h5.4c-.1.9-.8 2.3-2.3 3.2l-.1.4 2.9 2.2.2 0c2-1.9 3.1-4.7 3.1-7.6z" />
                    <path d="M12 22c2.7 0 5-0.9 6.7-2.5l-3.2-2.4c-.9.6-2 .9-3.5.9-2.6 0-4.8-1.7-5.6-4.1l-.4 0-3 2.3 0 .3C4.6 19.6 8 22 12 22z" />
                    <path d="M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9l0-.4-3-2.3-.3.1C2.4 9 2 10.4 2 12s.4 3 1.1 4.3l3.3-2.4z" />
                    <path d="M12 6.9c1.9 0 3.1.8 3.8 1.5l2.8-2.7C17 4.1 14.7 3 12 3 8 3 4.6 5.4 3.1 8.7l3.3 2.4C7.2 8.6 9.4 6.9 12 6.9z" />
                  </svg>
                </button>
              </div>

              {/* SIGNUP */}
              <div className="text-center text-base sm:text-lg text-brown/80 mt-4">
                Create Account?{" "}
                <a
                  href="/Signup"
                  className="font-instrument text-brown hover:underline"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
