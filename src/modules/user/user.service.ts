import { Injectable } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'
import { User } from './../../entities/user.entity'

@Injectable()
export class UserService {

    private users =[
        {
            id: '1',
            username: 'admin',
            password: '123',
            role: 'ADMIN'
        },
        {
            id: '2',
            username: 'user1',
            password: '123',
            role: 'VIEWER'
        },
        {
            id: '3',
            username: 'user2',
            password: '123',
            role: 'VIEWER'
        },
        {
            id: '4',
            username: 'user3',
            password: '123',
            role: 'VIEWER'
        },
    ]

    private randomString(length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    
        if (! length) {
            length = Math.floor(Math.random() * chars.length);
        }
    
        var str = '';
        for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    async addUser( username, password, role ) :Promise<any>{
        const newUser = {
            id : this.randomString(10),
            username,
            password,
            role
        }
        this.users.push(newUser)
        return newUser
    }

    async getRoleUser(token){
        const user = jwt.verify(token, 'buiduchuy')
        return user.role || ''
    }

    async getAllUser(){
        return [...this.users]
    }

    private async getToken(user): Promise<any>{
        return jwt.sign(user, 'buiduchuy')
    }

    async loginUser(username, password){
        for (let index = 0; index < this.users.length; index++) {
            if(username == this.users[index].username && password == this.users[index].password){
                const user = {
                    username,
                    password,
                    role : this.users[index].role
                }
                const token = this.getToken(user)
                return token
            }
        }
        return null
    }
}
