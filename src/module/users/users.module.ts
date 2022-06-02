import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controller/user/user.controller';
import { UserSchema } from 'src/Schema/user.schema';
import { UserService } from 'src/service/user/user.service';

@Module({
    imports:[MongooseModule.forFeature([{name:"users",schema:UserSchema}])],
    controllers:[UserController],
    providers : [UserService]
})
export class UsersModule {}
