
export default function ProfilePage() {
    

    return (
        <section>
            <h1>Профиль</h1>

            <div style={{ display: 'flex', gap: 24, alignItems: 'center'}}>
                <img width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover'}} />
                <div>
                    <p><b>Имя:</b> {name}</p>
                    <p><b>Email:</b> {email}</p>
                    <p><b>Роль:</b> {role}</p>
                    <p><b>ID:</b> {id}</p>
                </div>
            </div>

            <div style={{ marginTop: 32, padding: 16, background: '#f1f5f9', borderRadius: 8 }}>
                <h3>Что внутри access token {}</h3>
                <p>ID пользователя {}</p>
                <p>Выдан {}</p>
                <p>Истекает {}</p>
            </div>

            <button>Выйти из аккаунта</button>
        </section>
    )
}