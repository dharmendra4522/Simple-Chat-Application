const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(() => {
        console.log("connection successful");

    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from:"rohit",
        to:"mohit",
        msg: "send me your notes",
        created_at: new Date(),
    },
    {
        from:"anita",
        to: "ramesh",
        msg: " bring me some money",
        created_at: new Date(),
    },
    {
        from:"tony",
        to:"peter",
        msg:"love you",
        created_at: new Date(),
    },
    {
        from:"Dharm",
        to:"Preeti",
        msg:"I Love You",
        created_at:new Date(),
    },
];

Chat.insertMany(allchats);
