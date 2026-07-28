import { MOCK_USER } from "../constants/mock-user.js";

export async function login(
    email: string,
    password: string
) {
    if (
        email !== MOCK_USER.email ||
        password !== MOCK_USER.password
    ) {
        return null;
    }

    return {
        id: MOCK_USER.id,
        name: MOCK_USER.name,
        email: MOCK_USER.email,
    };
}