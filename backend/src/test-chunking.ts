import { chunkText } from "./utils/chunkText.js";

const text = `
Employees receive 24 paid leave days every year.
Employees must request leave through the HR portal.
Managers should approve requests within 3 business days.
Unused leave may be carried over according to company policy.
Employees working remotely may work up to two days per week.
All employees must use multi-factor authentication when accessing company systems.
Employees should report security incidents to the IT department immediately.
The company provides additional leave for certain approved circumstances.
Employees must follow the company's holiday calendar when planning annual leave.
`;

const chunks = chunkText(text);

console.log("Number of chunks:", chunks.length);

chunks.forEach((chunk, index) => {
    console.log(`\n--- Chunk ${index} ---`);
    console.log(chunk);
});