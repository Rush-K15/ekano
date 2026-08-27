import { retrieveKnowledge } from "./services/retriever.service.js";

const queries = [
  "How many vacation days do employees get?",
  "How much paid leave do employees receive?",
  "Can employees work from home?",
  "How many days per week can employees work remotely?",
  "What is the company's holiday policy?",
  "Do employees need multi-factor authentication?",
  "What should employees do if there is a security incident?",
  "What is the company's dog policy?",
  "What is the company's pet policy?",
];

for (const query of queries) {
  console.log("\n========================================");
  console.log("Query:", query);
  console.log("========================================");

  const chunks = await retrieveKnowledge(query);

  chunks.forEach((chunk, index) => {
    console.log(`\n--- Result ${index + 1} ---`);
    console.log("Distance:", chunk.distance);
    console.log("Content:", chunk.content);
  });
}
