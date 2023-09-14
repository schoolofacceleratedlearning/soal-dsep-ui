import { Server } from "socket.io";

export default function handler(req: any, res: any) {
  if (res.socket.server.io) {
    console.log("Server already started!");
    res.end();
    return;
  }

  console.log("msg ");
  console.log(res.socket.server);

  const io = new Server(res.socket.server, {
    path: "/api/socket_io",
    // @ts-expect-error property missing
    addTrailingSlash: false,
  });

  res.socket.server.io = io;

  const onConnection = (socket: any) => {
    console.log("New connection", socket.id);
  };

  io.on("connection", onConnection);

  console.log("Socket server started successfully!");
  res.end();
}
