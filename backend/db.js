const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/gofood";
const mongoDB =async() => {
   await mongoose
   .connect(mongoURI)
   .catch((err) => console.log(err.message))
   .then((success) = async() => {
    console.log('connected');
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray((err,data) => {
        console.log("Hello")
        if(err){
            console.log(err);
        }
        else{
            console.log('Hi')
            global.food_items = data;
            console.log(global.food_items)
        }
    })
});

   

}

// async function getfood_items(){
//     try {
//         let db = await mongoDB();
//         const collection = await db.exports("food_items");
//         collection.find({}).toArray(function(err,data){
//             if(err) console.log(err);
//             else{
//                 global.food_items = data;
//                 console.log(global.food_items);
//             }
//         })
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// getfood_items()

module.exports = mongoDB;