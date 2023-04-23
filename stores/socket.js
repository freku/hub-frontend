import { io } from "socket.io-client";

export const useSocketStore = defineStore("socket", {
  state: () => ({
    socket: null,
    statusSocket: null,
    sockets: {
      main: {
        connected: false,
        error: null,
      },
      status: {
        connected: false,
        error: null,
      },
    },
  }),
  actions: {
    // TODO: refactor it for multiple sockets
    // TODO2: or just remove connect, disconnect and error if not needed
    connect(query) {
      this.socket = io("http://localhost:3000/", {
        withCredentials: true,
        forceNew: true,
        query,
      });

      this.socket.on("connect", () => {
        this.sockets.main.connected = true;
      });

      this.socket.on("disconnect", () => {
        this.sockets.main.connected = false;
      });

      this.socket.on("error", (error) => {
        this.sockets.main.error = error;
      });
    },
    disconnect() {
      this.socket.disconnect();
    },
    connectStatus() {
      this.statusSocket = io("http://localhost:3000/status", {
        withCredentials: true,
      });

      this.statusSocket.on("connect", () => {
        this.sockets.status.connected = true;
      });

      this.statusSocket.on("disconnect", () => {
        this.sockets.status.connected = false;
      });

      this.statusSocket.on("error", (error) => {
        this.sockets.status.error = error;
      });
    },
    disconnectStatus() {
      this.statusSocket.disconnect();
    },
  },
});
