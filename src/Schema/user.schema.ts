import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, isObjectIdOrHexString, ObjectId } from "mongoose"; 


export type UserDocument = User & Document;

@Schema()
export class User {
    
    @Prop()
    name:string;

    @Prop() 
    con_number:number;

    @Prop()
    email:string;
    
    @Prop()
    dept:string; 

    @Prop()
    friends:[string];

    // @Prop({type : mongoose.Schema.Types.ObjectId, ref : 'users'} )
    // _id:string;

}

export const UserSchema = SchemaFactory.createForClass(User);