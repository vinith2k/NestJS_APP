import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { users } from 'src/Interfaces/users.interface';
import { UserDocument } from 'src/Schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel("users") private Usermodel : Model<UserDocument>) {}
    
    //Fetch Users

    async getUsers() : Promise <users[]> {
        const usrData = await this.Usermodel.find().exec();
        return usrData;
    }
    
    //Add new users

    async newUser(user : users) : Promise<users> {
        this.Usermodel.init();
        const userAdd = new this.Usermodel(user);
        return userAdd.save();
    }
    

    //Update user
    async updateUsr(id:any,user:users): Promise<users> {
        const upUser =  await this.Usermodel.findByIdAndUpdate(id, user, {new: true});
        return upUser;
    }
    
    //Delete user
    async deleteUser(id:any): Promise<users> {
        const delUser =  await this.Usermodel.findByIdAndRemove(id);
        return delUser;
    }
     
    //add friend
    
    async addFriend(_id:string, user:users):Promise<users>{
        try{
            const _newID = new mongoose.Types.ObjectId(_id);
            if(mongoose.Types.ObjectId.isValid(_id) == true) {
                await this.Usermodel.findByIdAndUpdate({"_id" : _newID},{$push : {"friends" :user.friends[0]}});
                const getuser = await this.Usermodel.findById(_id);
                return getuser;
            } else {
                console.log("!!!!!!")
            }
        } catch(err) {
            console.log(err)
            return err;
        }
    }

    //delete friend

    async delUser(_id:users, user:users):Promise<users> {
        try{
            this.Usermodel.init();
            const deleteUser =  await this.Usermodel.findByIdAndUpdate({"_id":_id},{$pull:{"friends":user.friends[0]}});
            return deleteUser;
        }
        catch(err){
            return err;
        }
        
    }

}