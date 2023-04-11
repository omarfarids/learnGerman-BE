import { UserSchema as users } from "../models/schema/user.schema";
import { Request, Response , NextFunction } from 'express';

export const auth = async (req:Request, res:Response, next:NextFunction) => {
    const { authorization } = req.headers;
    // if there is no authorization header, return 401
    if (!authorization) {
        res.status(401).send({
            message: 'Unauthorized'
        });
        return;
    }
    const [email, password] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');


    const userData = await users.findOne({ email: email }).select("-_id -__v");
    // check if user account exists
    if (!userData) {
        res.status(401).send({
            message: 'Account not found'
        });
        return { STATUS: "FAILURE", MESSAGE: "Account not found" };
    }

    if (userData.password !== password) {
        res.status(401).send({
            message: 'Invalid username or password'
        });
        return;
    }

    res.locals.user = userData;
    next();
}