import { Request, Response } from 'express';
import { UserSchema as User } from '../models/schema/user.schema';


// login auth 
export const login = (req:Request, res:Response) => {
    const user = res.locals.user
    res.status(200).send({
      message: 'Login Successfully.',
      body:user
  });
  }


// signup auth 
export const signup = async (req:Request, res:Response) => {
  let newUser =await new User(req.body)
  newUser.save()

  if(!newUser){
    res.status(401).send({
      message: 'Something went wrong.'
    });
  }
  
    res.status(200).send({
      message: 'Signup Successfully.',
      body:newUser
  });

}