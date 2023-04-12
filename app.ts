import express , {Request,Response,NextFunction} from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import { allListen } from './services/allLessons.service';
import { singleListen } from './services/singleListen.service';
import { LESSONS , LOGIN, SENGLELESSON, SIGNUP } from './utils/routes'
import { auth } from './middlewares/auth'
import { login, signup } from './services/auth.service';
import cors from 'cors'

const app = express();
const port = 8080;


// app config 
app.use(cors());

app.use(express.json())

app.listen(port, () => console.log(`Express app running on port ${port}!`));



// connecting to mongoDB
const MongoUrl = 'mongodb+srv://omarfarids:Om0123Ar@cluster0.ncvmfrb.mongodb.net/notes?retryWrites=true&w=majority'


mongoose.connect(MongoUrl,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
.then((res:any) => {
    console.log(
      'Connected to DB'
      );
    })
    .catch((err:any) => {
      console.log(err);
    });
    
    
    // App requests 
    /*
    GET: route for testing
    */
   app.get('/',(req:Request,res:Response)=>{
     res.send('hello world')
    })
    
    /*
    GET: to get all lesson
    */
   app.get(LESSONS,allListen)
   
   /*
   GET: to get single lesson
   */
  app.get(SENGLELESSON,singleListen)
  
  /*
  POST: to login
  */
 app.post(LOGIN, auth, login);

/*
POST: to login
*/
app.post(SIGNUP, signup);

