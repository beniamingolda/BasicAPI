import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

export default module.exports = mongoose.model("Users", UserSchema);

// export class User {
// constructor(public id: string,public name:string,public active:boolean){}
// }
