import OpenAI from "openai";
import { env } from "../config/env.js";

const ai = new OpenAI({
  apiKey: env.openRouterApiKey,
  baseURL: "https://openrouter.ai/api/v1",
});

export default ai;
