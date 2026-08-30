import api from "@/lib/api";

export async function login(
    email: string,
    password: string
) {
    const response = await api.post(
        "/auth/login",
        {
            email,
            password,
        }
    );

    return response.data;
}
export async function logout(): Promise<void> {
  await api.post("/auth/logout");
}