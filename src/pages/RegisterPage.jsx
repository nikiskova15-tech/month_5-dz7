import { Link } from "react-router-dom";


export default function RegisterPage() {

    return (
        <section style={{ maxWidth: 420 }}>
            <h1>Регистрация</h1>

            <form>
                <input placeholder="Name" autoComplete="name" />   

                <input type="email" autoComplete="email" />

                <input type="password" autoComplete="new-password" />

                <input type="password" placeholder="Повторите пароль" autoComplete="new-password" />

                <input type="url" placeholder="Ссылка на аватар" />

                <button>Зарегистрироваться</button>
            </form>

            <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
        </section>
    )
}