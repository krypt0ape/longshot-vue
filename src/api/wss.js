import { io } from "socket.io-client";

export const wss = (authorization) =>
  io(import.meta.env.VITE_API_URL, {
    autoConnect: true,
    extraHeaders: { authorization },
  })
    .on("connect", () => {
      console.log(`wss connected`);
    })
    .on("disconnect", () => {
      console.log(`wss disconnected`);
    })
    .on("connect_error", (data) => {
      console.log(`wss connection error`, data);
    });
