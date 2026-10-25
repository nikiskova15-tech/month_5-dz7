import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createProduct, getProducts, updateProduct, } from "../api/products";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [error, setError] = useState("");

// getProfile() register({ name, email, password, avatar })  login({ email, password }  logout()

    const { mutate, isPending, isError, error: mutationError, } = useMutation({
        mutationFn: (product) => {
            if (editingId !== null) {
                return updateProduct({
                    id: editingId,
                    changes: product,
                });
            }
            return createProduct(product);
        },
        onSuccess: () => {
            setTitle("");
            setPrice("");
            setEditingId(null);
        },
    });

    const handleCancel = () => {
        setName("")
        setEmail("")
        setPassword("")
        setAvatar("")
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Пароли не совпадают')
            return
        }

        setError('')
        alert('Успешно!')

        mutate({
            name: name.trim(),
            email: email.trim(),
            password: password(price),
            avatar: avatar.trim(),
        });
    };

    return (
        <section style={{ maxWidth: 420 }}>
            <h1>Регистрация</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    placeholder="Name"
                    autoComplete="name"
                    onChange={(event) => setName(event.target.value)}
                    required />

                <input
                    value={email}
                    type="email"
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required />

                <input
                    value={password}
                    type="password"
                    autoComplete="new-password"
                    onChange={(event) => setPassword(event.target.value)}
                    required />

                <input
                    value={confirmPassword}
                    type="password"
                    placeholder="Повторите пароль"
                    autoComplete="new-password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required />

                <input
                    value={avatar}
                    type="url"
                    placeholder="Ссылка на аватар"
                    onChange={(event) => setAvatar(event.target.value)}
                    required />

                {name || email || password || avatar !== ("") && (
                    <button type="button" onClick={handleCancel}>
                        Отмена
                    </button>
                )}

                {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}

                <button>Зарегистрироваться</button>
            </form>

            <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
        </section>
    )
}