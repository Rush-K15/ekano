import { env } from "../config/env.js";

export const MOCK_USER = {
  id: "1",
  name: env.demoUser.name,
  email: env.demoUser.email,
  password: env.demoUser.password,
};