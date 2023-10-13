import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(4020, { transports: ['websocket', 'polling'], cors: { origin: '*' } })
export class Chat {

    @WebSocketServer()
    server: Server;

}
