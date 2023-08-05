import mongoose from 'mongoose';

// console.log(process.env.DB_URL);
// mongoose.set('debug', true);
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb+srv://matthieu:matthieu@cluster0.gxgp8ti.mongodb.net/garage", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion réussie à MongoDB !');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error.message);
  }
}

connectToDatabase();

export default mongoose;