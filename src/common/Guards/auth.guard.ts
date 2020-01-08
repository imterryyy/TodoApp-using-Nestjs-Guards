import { CanActivate, ExecutionContext, Injectable, Body } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthGuard implements CanActivate{

    async canActivate( context: ExecutionContext ){
        const { headers } = context.switchToHttp().getRequest()
        const token = headers.authorization
        if(token){
            const { role } =  jwt.verify(token, 'buiduchuy')
            return role == 'ADMIN'
        }
        return false
    }
}