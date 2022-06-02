import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://SU_Vinith:vini@cluster0.0xnnx.mongodb.net/assig?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
