import { io, Socket } from 'socket.io-client';
import { SERVER_URL } from '@env';

interface ServerToClientEvents { }
interface ClientToServerEvents { }
interface InterServerEvents { }
interface SocketData { }

const CURR_SERVER_URL = SERVER_URL;

const socket:
  Socket<ServerToClientEvents, ClientToServerEvents>
  = io(CURR_SERVER_URL);

socket.on('connect', () => {
  console.log(`connected with id = ${socket.id}`);
});

export {
  socket,
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
};

export default socket;
