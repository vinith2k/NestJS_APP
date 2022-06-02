import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://<username>:<password>@cluster0.0xnnx.mongodb.net/<schema>?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
