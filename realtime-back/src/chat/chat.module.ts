import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { Chat } from './chat/chat';

@Module({
  controllers: [ChatController],
  providers: [ChatService, Chat]
})
export class ChatModule {}
