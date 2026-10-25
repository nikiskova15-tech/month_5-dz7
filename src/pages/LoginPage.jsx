import { Link } from "react-router-dom";


export default function LoginPage() {



    return (
        <section style={{ maxWidth: 380 }}>
            <h1>Вход</h1>

            <form>
                <input
                    value={email}
                    type="email"
                    placeholder="Почта"
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required />

                <input
                    value={password}
                    type="password"
                    placeholder="Пароль"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                    required />

                <p>Ошибка от сервера</p>

                <button>Войти</button>
            </form>

            <p>
                Нет аккаунта ?
                <Link to='/register'>Зарегистрироваться</Link>
            </p>
        </section>
    )
}