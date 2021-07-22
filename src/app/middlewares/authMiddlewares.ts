import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddlewares(
    req: Request, res: Response, next: NextFunction,
) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, 'secret');
        // console.log(data);
        const { id } = data as TokenPayload;

        req.userId = id;

    } catch (err) {
        return res.sendStatus(401);
    }
}
