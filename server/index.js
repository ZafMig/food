import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import keys from './config/keys.js';
import { 
    authRouter, 
    categoryRouter, 
    foodRouter,
    orderRouter,
    paymentRouter,
    userRouter
} from './routes/index.js';

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



  

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/categories', categoryRouter);
app.use('/food', foodRouter);
app.use('/orders', orderRouter);
app.use('/payment', paymentRouter);
app.use('/users', userRouter);

app.listen(PORT, (error) => {
    if (error) console.log(error);
    else console.log(`Server is running on port ${PORT}`);
});