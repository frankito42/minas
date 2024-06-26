import mongoose from 'mongoose';

const connectionString ="mongodb+srv://franciscogoonzalez99:3101Auroxd@dali.jg7r6jj.mongodb.net/mina?retryWrites=true&w=majority&appName=dali";

const mondoAtlasDB = async () => { 
    try {
        await mongoose.connect(connectionString);
        console.log('Conectado a MongoDB Atlas'); 
    } catch (error) { 
        console.error(error); 
    }
};

export default mondoAtlasDB;