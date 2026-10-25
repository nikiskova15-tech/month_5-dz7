import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/auth";
import { decodeJwt } from "../lib/decodeJwt";
import { endSession } from "../lib/session";
import { useAuthStore } from "../store/useAuthStore";

function formatDate(timestamp) {
    if (!timestamp) {
        return "Нет данных";
    }

    return new Date(timestamp * 1000).toLocaleString("ru-RU");
}

export default function ProfilePage() {
    const accessToken = useAuthStore((state) => state.accessToken);
    const navigate = useNavigate();

    const profileQuery = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
        enabled: Boolean(accessToken),
    });

    const handleLogout = () => {
        endSession();
        navigate("/login", { replace: true });
    };

    if (profileQuery.isPending) {
        return <p>Загружаем профиль...</p>;
    }

    if (profileQuery.isError) {
        return (
            <section>
                <h1>Не удалось загрузить профиль</h1>
                <p>{profileQuery.error.message}</p>
                <button type="button" onClick={handleLogout}>
                    Выйти
                </button>
            </section>
        );
    }

    const profile = profileQuery.data;
    const tokenData = decodeJwt(accessToken); 

    return (
        <section>
            <h1>Профиль</h1>

            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                {profile.avatar && (
                    <img
                        src={profile.avatar}
                        width={120}
                        height={120}
                        alt={`${profile.name}`}
                        style={{
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                )}

                <div>
                    <p><b>Имя:</b> {profile.name}</p>
                    <p><b>Email:</b> {profile.email}</p>
                    <p><b>Роль:</b> {profile.role}</p>
                    <p><b>ID:</b> {profile.id}</p>
                </div>
            </div>

            <div
                style={{
                    margin: 32,
                    padding: 16,
                    background: "#f1f5f9",
                    borderRadius: 8,
                }}
            >
                <h3>Данные access token</h3>
                <p><b>ID пользователя:</b>{tokenData?.sub ?? "Нет данных"}</p>
                <p><b>Выдан:</b> {formatDate(tokenData?.iat)}</p>
                <p><b>Истекает:</b> {formatDate(tokenData?.exp)}</p>
            </div>

            <button type="button" onClick={handleLogout}>
                Выйти
            </button>
        </section>
    );
}