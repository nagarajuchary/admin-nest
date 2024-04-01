import { Schema, Document } from "mongoose";

export const AdminSchema = new Schema({
    username:String,
    password:String,
},
{timestamps:true});


export interface Admin extends Document{
    username:String;
    password:String;
}