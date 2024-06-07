import { io } from "socket.io-client";

export const wss = (authorization) =>
  io(import.meta.env.VITE_WSS_URL, {
    autoConnect: true,
    extraHeaders: { authorization },
    auth: { type: authorization ? "USER" : "GUEST" },
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
