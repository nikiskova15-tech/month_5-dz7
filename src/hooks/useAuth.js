import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/useAuthStore";
import { login } from "../api/auth";

export function useLogin() {
    const setTokens = useAuthStore((s) => s.setTokens)

    return useMutation({
        mutationFn: login,
        onSuccess: (tokens) => {
            setTokens({
                accessToken: tokens.access_token,
                refreshToken: tokens.refresh_token,
            });
        }
    })
}