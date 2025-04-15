import { eventHandler } from 'h3';

export const handler = eventHandler(async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" })
  };
});