const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "sunny",
    to: "rahul",
    msg: "hello bhai!",
    created_at: new Date()
},
{
    from: "sally",
    to: "sanjana",
    msg: "hi babe",
    created_at: new Date()
},
{
    from: "ankit",
    to: "rani",
    msg: "how are you?",
    created_at: new Date()
},
{
    from: "panu",
    to: "piyush",
    msg: "i am fine",
    created_at: new Date()
},
];

Chat.insertMany(allChats);
