import { Link } from "react-router-dom";


export default function LoginPage() {

    return (
        <section style={{ maxWidth: 380 }}>
            <h1>Вход</h1>

            <form>
                <input type="email" autoComplete="email" />

                <input type="password" autoComplete="current-password" />

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