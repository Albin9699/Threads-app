import mongoose from 'mongoose';

// variable to check mongoose connection
let isConnected = false; 

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URL) return console.log('MONGODB NOT FOUND');

    if(isConnected) {
        console.log('connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected=true
        console.log('connected to  mongodb');
        
    } catch (error) {
        console.log(error);
        
    }
    
}