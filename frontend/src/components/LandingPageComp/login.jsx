import logo from "../../assets/logo2.png";
import coffee from "../../assets/coffee.svg";
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
        axios.post('http://localhost:5000/Login', { email, password })
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
    }

    const validate = () => {
        const newErrors = {};

        if (!email.trim()) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;//Cette fonction retourne un tableau contenant les clés de l’objet// ["email", "password"]
    };

    return (
        <div className="min-h-screen bg-[#FFF3EB] text-[#3B170D] font-sans overflow-hidden">
            <header className="h-16 flex items-center items-stretch justify-between px-7 max-[980px]:px-4 py-10">
                <div className="flex items-center gap-1 min-w-[180px]">
                    <div className="w-35 h-24 flex items-center justify-center" aria-hidden="true">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
            </header>

            <main className="max-w-[1180px] mx-auto mt-3.5 mb-10 px-6 py-6 bg-[#3B170D]/10  rounded-[5px]">
                <section className="grid grid-cols-[1.1fr_.9fr] gap-10 items-stretch max-[980px]:grid-cols-1">
                    <div className="rounded-[10px] overflow-hidden shadow-soft">
                        <img src={coffee} alt="Coffee beans pack" className="w-full h-[700px] block object-cover min-h-[520px] max-[980px]:min-h-[340px]" />

                    </div>

                    <div className="flex flex-col gap-5 justify-center py-2.5 ">
                        <h1 className="font-display font-instrument text-center text-[54px] leading-[1.05] tracking-[.4px] mb-6 max-[980px]:text-[44px]">Log in</h1>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit} >
                            <input className={`w-full h-12 border border-[#3B170D] rounded-[5px] px-3.5 bg-[#FFF3EB] outline-none  placeholder:text-[#3B170D]/60 focus:border-[#3B170D] focus:ring-4 focus:ring-[#3B170D]/30 ${errors.email ? "border-red-500" : "border-[#3B170D]"
                                }`} placeholder="E-mail" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                            <input className={`w-full h-12 border border-[#3B170D] rounded-[5px] px-3.5 bg-[#FFF3EB] outline-none  placeholder:text-[#3B170D]/60 focus:border-[#3B170D] focus:ring-4 focus:ring-[#3B170D]/30 ${errors.password ? "border-red-500" : "border-[#3B170D]"
                                }`} placeholder="Password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                            {serverError && (
                                <p className="text-red-500 text-sm mt-1">{serverError}</p>
                            )}

                            <button className="w-full h-[50px] mt-1.5 border border-[#3B170D] rounded-[5px]  bg-[#3B170D] text-[#FFF3EB]  tracking-[.6px] hover:bg-[#BB9582] hover:text-[#3B170D]" type="submit">
                                Log in
                            </button>

                            <div className="flex items-center gap-3.5 my-[18px] text-[13px] text-[#3B170D]">
                                <span className="h-px bg-[#3B170D]/25 flex-1" />
                                <span>or</span>
                                <span className="h-px bg-[#3B170D]/25 flex-1" />
                            </div>


                            <div className="flex justify-center items-center gap-6 mt-2 mb-4">

                                <button
                                    type="button"
                                    className="group w-12 h-12 rounded-full border border-[#3B170D]/25 bg-[#3B170D] grid place-items-center hover:bg-[#FFF3EB] transition-colors"
                                    aria-label="Continue with Facebook"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 fill-current text-white group-hover:text-[#3B170D] transition-colors"
                                    >
                                        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.9c-.3 0-1.4-.1-2.7-.1-2.6 0-4.5 1.6-4.5 4.6V11H7v3h2.5v8h4z" />
                                    </svg>
                                </button>


                                <button
                                    type="button"
                                    className="group w-12 h-12 rounded-full border border-[#3B170D]/25 bg-[#3B170D] grid place-items-center hover:bg-[#FFF3EB] transition-colors"
                                    aria-label="Continue with Apple"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 fill-current text-white group-hover:text-[#3B170D] transition-colors"
                                    >
                                        <path d="M16.7 13.2c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1 8.5.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.6 2.7-.6 1.2 0 1.6.6 2.7.6 1.1 0 1.9-1 2.6-2 .8-1.1 1.1-2.2 1.1-2.2-.1 0-2.1-.8-2.1-3.7z" />
                                        <path d="M14.9 6.7c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.7-1.1 1.7-.9 2.7 1 0 1.9-.5 2.5-1.3z" />
                                    </svg>
                                </button>


                                <button
                                    type="button"
                                    className="group w-12 h-12 rounded-full border border-[#3B170D]/25 bg-[#3B170D] grid place-items-center hover:bg-[#FFF3EB] transition-colors"
                                    aria-label="Continue with Google"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 fill-current text-white group-hover:text-[#3B170D] transition-colors"
                                    >
                                        <path d="M21.6 12.3c0-.7-.1-1.2-.2-1.8H12v3.4h5.4c-.1.9-.8 2.3-2.3 3.2l-.1.4 2.9 2.2.2 0c2-1.9 3.1-4.7 3.1-7.6z" />
                                        <path d="M12 22c2.7 0 5-0.9 6.7-2.5l-3.2-2.4c-.9.6-2 .9-3.5.9-2.6 0-4.8-1.7-5.6-4.1l-.4 0-3 2.3 0 .3C4.6 19.6 8 22 12 22z" />
                                        <path d="M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9l0-.4-3-2.3-.3.1C2.4 9 2 10.4 2 12s.4 3 1.1 4.3l3.3-2.4z" />
                                        <path d="M12 6.9c1.9 0 3.1.8 3.8 1.5l2.8-2.7C17 4.1 14.7 3 12 3 8 3 4.6 5.4 3.1 8.7l3.3 2.4C7.2 8.6 9.4 6.9 12 6.9z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-center text-[18px] text-[#3B170D]/80">
                                Create Account?{" "}
                                <a href="/Signup" className="text-[#3B170D] font-instrument no-underline hover:underline">
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
