import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { response } from 'src/Interfaces/respnse.interface';
import { users } from 'src/Interfaces/users.interface';
import { UserService } from 'src/service/user/user.service';

@Controller('user')
export class UserController {
    constructor(private user:UserService) {}

    // Fetch Users

    @Get()
    async getUsers() : Promise<response> {
        const users = await this.user.getUsers();
        return {
            status:200,
            message:'sucess',
            data:users,
        }

    }

     // Add Users

    @Post() 
    async newUser( @Body() user : users ) : Promise<response> {
        const addUser = await this.user.newUser(user);
        return {
            status:200,
            message:'new user added :)',
            data:addUser, 
        }
    }


    //update user with dynamic id
    @Put('/:id')
    async update( @Param('id') id, @Body() user: users) {
        const updateUser = await this.user.updateUsr(id, user);
        return{
            status:200,
            message:'user has been updated',
            data:updateUser,

        }
    }

    //delete user
    @Delete('/:id')
    async delete ( @Param('id') user:users) {
        const deluser = await this.user.deleteUser(user);
        return {
            status:202,
            message:'user has been Deleted',
            data:deluser,
        }
    }
    
    @Put('/add/:id')
    async addUser(@Query
        ('id')id:string,@Body()user:users){
        const addUsr = await this.user.addFriend(id,user);
        return{
            status:202,
            message:'Friend added sucess :)',
            data:addUsr,
        }
    }

}
   

