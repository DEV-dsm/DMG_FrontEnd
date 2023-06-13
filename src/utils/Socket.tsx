import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("message", (data: string) => {
  console.log("Received message:", data);
});

socket.emit("message", "Hello from client");

// Socket.io 클라이언트는 서버에 대한 연결을 즉시 여는데 그것을 방지하는 것
export const soCket = io("http://localhost:3000", {
  autoConnect: false,
});
