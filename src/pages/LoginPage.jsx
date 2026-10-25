import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useAuth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginMutation = useLogin();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await loginMutation.mutateAsync({ email, password });
            navigate("/profile", { replace: true });
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <section style={{ maxWidth: 380 }}>
            <h1>Вход</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={email}
                    type="email"
                    placeholder="Почта"
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <input
                    value={password}
                    type="password"
                    placeholder="Пароль"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                {loginMutation.isError && (
                    <p style={{ color: "red" }}>
                        {loginMutation.error.message}
                    </p>
                )}

                <button type="submit" disabled={loginMutation.isPending}>
                    {loginMutation.isPending ? "Входим..." : "Войти"}
                </button>
            </form>

            <p>Нет аккаунта? <Link to='/register'>Зарегистрироваться</Link></p>
        </section>
    )
}