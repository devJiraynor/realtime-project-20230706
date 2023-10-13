import { io } from 'socket.io-client';

export const socket = io('ws://192.168.4.101:4020');