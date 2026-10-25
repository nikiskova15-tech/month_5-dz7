import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn: register,
        onSuccess: () => {
            navigate("/login", { replace: true });
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        try {
            await registerMutation.mutateAsync({
                name: name.trim(),
                email: email.trim(),
                password: password.trim(),
                avatar: avatar.trim(),
            });
        } catch {
            return null
        }
    }

    return (
        <section>
            <h1>Регистрация</h1>

            <form onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000, gap: 15 }}>
                <input
                    value={name}
                    type="text"
                    placeholder="Имя"
                    autoComplete="name"
                    onChange={(event) => setName(event.target.value)}
                    required
                />

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
                    autoComplete="new-password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <input
                    value={confirmPassword}
                    type="password"
                    placeholder="Повторите пароль"
                    autoComplete="new-password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                />

                <input
                    value={avatar}
                    type="url"
                    placeholder="Ссылка на аватар"
                    onChange={(event) => setAvatar(event.target.value)}
                    required
                />

                {(error || registerMutation.isError) && (
                    <p style={{ color: "red" }}>
                        {error || registerMutation.isError}
                    </p>
                )}

                <button type="submit" disabled={registerMutation.isPending}>
                    {registerMutation.isPending
                        ? "Регистрируем..."
                        : "Зарегистрироваться"}
                </button>
            </form>

            <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
        </section>
    )
}